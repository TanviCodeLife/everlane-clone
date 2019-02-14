import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenDropdown from './MenDropdown';

const mensList = [
'New Arrivals',
'Denim',
'Sweaters',
'Sweatshirts',
'Outerwear',
'Tees',
'Shirts & Polos',
'Pants',
'Shorts',
'Underwear',
'Backpacks & Bags',
'Accessories & Gift Cards',
'Choose What You Pay'
];

class MenMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

      return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Men's
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >

        {mensList.map((item, key) =>
          <MenuItem onClick={this.handleClose} key={key}>
            <MenDropdown heading={item} key={key}/>
          </MenuItem>
        )}
        </Menu>
      </div>
    );
  }

}



export default MenMenu;
