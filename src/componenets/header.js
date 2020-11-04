import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import video from './5.mp4'
class Header extends Component{
    render(){
        return(
            <React.Fragment>
            <div id="hero">
                 <video className="video" autoPlay loop muted width="100%">
                    <source src={video} type='video/mp4' />
                </video>
                <div className="content">
                    <nav class="navbar">
                         <ul className="nav-link " style={{color:"floralwhite"}}>
                         <a class="navbar-brand" href="#">
                            <li className="mr-5 nav-link">Bikrant Kumar</li>
                        </a>   
                        <Link to={'/home'} ><li className="mr-5 nav-link">Home</li></Link>
                        <Link to={'/aboutme'}><li className="mr-5 nav-link">About me</li></Link>
                        <Link to={'./resume'}><li className="mr-5 nav-link">Resume</li></Link>
                        <Link to={'./projects'}><li className="mr-5 nav-link">Projects</li></Link>
                        </ul>
                    </nav>
                    <div>
                    <h1 className="headline p-5 ">All our dreams <br></br>can come true</h1>
                    <div>
                        <Link to={'./contact'}><button className="btn btn-primary m-5">Contact for 
                        Colabration</button></Link>
                    </div>
                    </div>
                </div>
            </div>
            
            
            </React.Fragment>
            
        );
    }
}
export default Header;