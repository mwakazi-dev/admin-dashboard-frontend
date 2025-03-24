import { FC } from "react";
import { ConfigProvider, ThemeConfig } from "antd";

import defaultTheme from "../lib/defaultTheme";

interface Props {
  children: React.ReactNode;
}
const ThemeProvider: FC<Props> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ConfigProvider theme={defaultTheme as ThemeConfig}>
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
