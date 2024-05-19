"use client";
import { Form, Formik } from "formik";
import React from "react";
import Input from "../components/Input/Input";
import { Box, Button } from "@mui/material";
import InputV2 from "../components/InputV2/InputV2";
import Text from "../components/Text/Text";

const FieldBox = ({ children }: any) => {
  return <Box my={2}>{children}</Box>;
};

const LoginForm = () => {
  return (
    <Formik
      onSubmit={(values) => console.log(values)}
      initialValues={{ email: "", password: "" }}
    >
      {({ values, touched, errors, setFieldValue }) => {
        return (
          <Form>
            <FieldBox>
              <InputV2
                inputLabel={"Email"}
                size="small"
                placeholder="your@email.com"
                onChange={(e: any) => {
                  setFieldValue("email", e.target.value);
                }}
              />
            </FieldBox>
            <FieldBox>
              <InputV2
                inputLabel={"Password"}
                type="password"
                placeholder="123123123123123"
                size="small"
                onChange={(e: any) => {
                  setFieldValue("password", e.target.value);
                }}
              />
            </FieldBox>
            <FieldBox>
              <Box className="flex-all-center">
                <Button
                  type="submit"
                  sx={{
                    borderRadius: "50px",
                    height: "40px",
                    boxShadow: "none",
                  }}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </Box>
              <Box>
                <Text sx={{ marginTop: 5 }} centerAlign textType="sub-text">
                  Create <a>HERE!</a> if you dont have one
                </Text>
              </Box>
            </FieldBox>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
