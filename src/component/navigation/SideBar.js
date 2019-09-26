import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { loadCSS } from 'fg-loadcss';
import { socialLinks } from '../../data';
import { Link } from 'react-router-dom';
const SideBar = ({ open, handleClose }) => {
  const [sidebarNavKeys, setSidebarNavKeys] = React.useState(socialLinks);
  const classes = useStyles();
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
