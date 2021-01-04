import React, {Component} from 'react'
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import pdf from './1.pdf'
class Resume extends Component{
      render() {
        return (
          <React.Fragment>
             <div className="mt-0 ml-2 mr-2">
                <Breadcrumb  >
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Resume</BreadcrumbItem>
                </Breadcrumb>
              </div>
            <div className="resume">
              <object name ="Bikrant"className="resume" width="800" height="500" type="application/pdf" data={pdf}>
              <p>PDF is not supported .</p>
              </object>
            </div>
          </React.Fragment>
         
        );
      }
}
export default Resume;