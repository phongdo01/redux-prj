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
        console.log('will mount')
        this.setState({
            status: this.state.status+1
        });
        console.log('liu tiu')
    }
    componentDidMount() {
        console.log('did mount')
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
        console.log('nextProps: ', nextProps)
        
        console.log('UNSAFE_componentWillReceiveProps')
    }
    render() {
        console.log('render')
        console.log('state: ', this.state.status)
        return (
            <div>
                <button onClick={this.changeState.bind(this)} className='btn btn-primary'>Change</button>
            </div>
        );
    }
}

export default BamBoo;