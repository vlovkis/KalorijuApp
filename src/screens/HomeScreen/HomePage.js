import React from "react";
import {View, Text, useRoute} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Pedometer } from 'expo-sensors';
import Ionic from 'react-native-vector-icons/Ionicons';



export default class HomePage extends React.Component {
    

    state = {
      isPedometerAvailable: 'checking',
      pastStepCount: 0,
      currentStepCount: 0,
    };
  
    componentDidMount() {
      this._subscribe();
    }
  
    componentWillUnmount() {
      this._unsubscribe();
    }
  
    _subscribe = () => {
      this._subscription = Pedometer.watchStepCount(result => {
        this.setState({
          currentStepCount: result.steps,
        });
      });
  
      Pedometer.isAvailableAsync().then(
        result => {
          this.setState({
            isPedometerAvailable: String(result),
          });
        },
        error => {
          this.setState({
            isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
          });
        }
      );
  
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);
      Pedometer.getStepCountAsync(start, end).then(
        result => {
          this.setState({ pastStepCount: result.steps });
        },
        error => {
          this.setState({
            pastStepCount:'',
          });
        }
      );
    };
  
    _unsubscribe = () => {
      this._subscription && this._subscription.remove();
      this._subscription = null;
    };

    
    render() {
      const {route} = this.props;
        const calories = route.params?.kcals;
        

      return (
        <View style={{ alignSelf:'center', top:180}}>
          <Text style={{ alignSelf:'center', bottom:80, fontSize: 40, fontWeight:'bold'}}>HOME</Text>
          <Text style={{ alignSelf:'center', top:145, fontWeight:'bold' }}>Gained</Text>
          <Text style={{ alignSelf:'center', top:220, fontWeight:'bold' }}>kcal</Text>
          <Text style={{ alignSelf:'center', top:235, }}><Ionic name="walk"/>{this.state.pastStepCount} | <Ionic name="flame"/>kcal</Text>
          <CircularProgress
                value={calories} //CIA BUS IRASOMAS SUNAUDOTAS KALORIJU VALUE
                maxValue={2250} 
                radius={150}
                progressValueColor={'black'}
                activeStrokeColor={'#f39c12'}
                inActiveStrokeColor={'#818181'}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={20}
                activeStrokeWidth={40}
              />
              <Text style={{top: 130, fontWeight: 'bold'}}>Current Steps: {this.state.currentStepCount}</Text>
        </View>
      );
    }
  }