import { Theme, createStyles } from "@material-ui/core";

export const styles = (theme: Theme) => createStyles({
  root: {},
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 'bolder'
  }
});