import React ,{Component} from 'react'
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
class Main extends Component{
    render(){
        return(
            <div className="body">
                <div className="body-1">
                        <Breadcrumb >
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                </div>
                <div className="body-2">
                    <h1>Skillset</h1>
                </div>
                <div className="body-3">
                    <div className="row">
                            <div className="card"> Web Development  
                                <ul>
                                    <li className="card-2"></li> 
                                    <li className="card-3"></li>
                                </ul>
                                <div className="rating">
                                    <span class="fa fa-star fa-lg checked"></span>
                                    <span class="fa fa-star fa-lg  checked"></span>
                                    <span class="fa fa-star fa-lg  checked"></span>
                                    <span class="fa fa-star fa-lg  checked"></span>
                                    <span class="fa fa-star fa-lg  checked"></span>
                                </div>
                            </div>
                            <div className="card">Ethereum Based Dapp Development
                                <ul>
                                    <li className="card-2"></li> 
                                    <li className="card-3"></li>
                                </ul>
                                <div className="rating">
                                    <span class="fa fa-star fa-lg checked"></span>
                                    <span class="fa fa-star fa-lg  checked"></span>
                                    <span class="fa fa-star fa-lg  checked"></span>
                                    <span class="fa fa-star fa-lg  checked"></span>
                                    <span class="fa fa-star fa-lg"></span>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="card">Data Analytics
                            <ul>
                                <li className="card-2"></li>
                                <li className="card-3"></li>
                            </ul>
                            <div className="rating">
                                    <span class="fa fa-star fa-lg checked"></span>
                                    <span class="fa fa-star fa-lg  checked"></span>
                                    <span class="fa fa-star fa-lg  checked"></span>
                                    <span class="fa fa-star fa-lg  checked"></span>
                                    <span class="fa fa-star fa-lg  "></span>
                            </div>
                        </div>               
                        <div className="card">Machine learning
                            <ul>
                                <li className="card-2"></li>
                                <li className="card-3"></li>
                            </ul>
                            <div className="rating">
                                        <span class="fa fa-star fa-lg checked"></span>
                                        <span class="fa fa-star fa-lg  checked"></span>
                                        <span class="fa fa-star fa-lg  checked"></span>
                                        <span class="fa fa-star fa-lg  checked"></span>
                                        <span class="fa fa-star fa-lg  "></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;

//export default withRouter(connect(mapDispatchToProps,mapStateToProps)(Main));