import React from 'react'
import { useCreateTable, useCreateResumeTable } from './useCreateTable';
import { Expense } from '../../shared/types';

type ComponentProps = {
  expenses: Expense[]
}

const ExpenseTable = ({ expenses } : ComponentProps) => {
  const { Table } = useCreateTable(expenses);
  const { ResumeTable } = useCreateResumeTable(expenses);
  return (
    <div>
      <ResumeTable />
      <div style={{ margin: 40 }}></div>
      <Table />
    </div>
  );
}

export default ExpenseTable