import React from 'react'
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

const ContainerNavView = styled.View`
  background-color: red;
  height: 140px;
  width: 100%;
`;

const NavbarView = styled.View`
  flex: 1;
  background-color: #284356;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-offset: 0px 0px;
  elevation: 1;
`;

const NavbarLinksView = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #284356;
`;

const BarView = styled.View`
  background-color:white;
  height:5;
  width: 30%;
  margin-top: -5;
  align-self: flex-start;
`;

const LinkText = styled.Text`
  color: #496175;
  margin-bottom: 15;
`;

const BackText = styled.Text`
  color: #fff;
  position: absolute; 
  left:50; 
  top:40;
`;

class Navbar extends React.Component {
  render() {
    return (
      <ContainerNavView>
	
	<NavbarView>
	  
	  <NavbarLinksView>
	    <Entypo name="chevron-left" size={22} color="white" style={{position:'absolute', top:38, left:15}}/>
	    <BackText>New York</BackText>
            <LinkText style={{color: 'white'}}>SUMMARY</LinkText>
            <LinkText>TRAVEL RECORDS</LinkText>
            <LinkText>TAX RULES</LinkText>
	    <Entypo name="dots-three-vertical" size={22} color="white" style={{position:'absolute', top:38, left:'90%'}}/>	    
	  </NavbarLinksView>

	  <BarView>
	  </BarView>
	    
	</NavbarView>
	
      </ContainerNavView>

    )
  }
}

export default Navbar;
