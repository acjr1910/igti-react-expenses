import React from 'react'
import { useCreateTable } from './useCreateTable';
import { Expense } from '../../shared/types';

type ComponentProps = {
  expenses: Expense[]
}

const ExpenseTable = ({ expenses } : ComponentProps) => {
  const { Table } = useCreateTable(expenses);
  return <Table />;
}

export default ExpenseTable