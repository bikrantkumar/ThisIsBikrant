import React ,{Component} from 'react'
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="mt-0 ml-2 mr-2">
                        <Breadcrumb >
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                </div>
                <div>
                    <h1 className="headline" style={{color:"black"}}>Skills</h1>
                </div>
                <div className="row p-5">
                    <div className="column">
                        <div className="card">Web Development</div>
                    </div>
                    <div className="column">

                    </div>
                </div>
                <div className="row p-5">
                    <div className="column">
                        <div className="card">Ethereum Based Dapp Development</div>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="column">
                        <div className="card">Google Cloud based Applications</div>
                    </div>
                </div>
                <div className="row p-5">
                <div className="column">
                    <div className="card">Machine learning and Data Analytics </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Main;
//export default withRouter(connect(mapDispatchToProps,mapStateToProps)(Main));