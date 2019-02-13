import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import WomenDropdown from './WomenDropdown';



const womensList = [
  'Women’s All',
  'New Arrivals',
  'Denim',
  'Sweaters',
  'Sweatshirts',
  'Outerwear',
  'Tees',
  'Tops',
  'Bottoms',
  'Dresses',
  'Underwear',
  'Boots',
  'Heels',
  'Flats',
  'Loafers & Oxfords',
  'Sandals',
  'Handbags',
  'Backpacks & Bags',
  'Accessories & Gift Cards',
  'Choose What You Pay'
];


class WomenMenu extends React.Component {
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
          Women's
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >

        {womensList.map((item, key) =>
          <MenuItem onClick={this.handleClose}><WomenDropdown heading={item} key={key}/></MenuItem>
        )}
        </Menu>
      </div>
    );
  }

}



export default WomenMenu;
