import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './App.css'
import './App.css';
import React ,{ Component } from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import Main from './componenets/home'
import About from './componenets/aboutme'
import Footer from './componenets/footer'
import Header from './componenets/header'
import Resume from './componenets/resume'
import Projects from './componenets/projects';
import Contact from './componenets/contactus'
class App extends Component{
  render(){
    return(
      <React.Fragment>
      
      <HashRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Main}>
            <Redirect to={'/home'}/>
          </Route>
          <Route path={'/home'} component={Main}/>
          <Route exact path="/aboutme" component={About}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </HashRouter>
      
      </React.Fragment>
    );
  }
}
export default App;
