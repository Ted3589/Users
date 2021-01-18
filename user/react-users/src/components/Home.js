import React, { Component } from 'react';
export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            roles: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/orders')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        orders: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render () {
        const {error, isLoaded, orders} = this.state;
        if (error) {
            return (
                <div className="col">
                    Error: {error.message}
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className="col">
                    Loading...
                </div>
            );
        } else {
            return (
                <div className="col">
                    {orders.map(order => <div>{order.user_id}</div>)}
                </div>
            );
        }
    }

}
export default Home;