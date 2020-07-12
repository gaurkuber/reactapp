import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box';
import Display from './display';

const getUrl = "http://localhost:9990/getDocs?search='sanjay'";

class searchAPI extends Component {
    constructor(){
        super()
        this.state = {
            myArr: []
        }
    }



  render() {
    return (
      <div>
          <ReactSearchBox
            placeholder="Enter search term"
            value="Enter search term1"
          />
        <Display userdata={this.state.myArr}></Display>
      </div>

    )
  }
}


export default searchAPI;