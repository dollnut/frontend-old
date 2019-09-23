import React from 'react';
import { Grid } from '@material-ui/core';
import SocialCard from './SocialCard';

const SocialCardList = () => {
  return (
    <Grid container spacing={3} justify='space-between'>
      <Grid item xs={12} md={6}>
        <SocialCard website='Twitter' />
      </Grid>
      <Grid item xs={12} md={6}>
        <SocialCard website='News' />
      </Grid>
    </Grid>
  );
};

export default SocialCardList;
