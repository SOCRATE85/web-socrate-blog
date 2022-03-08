import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

interface DatePickerProps {
  name: string;
  label: string;
  value: string;
  onChange: (params: any) => void;
}

const DatePicker = (props: DatePickerProps) => {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventParams = (name: string, value: Date) => ({
    target: { name, value },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MM/dd/yyyy"
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefaultEventParams(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
