import React from 'react'
import {Link} from 'react-router-dom'

function Footer(props){
        return (
        <div>
        <div className="footer">
            <div className="footer-1">
                <h5>Links</h5>
                    <Link to={'/home'}><div className="link">Home</div></Link>
                    <Link to={'/aboutme'}><div className="link"> About me </div></Link>
                    <Link to={'/resume'}><div className="link"> Resume </div></Link>
                    <Link to={'/home'}><div className="link">Contact Me</div></Link>
                    
            </div>            
            <div className="footer-2" >
                <h5 >Address</h5>
                <address>
                    #1496 DMW Patiala,<br />
                        Punjab<br />
                        India <br />
                    <i className="fa fa-phone fa-lg"></i>: +91 8847491426 <br />
                    <i className="fa fa-fax fa-lg"></i>: +0175 23709175 <br />
                    <i className="fa fa-envelope fa-sm"></i>: <a href="mailto:bikrant2000kumar@gmail.com" style={{fontSize: 12}} >
                        bikrant2000kumar@gmail.com</a>
                </address>
            </div>
            <div className="footer-3">
                <a className="btn btn-social-icon btn-google mr-1" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                <a className="btn btn-social-icon btn-facebook mr-1" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                <a className="btn btn-social-icon btn-linkedin mr-1 " href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                <a className="btn btn-social-icon btn-twitter mr-1 " href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                <a className="btn btn-social-icon btn-google mr-1 " href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                <a className="btn btn-social-icon mr-1" href="mailto:"><i className="fa fa-envelope-o"></i></a>
            </div>
        </div>
         <div className="footer col-auto justify-content-center">
         <p>© Copyright Bikrant</p>
        </div>
        </div>
        )
}
export default Footer;