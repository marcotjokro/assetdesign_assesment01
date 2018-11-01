import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import App1 from './comps/App1';
import App2 from './comps/App2';
import App3 from './comps/App3';
import App4 from './comps/App4';

export default class App extends React.Component {  
	
	state={
		page: 1
	}
	
	handlePage=(page)=>{
		this.setState({
			page: page
		})
	}
	
	render() {
		
		var comp = null;
		if(this.state.page === 1){
			comp = <App1 />
		}
		
		if(this.state.page === 2){
			comp = <App2 />
		}
		
		if(this.state.page === 3){
			comp = <App3 />
		}
		
		if(this.state.page === 4){
			comp = <App4 />
		}
		
    return (
      <View style={styles.container}>
        {comp}
				<View style={{flexDirection: "row"}}>
					<Button 
					title="App 1"
					onPress={this.handlePage.bind(this, 1)}
					/>
				<Button 
					title="App 2"
					onPress={this.handlePage.bind(this, 2)}
					/>
				<Button 
					title="App 3"
					onPress={this.handlePage.bind(this, 3)}
					/>
				<Button 
					title="App 4"
					onPress={this.handlePage.bind(this, 4)}
					/>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
