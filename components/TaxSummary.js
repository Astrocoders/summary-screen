import React from 'react'
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const ContainerTaxView = styled.View`
  background-color: #284356;
  height: 140px;
  margin-left: 7px;
  margin-right: 7px;
  margin-top: 15px;
  border-radius:3;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 3;
  shadow-offset: 0px 0px;
  elevation: 1;
`;

const TaxSummaryView = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #284356;
  width: 100%;
  border-radius:3;
`;

const NumberText = styled.Text`
  color: #fff;
  font-size: 20;
`;

const DescText = styled.Text`
  color: #496175;
  font-size: 9;
`;

const BackText = styled.Text`
  color: #fff;
  position: absolute; 
  left:10; 
  top:15;
`;

const FrontText = styled.Text`
  color: #fff;
  font-size: 9;
`;

const FrontView = styled.View`
  background-color: #90CBD9;
  position: absolute;
  right:10; 
  top:16;
  padding: 3px;
  padding-left: 7px;
  padding-right: 7px;
  border-radius: 10;
`;

const DataView = styled.View`
  flex:1;
  margin-bottom: 20px;
  margin-left: 7%;
`;

class TaxSummary extends React.Component {
  render() {
    return (
      <ContainerTaxView>
	
	  <TaxSummaryView>

	    <BackText>Tax Summary</BackText>

	    <DataView>
              <NumberText>183</NumberText>
              <DescText>Threshold</DescText>
	      <DescText>Days</DescText>	      
	    </DataView>
	    <DataView>
              <NumberText>120</NumberText>
              <DescText>Tax</DescText>
	      <DescText>Days</DescText>	      
	    </DataView>
	    <DataView>
              <NumberText>63</NumberText>
              <DescText>Days</DescText>
	      <DescText>Remaining</DescText>	      
	    </DataView>
	    <DataView>
              <NumberText>28</NumberText>
              <DescText>Non-tax</DescText>
	      <DescText>Days</DescText>		      
	    </DataView>

	    <FrontView>
	      <FrontText>NON-RESIDENT</FrontText>
	    </FrontView>
	    
	  </TaxSummaryView>

      </ContainerTaxView>

    )
  }
}

export default TaxSummary;
