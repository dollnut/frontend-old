const StreamStyles = theme => ({
  root: { marginTop: theme.spacing(6) },
  chatNav: {
    background: theme.palette.secondary.dark
  },
  ['.BottomNavigationAction.selected']: {
    color: '#fff'
  },
  chatRoot: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  },
  chip: {
    marginRight: theme.spacing(1),
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  },
  chatIcon: {
    marginBottom: -8,
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.light
  }
});
export default StreamStyles;
