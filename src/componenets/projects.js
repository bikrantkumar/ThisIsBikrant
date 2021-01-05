import React, {Component} from 'react'
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

class Projects extends Component{
    render(){
        return(
            <React.Fragment>
            <Breadcrumb >
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Projects</BreadcrumbItem>
            </Breadcrumb> 
            <div className="project">      
                <div className="project-1">
                    <div className="title"><h1> Shooting Game </h1></div>
                    <div className="about">
                    A mini-project game in which you have to shoot the goblin in order to win. for  
                    which it uses pygame and python deployed using trinklet.io. 
                    </div>
                    <div className="deployment">
                        <div><b>GitHub Repository Link</b><br/>  <a href="https://github.com/bikrantkumar/Game">
                            https://github.com/bikrantkumar/Game</a></div>
                        <div><b>Deployed Website Link</b><br/>  <a href="https://trinket.io/pygame/2fd2b9cc1d">
                        https://trinket.io/pygame/2fd2b9cc1d</a></div>
                    </div>                                
                </div>
                <div className="project-1">
                    <h1 className="title"> IPL Match Rating using NLP </h1>
                    <div className="about">
                    The Project gives every match in IPL 2020 and rates the match on basis of the match summanry 
                    from cricbuzz the database is collected from the cricbuzz API followed by cleaning and transforming
                    the data then send to NLP model which rates the data on bases of NLTK corpus. For the front-end
                    used the streamlit python library deploying on AWS
                    </div>
                    <div className="deployment">
                        <div><b>GitHub Repository Link</b><br/>  <a href="https://github.com/bikrantkumar/Project-3">
                        https://github.com/bikrantkumar/Project-3</a></div>
                        <div><b>Deployed Website Link</b><br/>   Coming soon ......</div>
                    </div>                                
                </div>
                <div className="project-1">
                    <h1 className="title"> Safehive </h1>
                    <div className="about">
                    The project focuses on the concept of renting computational power which can be used for mining
                    cryptocurrencies in a secure, legal, and trustable manner. As with the growth of computer hardware
                    technology, high computational power is getting more and more accessible to the masses who are unable
                    to utilize and unveil it’s true potential <br/>
                    <b>You need to have a monero account and metamask wallet with ropsten ether before proceeding</b> 
                          </div>
                    <div className="deployment">
                        <div><b>GitHub Repository Link</b><br/> <a href="https://github.com/bikrantkumar/launch">
                        https://github.com/bikrantkumar/launch</a></div>
                        <div><b>Deployed Website Link</b><br/>  <a href="https://bikrantkumar.github.io/launch/#/home">
                        https://bikrantkumar.github.io/launch/#/home</a> </div>
                    </div>                                
                </div>
            </div>
            
            </React.Fragment>
        )
    }
}
export default Projects