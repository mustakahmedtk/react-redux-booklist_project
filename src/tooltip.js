import React, { Component } from 'react';


class Tooltip extends Component{
    customTitle =()=>{
        return "Hi"
    }
    render(){
        return(
            <div title={this.customTitle()}>duo</div>
        )
    }
}

export default Tooltip;