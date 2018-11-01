import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

export default class App2 extends React.Component {
  
	state={
		red: 0,
		green: 0,
		blue: 0,
	}
		
//	handleRed=(value)=>{
//		this.setState({
//			red: value
//		})
//	}
//	
//	handleGreen=(value)=>{
//		this.setState({
//			green: value
//		})
//	}
//	
//	handleBlue=(value)=>{
//		this.setState({
//			blue: value
//		})
//	}
	
	//One function to control 3 sliders
	handleColor=(r,g,b)=>{
		this.setState({
			red: r,
			green: g,
			blue: b
		})
	}
	
	render() {		
    return (
      <View style={styles.container, {backgroundColor: 'rgb('+this.state.red+','+this.state.green+','+this.state.blue+')'}}>
        <Slider 
					onValueChange={(value)=>{
						this.handleColor(value, this.state.green, this.state.blue)
					}}
					minimumValue={0}
					maximumValue={255}
					style={{width: 200, margin: 20}}
					/>
				<Slider 
					onValueChange={(value)=>{
						this.handleColor(this.state.red, value, this.state.blue)
					}}
					minimumValue={0}
					maximumValue={255}
					style={{width: 200, margin: 20}}
					/>
				<Slider 
					onValueChange={(value)=>{
						this.handleColor(this.state.red, this.state.green, value)
					}}
					minimumValue={0}
					maximumValue={255}
					style={{width: 200, margin: 20}}
					/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		alignItems: 'center',
    justifyContent: 'center',
  },
});
