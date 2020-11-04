import React, {Component} from 'react'
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

class Projects extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="container">
                    <div className="mt-0 ml-2 mr-2">
                        <Breadcrumb >
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Projects</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
            </div>
            <div>
            <h1>Projects</h1>
            </div>
            </React.Fragment>
        )
    }
}
export default Projects