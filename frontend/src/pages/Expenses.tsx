import React from 'react';
import DateSelect from '../components/DateSelect';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseTotal from '../components/ExpenseTotal';
import { DateSelectionHandler, Expense } from '../shared/types';

type PageProps = {
  year: string;
  month: string;
  isLoading: boolean;
  expenses: Expense[];
  onChangeHandler: DateSelectionHandler;
}

const Expenses = ({ year, month, expenses, isLoading, onChangeHandler }: PageProps) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <DateSelect year={year} month={month} onChangeHandler={onChangeHandler} />
        <ExpenseTotal expenses={expenses} />
      </div>
      {!isLoading && <ExpenseTable expenses={expenses} />}
    </div>
  )
}

export default Expenses;
