import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));

interface ButtonProps {
  text: string;
  size?: "medium" | "large" | "small";
  color?: "inherit" | "default" | "primary" | "secondary";
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;
  type: "submit" | "button";
}

const Button = (props: ButtonProps) => {
  const classes = useStyles();
  const { text, size, color, variant, onClick, type } = props;

  return (
    <MuiButton
      classes={{ root: classes.root, label: classes.label }}
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      type={type || "button"}
      onClick={onClick}>
      {text}
    </MuiButton>
  );
};

export default Button;
