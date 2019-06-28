import React from 'react';
import RotateModel from '../components/RotateModel';

export default class HamburgerScreen extends React.Component {
    static navigationOptions = {
      title: 'Hamburger',
    };
    
    render() {
        return (
            <RotateModel name="Hamburger" extension=".obj" angleX={this.props.angleX} angleY={this.props.angleY} scale={0.3}/>
        );
    }
}