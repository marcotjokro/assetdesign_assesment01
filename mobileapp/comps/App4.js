import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import GestureRecognizer, { swipeDirections } from 'react-native-swipe-container'

export default class App4 extends React.Component {
  
	state={
		images: [require('.././imgs/yes.jpg'), require('.././imgs/no.jpg'), require('.././imgs/maybe.jpg')],
		answers: ["Yes", "No", "Maybe"],
		index: 0
	}
	
	handleSwipe=()=>{
		var randNum = Math.round(Math.random()*2);
		this.setState({
			index: randNum
		})
	}
	
	render() {
		
		var answer = this.state.answers[this.state.index];
		var img = this.state.images[this.state.index];		
		
    return (
      <View style={styles.container}>
        <GestureRecognizer
					onSwipe={this.handleSwipe}
					velocityThreshold={0.3}
					distanceThreshold={40}
					angleThreshold={15}
					>
					<Image 
						style={{width: 200, height: 200}}
						source={img}
						/>	
					<Text>{answer}</Text>
				</GestureRecognizer>
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
