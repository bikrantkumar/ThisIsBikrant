import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import video from './5.mp4'
class Header extends Component{
    render(){
        return(
            <div id="header ">
                <nav className="header-1 navbar navbar-expand-md bg-dark navbar-dark ">
                    <Link to={'/home'} ><div className="link navbar-brand"> Bikrant Kumar </div></Link> 
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/home'} ><div className="links nav-link"> Home </div></Link> 
                            </li>
                            <li className="nav-item">
                                <Link to={'/aboutme'}><div className="links nav-link"> About me </div></Link> 
                            </li>
                            <li className="nav-item">
                                <Link to={'./resume'}><div className="links nav-link"> Resume </div></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'./projects'}><div className="links nav-link"> Projects  </div></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="header-2">
                    <div className="videos">
                    <video autoPlay loop muted width="100%">
                        <source src={video} type='video/mp4' />
                    </video>
                    </div>
                    <div className="content">
                        <h1 className="headline">All of our dreams <br></br>can come true</h1>
                        <Link to={'./contact'}><button className="btn links btn-primary m-5">Contact for 
                        Colabration</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;