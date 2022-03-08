import { ChangeEvent, ReactChild, useState } from "react";
import { loginFValuesProps } from "./types";
import { makeStyles } from "@material-ui/core";

interface UseFormProps extends loginFValuesProps {}

export const useForm = (
  initialFValues: UseFormProps,
  validateOnChange = false,
  validate
) => {
  const [values, setValues] = useState<UseFormProps>(initialFValues);
  const [errors, setErrors] = useState<UseFormProps>(initialFValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(values);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors(initialFValues);
  };

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

interface FormProps {
  children: ReactChild;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
}

export const Form = (props: FormProps) => {
  const classes = useStyles();
  const { children, onSubmit } = props;
  return (
    <form
      className={classes.root}
      onSubmit={onSubmit}
      autoComplete="false"
      method="POST">
      {children}
    </form>
  );
};
