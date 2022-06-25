import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import ExpensesPage from '../pages';
import { DateSelectionHandler } from '../shared/types';
import { useFetchExpenses } from './useFetchExpenses';
import { INITIAL_DATE, EXPENSES_URL_PATH } from './constants';

const App = () => {
  // State
  const [year, setYear] = React.useState<string>(INITIAL_DATE.year);
  const [month, setMonth] = React.useState<string>(INITIAL_DATE.month);

  // Hooks
  const history = useHistory();
  const location = useLocation();
  const { expenses, isLoading, fetchExpenses } = useFetchExpenses();

  // Local Functions
  const handleChange: DateSelectionHandler = (event, type) => {
    switch(type) {
      case 'Year':
        setYear(event.target.value as string);
        break;
      case 'Month':
        setMonth(event.target.value as string);
        break;
    }
  }

  const pushRouter = React.useCallback(() => {
    history.push(`${EXPENSES_URL_PATH}${year}-${month}`);
  }, [history, month, year]);

  // Side Effects

  // Load first expenses
  React.useEffect(() => {
    fetchExpenses(`${INITIAL_DATE.year}-${INITIAL_DATE.month}`);
  }, [fetchExpenses]);

  // Load expenses on location change
  React.useEffect(() => {
    const splittedPathname = location.pathname.split('/');
    const date = splittedPathname[2];
    fetchExpenses(date);
  }, [location, fetchExpenses])

  // Update route on year/month change
  React.useEffect(() => {
    pushRouter()
  }, [year, month, pushRouter]);
  
  return (
      <ExpensesPage
        year={year}
        month={month}
        isLoading={isLoading}
        expenses={expenses}
        onChangeHandler={handleChange} />
  )
}; 

export default App;
