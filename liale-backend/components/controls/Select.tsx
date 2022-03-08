import React from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select as MuiSelect,
  FormHelperText,
} from "@material-ui/core";

function Select(props) {
  const { name, label, value, onChange, options, error = null } = props;
  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map((option) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.title}
            </MenuItem>
          );
        })}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

export default Select;
