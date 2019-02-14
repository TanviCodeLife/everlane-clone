import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Whatshot from '@material-ui/icons/Whatshot';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



import WomenMenu from './WomenMenu';
import MenMenu from './MenMenu';

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: '1em'
  },
  icon: {
    'color': '#0c0c0c',
    'backgroundColor': 'unset',
    'marginRight': '2em'
  },

  circle: {
    width: 'unset',
    height: 'unset',
    minWidth: '0',
    minHeight: 'unset',
    boxShadow: 'unset',
    gridColumn: '12 / span 1',
    justifySelf: 'end',
    backgroundColor: 'unset'
  }
};

function Header() {
  return (
    <div >
      <AppBar position="static" color="default">
        <Toolbar style={styles.root}>
          <Button component={Link} to='/' >
            <Whatshot style={{ gridColumn: ' 1 / span 1' }}/>

          </Button>
          <WomenMenu style={{ gridColumn: ' 2 / span 1' }}/>
          <MenMenu style={{ gridColumn: ' 3 / span 1' }}/>
          <Fab color="primary" aria-label="Add" style={ styles.circle } >
            <AccountCircle style={styles.icon}/>
            <ShoppingBasket style={styles.icon}/>
          </Fab>
        </Toolbar>
      </AppBar>
    </div>
  );

}

export default Header;
