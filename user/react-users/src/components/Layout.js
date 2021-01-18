import React, { Component } from 'react';
export class Layout extends Component {
    static displayName = Layout.name;

    render () {
        return (
            <div>
                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}