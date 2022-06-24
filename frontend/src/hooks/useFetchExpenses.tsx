import React from 'react';

export const useFetchExpenses = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [expenses, setExpenses] = React.useState(null);

  const fetchExpenses = React.useCallback(async (year = '2021', month = '01') => {
    if (!isLoading) setIsLoading(true);
    const URL = `http://localhost:3001/despesas?mes=${year}-${month}&_sort=dia`;
    fetch(URL).then((resp) => resp.json()).then((data) => setExpenses(data));
    setIsLoading(false);
    return;
  }, [isLoading]);

  return {
    expenses,
    isLoading,
    fetchExpenses,
  }
}