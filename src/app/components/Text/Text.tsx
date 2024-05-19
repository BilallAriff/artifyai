"use client";
import { Typography } from "@mui/material";
import React from "react";

interface TextType {
  children?: any;
  color?: "primary" | "secondary" | "white" | "black";
  sx?: any;
  textType?:
    | "title"
    | "sub-title"
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "paragraph"
    | "sub-text";
  centerAlign?: boolean;
  bold?: boolean;
}

const Text = ({
  children,
  sx = {},
  textType = "paragraph",
  color = "primary",
  centerAlign = false,
  bold,
}: TextType) => {
  const returnTextType = () => {
    switch (textType) {
      case "title":
        return { fontSize: 46 };
      case "sub-text":
        return { fontSize: 13, color: "lightgray" };
      default:
        return {};
    }
  };

  const returnThemeColor = () => {
    switch (color) {
      case "primary":
        return { color: "#0e1c36" };
      case "secondary":
        return { color: "#f9fbf2" };
      default:
        return {};
    }
  };

  const returnFontSize = () => {
    switch (textType) {
      case "heading-1":
        return 18;
      case "heading-2":
        return 24;
      case "heading-3":
        return 26;
      case "heading-4":
        return 28;
      default:
        return 16;
    }
  };

  const fontSize = returnFontSize();

  return (
    <Typography
      fontSize={fontSize}
      sx={{
        textAlign: centerAlign ? "center" : "",
        fontWeight: bold ? 600 : "",
        ...returnTextType(),
        ...returnThemeColor(),
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default Text;
