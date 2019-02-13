import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Whatshot from '@material-ui/icons/Whatshot';

import WomenMenu from './WomenMenu';
import MenMenu from './MenMenu';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Header() {
  return (
    <div style={styles.root}>
      <AppBar position="static" color="default">
        <Toolbar>
            <Whatshot />
          <WomenMenu/>
          <MenMenu/>
        </Toolbar>
      </AppBar>
    </div>
  );

}

export default Header;
