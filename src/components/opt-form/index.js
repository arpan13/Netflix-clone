import React from "react";
import { Container, Input, Break, Button, Text } from "./styles/opt-form";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptForm({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptForm({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" srcset="" />
    </Button>
  );
};

OptForm.Text = function OptText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
