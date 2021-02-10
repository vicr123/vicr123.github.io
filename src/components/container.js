import React from 'react';

class Container extends React.Component {
    render() {
        return <div className={this.props.className} style={this.props.style}>
            <div className="container">
                {this.props.children}
            </div>
        </div>
    }
}

export default Container;