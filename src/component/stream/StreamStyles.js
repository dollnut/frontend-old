const StreamStyles = theme => ({
  root: { marginTop: theme.spacing(6), background: theme.palette.primary.main },
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
    flexDirection: 'column',
    height: '100%',
    minHeight: 500
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
    height: '100%'
  },
  chatTextField: {
    // background: theme.palette.secondary.main,
    // color: theme.palette.secondary.contrastText,
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(1),
    padding: theme.spacing(2, 1, 3),
    fontSize: '0.875rem'
  },
  'chatTextField::selection': {
    color: theme.palette.secondary.contrastText
  },
  nanoSlider: {
    background: `${theme.palette.primary.light} !important`
  }
});
export default StreamStyles;
