import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton'

const Menu = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: 560px;
  background-color: #efefef;
  height: 120px;
  left: 50%;
  padding: 15px 30px;
  padding-bottom: 10px;
  transform: translateX(-50%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

class Menubar extends React.Component {

  menus = [
    {
      icon: 'user',
      color: 'black',
      text: 'Intro'
    }, {
      icon: 'react',
      color: '#5cd3f3',
      text: 'React'
    }, {
      icon: 'node',
      color: '#7cb701',
      text: 'NodeJS'
    }, {
      icon: 'node js',
      color: '#efd81d',
      text: 'Javascript'
    }
  ];

  renderMenus = (arr)=>{
    return arr.map((a, index)=>{
      return (
        <MenuButton 
          showPage={this.props.showPage}
          index={index}
          key={index} 
          color={a.color} 
          text={a.text} 
          icon={a.icon} 
        />
      );
    });
  }

  render() {
    return (
      <Menu>
        {this.renderMenus(this.menus)}
      </Menu>
    );
  }
}

export default Menubar;