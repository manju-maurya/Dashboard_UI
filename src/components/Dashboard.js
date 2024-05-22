// src/components/Dashboard.js
import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Chart />
          </Paper>
        </Grid>
        {/* Add more components here */}
      </Grid>
    </Container>
  );
};

export default Dashboard;

