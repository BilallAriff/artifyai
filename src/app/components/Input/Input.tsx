import { Box, TextField, TextFieldProps } from "@mui/material";
import React, { Component } from "react";
import Text from "../Text/Text";

type InputProps = {
  inputLabel?: any;
  error?: any;
  fullWidth?: boolean;
} & TextFieldProps;

const Input = (props: any) => {
  const { inputLabel = null, error = null, fullWidth = true, sx = {} } = props;

  return (
    <Box>
      {inputLabel && <Text>{inputLabel}</Text>}
      <TextField sx={sx} fullWidth={fullWidth} {...props} />
      {error && (
        <Text sx={{ color: "red", fontSize: 12, marginLeft: 1 }}>{error}</Text>
      )}
    </Box>
  );
};

export default Input;
