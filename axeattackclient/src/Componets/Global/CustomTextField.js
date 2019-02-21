import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  customTextField: {
   
  },
  margin: {
    margin: theme.spacing.unit,
    background: 'white'
  },
  cssLabel: {
    "&$cssFocused": {
      color: purple[500]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: purple[500]
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: purple[500]
    }
  },
  notchedOutline: {},
  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green
  },
  typography: { useNextVariants: true }
});

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label= {props.labelName}
          id="mui-theme-provider-standard-input"
        />
      </MuiThemeProvider>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);
