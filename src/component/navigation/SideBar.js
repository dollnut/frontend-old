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
import { socialLinks } from '../../data';
import { Link } from 'react-router-dom';
const SideBar = ({ open, handleClose }) => {
  const [openLists, setOpenLists] = React.useState({ Social: true });
  const [sidebarNavKeys, setSidebarNavKeys] = React.useState(socialLinks);
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
          {sidebarNavKeys.map(
            ({ cssName, title, divider, color, internalLink }) => (
              <>
                <ListItem
                  button
                  className={classes.nested}
                  component={internalLink ? Link : 'li'}
                  to={internalLink}
                  onClick={handleClose}
                >
                  <ListItemIcon>
                    <i className={`${cssName} fa-2x`} style={{ color }} />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
                {divider && <Divider />}
              </>
            )
          )}
        </List>
      </div>
    </Drawer>
  );
};

export default SideBar;

const useStyles = makeStyles(theme => ({
  nested: { paddingLeft: theme.spacing(8) }
}));
