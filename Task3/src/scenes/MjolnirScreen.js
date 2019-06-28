import React from 'react';
import RotateModel from '../components/RotateModel';

export default class MjolnirScreen extends React.Component {
    static navigationOptions = {
      title: 'Mjolnir',
    };
    
    render() {
        return (
            <RotateModel name="mjolnir" extension=".obj" angleX={this.props.angleX} angleY={this.props.angleY} scale={0.2}/>
        );
    }
}