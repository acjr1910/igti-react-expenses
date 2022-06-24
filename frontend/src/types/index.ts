export type DateSelectionHandler = (event: React.ChangeEvent<{ value: unknown }>, type: string) => void;

export type ExpensesProps = {
  year: string;
  month: string;
  onChangeHandler: DateSelectionHandler;
}