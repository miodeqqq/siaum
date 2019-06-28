import React from 'react';
import RotateModel from '../components/RotateModel';

export default class DemonScreen extends React.Component {
    static navigationOptions = {
      title: 'Demon',
    };
    
    render() {
        return (
            <RotateModel name="demon" extension=".model" angleX={this.props.angleX} angleY={this.props.angleY} scale={0.006}/>
        );
    }
}