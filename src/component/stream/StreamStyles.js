const StreamStyles = theme => ({
  root: { marginTop: theme.spacing(6), overflow: 'hidden' },
  chatNav: {
    background: theme.palette.secondary.light
  },
  ['.BottomNavigationAction.selected']: {
    color: '#fff'
  },
  chatRoot: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column'
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
  },
  chatMessageList: {
    height: '100%',
    overflow: 'auto'
  },
  chatTextField: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    margin: 0,
    padding: theme.spacing(2, 3, 3),
    fontSize: '0.875rem'
  },
  nanoSlider: {
    background: `${theme.palette.primary.light} !important`
  }
});
export default StreamStyles;
