import React, { Component } from 'react';

class Profile extends Component {
    componentWillReceiveProps(nextProps) {
        console.log("Props: componentWillReceiveProps chay: " + nextProps.name)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Props: shouldComponentUpdate chay")
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Props: componentWillUpdate chay")
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("Props: componentDidUpdate chay")
    }

    render() {
        console.log("Props: Render chay")
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Profile;