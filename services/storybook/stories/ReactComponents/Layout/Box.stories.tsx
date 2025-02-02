import "@fastcampus/react-components-layout/styles.css";
import { Box as _Box } from "@fastcampus/react-components-layout";

export default {
  title: "ReactComponents/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: "button",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
  },
};
