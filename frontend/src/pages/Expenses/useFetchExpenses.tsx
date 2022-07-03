import React from 'react';
import { useHistory } from "react-router-dom";

export const useFetchExpenses = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [expenses, setExpenses] = React.useState([]);

  const history = useHistory();

  const fetchExpenses = React.useCallback(async (date) => {
    if (!isLoading) setIsLoading(true);
    const URL = `http://localhost:3001/despesas?mes=${date}&_sort=dia`;
    fetch(URL, { credentials: 'include' }).then((resp) => {
      if (resp.status === 401) return history.push('/login');
      return resp.json();
    }).then((data) => setExpenses(data));
    setIsLoading(false);
    return;
  }, [history, isLoading]);

  return {
    expenses,
    isLoading,
    fetchExpenses,
  }
}