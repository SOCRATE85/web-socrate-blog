import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useForm, Form } from "../useForm";
import { loginFValuesProps } from "../types";
import * as Controls from "../controls";
import "./Home.module.css";

const loginFValues: loginFValuesProps = {
  username: "",
  password: "",
};
const contrainerStyle = {
  marginTop: 80,
};
const paperStyle = {
  padding: 20,
  width: 280,
  margin: "20px auto",
};
const avatarStyle = {
  backgroundColor: "red",
};
const Home: React.FC<{}> = () => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("username" in fieldValues) {
      temp.username = values.username
        ? /$^|.+@.+..+/.test(values.username)
          ? ""
          : "EmailID is not valid"
        : "This field is required";
    }
    if ("password" in fieldValues) {
      temp.password =
        values.password.length > 9 ? "" : "Minimum 10 digit is required";
    }
    setErrors({ ...temp });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, handleInputChange, errors, setErrors } = useForm(
    loginFValues,
    true,
    validate
  );

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Grid style={contrainerStyle}>
      <Paper elevation={10} style={paperStyle}>
        <Grid
          alignItems="center"
          style={{ display: "flex", flexDirection: "column" }}
          container>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Log In</h2>
        </Grid>

        <Form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <Controls.Input
                variant="outlined"
                label="Username"
                name="username"
                error={errors.username}
                value={values.username}
                onChange={handleInputChange}
              />
              <Controls.Input
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                error={errors.password}
                value={values.password}
                onChange={handleInputChange}
              />
              <div>
                <Controls.Button
                  variant="contained"
                  color="primary"
                  size="large"
                  text="Submit"
                  type="submit"
                />
              </div>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </Grid>
  );
};

export default Home;
