import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  ListSubheader,
  Icon,
  Divider
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';
import { loadCSS } from 'fg-loadcss';
import { red, blue, purple, indigo, grey } from '@material-ui/core/colors';

const sidebarObject = [
  {
    cssName: 'fab fa-youtube',
    title: 'YouTube',
    color: red[600]
  },
  {
    cssName: 'fab fa-twitch',
    title: 'Twitch',
    color: purple[600]
  },
  {
    cssName: 'fab fa-twitter',
    title: 'Twitter',
    color: blue[300]
  },
  {
    cssName: 'fab fa-discord',
    title: 'Discord',
    color: indigo[300]
  },
  {
    cssName: 'fab fa-instagram ',
    title: 'Instagram',
    color: purple[400],
    divider: true
  },
  {
    cssName: 'fas fa-user-circle',
    title: 'Login',
    color: grey[900]
  }
];

const SideBar = ({ open, handleClose }) => {
  const [openLists, setOpenLists] = React.useState({ Social: true });
  const [sidebarNavKeys, setSidebarNavKeys] = React.useState(sidebarObject);
  const classes = useStyles();
  const toggleListCollapse = name => {
    setOpenLists({ ...openLists, [name]: !openLists[name] });
  };
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );
  }, []);

  return (
    <Drawer open={open} onClose={handleClose} PaperProps>
      <div style={{ width: 250 }}>
        <List
          component='nav'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              DollNut
            </ListSubheader>
          }
        >
          {sidebarNavKeys.map(({ cssName, title, divider, color }) => (
            <>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <i className={`${cssName} fa-2x`} style={{ color }} />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
              {divider && <Divider />}
            </>
          ))}
          {/* {Object.keys(sidebarNavKeys).map(key => {
            return (
              <>
                <ListItem button onClick={() => toggleListCollapse(key)}>
                  <ListItemIcon>
                    <i className={sidebarNavKeys[key][0].cssName } />
                  </ListItemIcon>
                  <ListItemText primary={key} />
                  {openLists[key] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openLists[key]} unmountOnExit timeout='auto'>
                  <List component='div' disablePadding>
                    {sidebarNavKeys[key].map(({ cssName, title }) => (
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <i className={cssName} />
                        </ListItemIcon>
                        <ListItemText primary={title} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            );
          })} */}
        </List>
      </div>
    </Drawer>
  );
};

export default SideBar;

const useStyles = makeStyles(theme => ({
  nested: { paddingLeft: theme.spacing(8) }
}));
