import React , {Component} from 'react';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

class About extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="mt-0 ml-2 mr-2">
                    <Breadcrumb >
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About me</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    <h1 className="mt-0 ml-2 mr-2">About me</h1>
                    <div className="about">
                        <div className="about-1">
                            <p>I am Bikrant Kumar a student of Thapar Institute Of Engineering and Technology currently in
                            my 8<sup>th</sup> Semester with current Cgpa of 8.09. Currently about to start an Internship with Oracle. Previously 
                            Done an internship in Inkpothub.Techincally i am a MEAN full Stack developer, use tensor
                            flow for my machine learning projects and Truffle framework for Ethereum based Dapp 
                            Development ( Decentralized applications ).Alongside this i also have a varying degree of
                            experience in frameworks and technologies like Flask,Django,pygame and tableau </p>
                        </div>
                        <div className="about-2"></div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}
export default About;