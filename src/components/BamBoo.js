import React, { Component } from 'react';

class BamBoo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChange: true,
            status: 1
        }
    }
    componentWillMount() {
        this.setState({
            status: this.state.status+1
        });
    }
    componentDidMount() {
        this.setState({
            status: this.state.status+1
        });
    }
    changeState() {
        this.setState({
            isChange: !this.state.isChange,
            status: this.state.status+1
        });
        this.setState({
            name: 'noname'
        });
    }
    shouldComponentUpdate() {
        return true;
    }
    async UNSAFE_componentWillReceiveProps(nextProps) {
    }
    render() {
        return (
            <div>
                <button onClick={this.changeState.bind(this)} className='btn btn-primary'>Change</button>
            </div>
        );
    }
}

export default BamBoo;