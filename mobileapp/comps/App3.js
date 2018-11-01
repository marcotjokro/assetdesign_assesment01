import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App3 extends React.Component {
  
	state={
		seconds: 0
	}
	
	handleStart=()=>{
		this.timer = setInterval(()=>{
			this.setState({
				seconds: this.state.seconds+0.01
			})
		}, 10)
	}
	
	handleStop=()=>{
		clearInterval(this.timer);
	}
	
	handleReset=()=>{
		this.setState({
			seconds: 0
		})
	}
	
	render() {		
    return (
      <View style={styles.container}>
        <Text>{this.state.seconds}</Text>
				<View style={{flexDirection: 'row', padding: 10}}>
					<Button
						title="Start"
						onPress={this.handleStart}
						/>
					<Button
						title="Stop"
						onPress={this.handleStop}
						/>
					<Button
						title="Reset"
						onPress={this.handleReset}
						/>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
    justifyContent: 'center',
  },
});
