import { ThemeConfig } from "antd/es/config-provider/context";

const defaultTheme: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: "var(--primary)",
  },
  components: {
    Button: {
      colorPrimary: "var(--accent)",
      colorPrimaryHover: "var(--accent)",
    },
  },
};

export default defaultTheme;
