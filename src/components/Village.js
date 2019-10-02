import React, { Component } from 'react';
import BamBoo from './BamBoo';

class Village extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hight: 100
        }
    }
    async changeState() {
        await this.setState({
            hight: this.state.hight + 1
        });
    }
    render() {
        return (
            <div>
                <BamBoo hight={this.state.hight} />
                <button onClick={this.changeState.bind(this)}>Click me</button>
            </div>
        );
    }
}

export default Village;