export type DateSelectionHandler = (event: React.ChangeEvent<{ value: unknown }>, type: string) => void;

export type Expense = {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
};