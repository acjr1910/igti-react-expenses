import React from 'react';
import * as Pages from '../pages';
import { DateSelectionHandler } from '../types';
import { useFetchExpenses } from '../hooks/useFetchExpenses';

const App = () => {
  const [year, setYear] = React.useState<string>('2021');
  const [month, setMonth] = React.useState<string>('01');

  const { expenses, isLoading, fetchExpenses } = useFetchExpenses();

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

  // Load first expenses
  React.useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  // Load expenses on date change 
  React.useEffect(() => {
    fetchExpenses(year, month);
  }, [year, month, fetchExpenses]);
  
  return (
      <Pages.Expenses
        year={year}
        month={month}
        isLoading={isLoading}
        onChangeHandler={handleChange} />
  )
}; 

export default App;
