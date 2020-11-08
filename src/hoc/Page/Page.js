import React, { Component } from 'react'
import Intro from '../../components/Intro/Intro'
import ReactJS from '../../components/ReactJS/ReactJS'
import NodeJS from '../../components/NodeJS/NodeJS'
import Javascript from '../../components/Javascript/Javascript'

class Page extends Component {

  displayPage = (no)=>{
    switch(no){
      case 0:
        return <Intro />;
      case 1:
        return <ReactJS />;
      case 2:
        return <NodeJS />;
      case 3:
        return <Javascript />;
    }
  };

  render() {
    return (
      <div>
        {this.displayPage(this.props.page)}
      </div>
    );
  }
}

export default Page;
