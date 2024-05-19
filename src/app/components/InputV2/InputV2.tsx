import React from "react";
import Input from "../Input/Input";
import { Box, TextField, TextFieldProps } from "@mui/material";
import Text from "../Text/Text";

type InputProps = {
  inputLabel?: any;
  error?: any;
  fullWidth?: boolean;
} & TextFieldProps;

const InputV2 = (props: any) => {
  const {
    inputLabel = null,
    error = null,
    fullWidth = true,
    sx = {},
    placeholder = "",
  } = props;

  return (
    <Box>
      {inputLabel && (
        <Text sx={{ marginLeft: 1, marginBottom: 0.5, fontWeight: "bold" }}>
          {inputLabel}
        </Text>
      )}
      <input
        className="custom-input-v2"
        style={{
          width: "100%",
          height: "35px",
          borderRadius: "50px",
          border: "1px solid lightgray",
        }}
        placeholder={placeholder}
      />
      {error && (
        <Text sx={{ color: "red", fontSize: 12, marginLeft: 1 }}>{error}</Text>
      )}
    </Box>
  );
};

export default InputV2;
