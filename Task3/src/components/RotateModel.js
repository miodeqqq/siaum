import React from 'react';

import { Animated, StyleSheet } from 'react-native';
import ModelView from 'react-native-gl-model-view';

import { accelerometer, setUpdateIntervalForType, SensorTypes } from "react-native-sensors";

setUpdateIntervalForType(SensorTypes.accelerometer, 10);

const AnimatedModelView = Animated.createAnimatedComponent(ModelView);

export default class RotateModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            angleX: 0,
            angleY: 0,
        
            acceleration: {
                x: 'unknown',
                y: 'unknown',
                z: 'unknown',
            },
        };
    }
    
    componentWillMount() {
        const subscription = accelerometer.subscribe(acceleration => {
            var angleX = this.state.angleX + acceleration.x / 4;
            var angleY = this.state.angleY + acceleration.y / 4;
        
            this.setState({
                acceleration, angleX, angleY, subscription
            })
        });
    }
    
    componentWillUnmount() {
        this.state.subscription.unsubscribe();
    }
    
    render() {
        return (
            <AnimatedModelView
                model={this.props.name + this.props.extension}
                texture={this.props.name + ".png"}

                onStartShouldSetResponder={() => true}

                animate={true}

                scale={this.props.scale}
                translateZ={-2}

                rotateX={new Animated.Value(this.state.angleY)}
                rotateZ={new Animated.Value(this.state.angleX)}

                style={styles.view}
            />
        );
    }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#4286f4'
  }
});