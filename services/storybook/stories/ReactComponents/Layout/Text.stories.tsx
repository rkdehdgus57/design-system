import "@fastcampus/react-components-layout/styles.css";
import { Text as _Text } from "@fastcampus/react-components-layout";
import { classes, vars } from "@fastcampus/themes";

export default {
  title: "ReactComponents/Typography/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
  tags: ["autodocs"],
};

export const TextStory = {
  args: {
    as: "p",
    fontSize: "md",
    color: "gray",
    children: "Hello, World!",
  },
};
