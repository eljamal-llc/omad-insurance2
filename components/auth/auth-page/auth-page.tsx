import { FC, useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { AuthPageProps } from "./auth-page.t";
import {
  AuthBlock,
  AuthButton,
  AuthLink,
  FormCheck,
  Wrapper,
} from "./auth-page.e";
import { FormElements } from "../..";

import Checkbox from "@mui/material/Checkbox";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="panel">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Schema = Yup.object().shape({
  email: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
  name: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  confirmPassword: Yup.string().when("password", {
    is: (val: any) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});
const SchemaLogIn = Yup.object().shape({
  email: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
});

const AuthPage: FC<AuthPageProps> = () => {
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Wrapper>
      <AuthBlock>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="tabs"
          >
            <Tab label="Регистрация" {...a11yProps(0)} className="tab-item" />
            <Tab label="Вход" {...a11yProps(1)} className="tab-item" />
          </Tabs>
        </Box>

        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            lastName: "",
          }}
          onSubmit={(values) => {
            // console.log(values);
          }}
          validationSchema={Schema}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <form onSubmit={handleSubmit} action="/api/login" method="POST">
              <TabPanel value={value} index={0}>
                <FormElements
                  inputType="input-text"
                  name="name"
                  placeholder="Имя"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FormElements
                  inputType="input-text"
                  name="lastName"
                  placeholder="Фамилия"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.lastName}
                />
                <FormElements
                  inputType="input-text"
                  name="email"
                  placeholder="Номер или Электронная почта"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormElements
                  inputType="input-text"
                  name="password"
                  placeholder="Пароль"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.password}
                />
                <FormElements
                  inputType="input-text"
                  name="confirmPassword"
                  placeholder="Подтвердить пороль"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                />

                <FormCheck>
                  <FormGroup>
                    <Checkbox {...label} onClick={() => setCheck(!check)} />
                  </FormGroup>
                  <span className="label">
                    Я согласен с
                    <Link href="/blog/hello-world" passHref>
                      <a>пользовательским соглашением</a>
                    </Link>
                  </span>
                </FormCheck>

                <AuthButton type="submit" disabled={!check}>
                  Регистрация
                </AuthButton>
              </TabPanel>
            </form>
          )}
        </Formik>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={SchemaLogIn}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <form onSubmit={handleSubmit}>
              <TabPanel value={value} index={1}>
                <FormElements
                  inputType="input-text"
                  name="email"
                  placeholder="Номер или Электронная почта"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormElements
                  inputType="input-text"
                  name="password"
                  placeholder="Пароль"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.password}
                />
                <AuthLink>
                  <Link href="/auth" passHref>
                    <a>Забыли пароль?</a>
                  </Link>
                </AuthLink>

                <AuthButton type="submit">Регистрация</AuthButton>
              </TabPanel>
            </form>
          )}
        </Formik>
      </AuthBlock>
    </Wrapper>
  );
};

export default AuthPage;
