import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <nav class="navbar navbar-light bg-dark">
                <h1 style={{color:"floralwhite"}}>Navigation</h1>
                <ul className="nav-link " style={{color:"floralwhite"}}>
                    <Link to={'/home'} ><li className="mr-5">Home</li></Link>
                    <Link to={'/aboutme'}><li className="mr-5">About me</li></Link>
                    <Link to={'./resume'}><li className="mr-5">Resume</li></Link>
                    
                </ul>
                 <a class="navbar-brand" href="#">
                </a>
            </nav>
        );
    }
}
export default Header;