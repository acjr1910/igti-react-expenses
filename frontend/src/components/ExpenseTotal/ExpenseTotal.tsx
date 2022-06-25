import React from 'react';
import { Expense } from '../../shared/types';

type ComponentProps = {
  expenses: Expense[]
}

const ExpenseTotal = ({ expenses } : ComponentProps) => {
  const sumExpenses = () => expenses.reduce((prev, curr) => prev + curr.valor, 0).toFixed(2);

  return (
    <p style={{ fontFamily: 'roboto', fontSize: '18px' }}>Despesa total: <strong>R$ {sumExpenses()}</strong></p>
  )
}

export default ExpenseTotal