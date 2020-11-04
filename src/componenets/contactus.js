import React,{ Component } from 'react'
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'


class Contact extends Component{

    render(){
        return(
                <div className="container">
                    <div className="mt-0">
                    <Breadcrumb >
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row row-content ">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                            <address>
                                #1496 DMW  <br />
                                Railway Colony , patiala<br />
                                            India <br />
                                <i className="fa fa-phone fa-lg"></i>: +91 8847491426 <br />
                                <i className="fa fa-fax fa-lg"></i>: +0175 23709175 <br />
                                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:bikrant2000kumar@gmail.com"  >
                                    bikrant2000kumar@gmail.com</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+918847491426"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="/"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:bikrant2000kumar@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
            </div>
        );
}
}
export default Contact