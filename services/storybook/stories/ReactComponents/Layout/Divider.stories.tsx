import React from "react";
import "@fastcampus/react-components-layout/styles.css";
import { Box, Divider as _Divider } from "@fastcampus/react-components-layout";
import { classes, vars } from "@fastcampus/themes";

export default {
  title: "ReactComponents/Layout/Divider",
  component: _Divider,
  decorators: [
    (Story) => (
      <Box padding={3} style={{ width: "300px", height: "300px" }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
  tags: ["autodocs"],
};

export const Divider = {
  args: {
    orientation: "horizontal",
    color: "gray",
    size: 1,
    variant: "solid",
  },
};
