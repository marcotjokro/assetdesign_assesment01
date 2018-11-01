import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App1 extends React.Component {
  
	state={
		size: 100
	}
	
	handleSize=(num)=>{
		this.setState({
			size: this.state.size+num
		})
	}

	render() {		
    return (
      <View style={styles.container}>
        <Image
					source={require('.././imgs/mojave.jpg')}
					style={{width: this.state.size, height: this.state.size}}
					/>
				<View style={{flexDirection: "row", padding: 10}}>
					<Button
						title="+"
						onPress={this.handleSize.bind(this, +50)}
						/>
					<Button
						title="-"
						onPress={this.handleSize.bind(this, -50)}
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
