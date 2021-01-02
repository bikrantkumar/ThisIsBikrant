import React, {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            isopen:false
        }
    }
    render(){
        return(
            <div>Header Goes Here</div>
        );
    }
}
export default Header
