import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DateSelectionHandler } from '../../types';
import { MONTHS } from '../../constants';

type ComponentProps = {
  year: string;
  month: string;
  onChangeHandler: DateSelectionHandler;
}

const DateSelect = ({ year, month, onChangeHandler } : ComponentProps) => {
  return (
    <div>
     <FormControl>
        <InputLabel id="data-select-year">Year</InputLabel>
        <Select
          labelId="data-select-year"
          id="select-year"
          value={year}
          onChange={(event) => onChangeHandler(event, 'Year')}
        >
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="data-select-month">Month</InputLabel>
        <Select
          labelId="data-select-month"
          id="select-month"
          value={month}
          onChange={(event) => onChangeHandler(event, 'Month')}
        >
          {Object.keys(MONTHS).map((month) => <MenuItem key={month} value={MONTHS[month as keyof typeof MONTHS]}>{month}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
}

export default DateSelect;
