
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

class CreateCandidate extends Component {

  constructor (props){
    super (props)
  }


  state = {
    redirect: false
  }

  componentDidMount(){

  }

  render() {
    return (
      <Grid>

      <form>
        <label>
          Title:
          <input type="text" name="name" />
        </label>
        <label>
        body:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>  
      </Grid>
    )
  }
}

export default CreateCandidate;