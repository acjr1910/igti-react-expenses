import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Expense } from '../../shared/types';

export const useCreateTable = (expenses: Expense[]) => {
  const createExpenseData = ({ descricao, categoria, dia, valor, id }: Expense) => {
    return { descricao, categoria, dia, valor, id };
  }

  const rows = expenses.map((expense) => createExpenseData(expense));
  
  const table = (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Despesa</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Dia</TableCell>
            <TableCell align="right">Valor (R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.descricao}</TableCell>
              <TableCell align="right">{row.categoria}</TableCell>
              <TableCell align="right">{row.dia}</TableCell>
              <TableCell align="right">{row.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return {
    Table: () => table
  }
}

export const useCreateResumeTable = (expenses: Expense[]) => {
  const resume = expenses.reduce((acc: any, curr: any) => {
    if (acc[curr.categoria]) {
      acc[curr.categoria] += curr.valor;
      return acc;
    }
    acc[curr.categoria] = curr.valor;
    return acc;
  }, {});

  const rows = [];
  for(let key in resume) {
    rows.push({ categoria: key, valor: resume[key], id: key});
  }
  
  const table = (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Categoria</TableCell>
            <TableCell align="right">Valor (R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.categoria}</TableCell>
              <TableCell align="right">{row.valor.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return {
    ResumeTable: () => table
  }
}