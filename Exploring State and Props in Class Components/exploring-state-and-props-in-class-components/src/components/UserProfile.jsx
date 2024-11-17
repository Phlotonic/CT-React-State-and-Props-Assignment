// Task 1: Code Correction

import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        // Initializing state with a default name
        this.state = { name: 'Alex' };
        // Binding the changeName method to the component
        this.changeName = this.changeName.bind(this);
    }

    // Corrected function to update the state
    changeName() {
        // Using setState to update the name in the state
        this.setState({ name: 'Charlie' });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                {/* Displaying the current name from the state */}
                <p>Name: {this.state.name}</p>
                {/* Button to trigger the changeName method */}
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile;
