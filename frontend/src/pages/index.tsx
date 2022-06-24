import React from 'react';
import DateSelect from '../components/DateSelect';
import { ExpensesProps } from '../types';

type PageProps = ExpensesProps & {
  isLoading: boolean;
}

export const Expenses = ({ year, month, isLoading, onChangeHandler }: PageProps) => {
  return (
    <div>
      <div>
        <DateSelect year={year} month={month} onChangeHandler={onChangeHandler} />
      </div>
    </div>
  )
}
