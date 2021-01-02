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
                    <div>
                        <div className="headline">Projects</div>
                        <div>
                            <div className="card">
                                Safehive                                
                            </div>
                        </div>
                    </div>
            </div>
            
            </React.Fragment>
        )
    }
}
export default Projects