import { red, purple, blue, indigo, grey } from '@material-ui/core/colors';

export const socialLinks = [
  {
    cssName: 'fas fa-home',
    title: 'DollNut',
    color: blue[600],
    divider: true,
    hideOnNav: true,
    internalLink: '/'
  },
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
    color: grey[900],
    hideOnNav: true,
    internalLink: '/login'
  }
];
