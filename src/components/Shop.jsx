import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const boots = {
  men : [
    'https://images.unsplash.com/photo-1470207261933-4f02fa6ab2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1542838776-096d877b5aa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
    'https://images.unsplash.com/photo-1542834759-4db91f2574d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80',
    'https://images.unsplash.com/photo-1542838454-d4dce2a7cfde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80',
    'https://images.unsplash.com/photo-1520809382381-d95e6364bbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
    'https://images.unsplash.com/photo-1511283402428-355853756676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80'
  ],
  women : [
    'https://images.unsplash.com/photo-1512633611077-51bf3c872a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3152&q=80',
    'https://images.unsplash.com/photo-1511598800709-141ed22fcefc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
    'https://images.unsplash.com/photo-1520264285909-d78fcf7016fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
    'https://images.unsplash.com/photo-1469564104555-19d9cf02b407?ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
    'https://images.unsplash.com/photo-1479492591199-eb2492814e73?ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
    'https://images.unsplash.com/photo-1495772507711-3afc975ff36e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80'
  ]
}

const styles = {
  card: {
    minWidth: 400,
    justifySelf: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }
};

const gridStyle = {
  margin: '2em',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridRowGap: '2em'

}

function Shop(props) {
  console.log(props.match.params.category)

  return (
    <div style= {gridStyle} >

      {boots[props.match.params.category].map((boot, i) =>
          <Card style={styles.card} key={i}>
            <CardMedia
              style={styles.media}
              image={boot}
              title="boot"
              />
            <CardContent>
              <Typography component="p">
                Shop { props.match.params.category }
              </Typography>

            </CardContent>
            <CardActions disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
      )}

    </div>
  );
  }

Shop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Shop;
