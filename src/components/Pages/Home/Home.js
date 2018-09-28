import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Navbar from './../../Navbar';
import CoolBtn from './CoolBtn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchBar from './../../SearchBar';
//import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  pBottom: {
    paddingBottom: '5rem'
  }
  
});

class Home extends React.Component {
  state = {
    viewport: { width: window.innerWidth, height: window.innerHeight},
    query: 'Location',
    data: {
      geoArray: [],
      idArray: [],
      content: {},
      lon: 35.2271,
      lat: -90.8431,
      radius: 1000,
      limit: 10
    }
  }

  componentWillMount() {
    this.setState({width: window.innerWidth + 'px', height: window.innerHeight + 'px'});
  }

  search = data => {
    console.log(data);
  }

  handleClick = () =>{
    this.search(this.state.data);
  }

  handleInputChange = event => {
    event.preventDefault;
    const { name, value } = event.target;

    this.setState({ query: value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navbar setId={this.props.setId} />
        <Grid container 
          direction="column" 
          justify="center" 
          alignItems="center" 
          alignContent="center"
          style={{height: this.state.viewport.height+'px'}}>
          <Grid item className={classes.pBottom}>
          <div onClick={this.props.setId}>
            <CoolBtn click={this.handleClick}/>
            </div>
          </Grid>
          <Grid item className={classes.pBottom}>
            <Typography variant="display1" align="center">
              Or <br /> Find cool things somewhere else
            </Typography>
          </Grid>
          <Grid item>
            <SearchBar value={this.state.query} onChange={this.handleInputChange}/>
            <p>{this.state.query}</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);