import { Icon } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#002366",
    },
    secondary: {
      main: "#E3E3E3",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#e3e3e3",
        },
      },
    },
  },
});

export default theme;
