import React, { Component } from 'react'

export class UserOrderForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            quantity: 0
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.username.value, e.target.quantity.value);
        this.setState({
            username: e.target.username.value,
            quantity: e.target.quantity.value
        })
    
    }
    
    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    Name: <input name="username" type="text" />
                    Quantity: <input name="quantity" type="number" />
                    
                    <button>Send data!</button>
                    </form>
            </div>
        )
    }
}

export default UserOrderForm



