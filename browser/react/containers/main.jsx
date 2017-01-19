import React from 'react';
import { Link } from 'react-router';
import Sidebar from '../containers/sidebar-container.js';
import axios from 'axios';

let name;

class Main extends React.Component {

  constructor(props){
    super(props)
  }


  render(){
    return (
      <div id="page-content-wrapper">
        <Sidebar />
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-12">
                    <h1>Welcome to Teach</h1>
                    {
                      this.props.children && React.cloneElement(this.props.children, this.props)
                    }
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Main;
