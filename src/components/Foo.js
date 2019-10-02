import React, { Component } from 'react';
import {connect} from 'react-redux'
class Foo extends Component {
    
    compareTwoString (str1, str2) {
        if (str1.length != str2.length) {
            return str1.length > str2.length
        } else {
            return str1 > str2
        }
    }
    render() {
        console.log('redux: ', this.props.contribute)
        return (
            <div>
                {this.props.contribute}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        contribute: state.contribute
    }
}
// export default Foo;
export default connect(mapStateToProps)(Foo)