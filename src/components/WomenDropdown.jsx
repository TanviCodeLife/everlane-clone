import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// const styles = theme => ({
//   root: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2,
//   },
// });

const listStyling = {
  boxShadow: 'unset',
  backgroundColor: 'unset'
};



function WomenDropdown(props) {
  return (
    <Paper style={listStyling} elevation={1}>
      <Typography  variant="h6" >
        {props.heading}
      </Typography>
    </Paper>

  );
}

export default WomenDropdown;
