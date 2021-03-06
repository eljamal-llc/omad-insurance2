import { FC, useContext, useState, forwardRef } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import FormGroup from "@mui/material/FormGroup";
import { AuthContext } from "../../../context/AuthContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

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

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AuthPage: FC<AuthPageProps> = () => {
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState(0);
  const {
    signIn,
    registration,
    setOpen,
    open,
    alert,
    setAlert,
    errorMsg,
    setErrorMsg,
  } = useContext(AuthContext);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setAlert(false);
    setErrorMsg(null);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Wrapper>
      <Stack spacing={2} sx={{ width: "100%" }}>
        {/* <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>

        <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {/* @ts-ignore */}
            {errorMsg && errorMsg.type == "login" && errorMsg.message}
            {errorMsg &&
              errorMsg.type == "registration" &&
              Object.keys(errorMsg.message).map(function (key) {
                return <div key={key}>{errorMsg.message[key]}</div>;
              })}
          </Alert>
        </Snackbar>
      </Stack>
      <AuthBlock>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="tabs"
          >
            <Tab label="??????????????????????" {...a11yProps(0)} className="tab-item" />
            <Tab label="????????" {...a11yProps(1)} className="tab-item" />
          </Tabs>
        </Box>
        {/* -------Registration------- */}
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            lastName: "",
          }}
          onSubmit={async (values) => {
            await registration(values);
          }}
          validationSchema={Schema}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <form onSubmit={handleSubmit} action="/api/login" method="POST">
              <TabPanel value={value} index={0}>
                <FormElements
                  inputType="input-text"
                  name="name"
                  placeholder="??????"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FormElements
                  inputType="input-text"
                  name="lastName"
                  placeholder="??????????????"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.lastName}
                />
                <FormElements
                  inputType="input-text"
                  name="email"
                  placeholder="?????????? ?????? ?????????????????????? ??????????"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormElements
                  inputType="input-text"
                  name="password"
                  placeholder="????????????"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.password}
                />
                <FormElements
                  inputType="input-text"
                  name="confirmPassword"
                  placeholder="?????????????????????? ????????????"
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
                    ?? ???????????????? ??
                    <Link href="/politics"  passHref>
                      <a>???????????????????????????????? ??????????????????????</a>
                    </Link>
                  </span>
                </FormCheck>

                <AuthButton type="submit" disabled={!check}>
                  ??????????????????????
                </AuthButton>
              </TabPanel>
            </form>
          )}
        </Formik>

        {/* -------Login------- */}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            await signIn(values);
            // console.log("login = > ", values);
          }}
          validationSchema={SchemaLogIn}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <form onSubmit={handleSubmit}>
              <TabPanel value={value} index={1}>
                <FormElements
                  inputType="input-text"
                  name="email"
                  placeholder="?????????? ?????? ?????????????????????? ??????????"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormElements
                  inputType="input-text"
                  name="password"
                  placeholder="????????????"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.password}
                />
                <AuthLink>
                  <Link href="/auth" passHref>
                    <a>???????????? ?????????????</a>
                  </Link>
                </AuthLink>

                <AuthButton type="submit">????????</AuthButton>
              </TabPanel>
            </form>
          )}
        </Formik>
      </AuthBlock>
    </Wrapper>
  );
};

export default AuthPage;
