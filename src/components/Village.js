import React, { Component } from 'react';
import BamBoo from './BamBoo';
import axios from 'axios'
class Village extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hight: 100
        }
    }
    changeState() {
        new Promise ((resolve, reject)=>{
            axios.post('http://vunb.herokuapp.com/api/demo').then(rs=>{
                resolve(rs.data)
            }).catch(err=>{
                reject(err)
            })
        }).then(rs=>console.log(rs)).catch(err=>console.log('err: ', err))
    }
    render() {
        return (
            <div>
                <BamBoo />
                <button onClick={this.changeState.bind(this)}>Click me</button>
            </div>
        );
    }
}

export default Village;