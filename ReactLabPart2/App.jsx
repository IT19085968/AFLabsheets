import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import PostsHolder from './components/PostsHolder';
import UserContext from "./components/UserContext";

// const posts = [
//     {
//         id: 1,
//         name: 'React',
//         description: 'Best UI library'
//     }, {
//         id: 2,
//         name: 'Node',
//         description: 'Server side JS'
//     }
//     ]

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:null
        };
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                user:{
                    name:'admin'
                }
            });
        },5000);
    }

//switch component let u introduce multiple routes
    render() {
        return <Router>
            <Switch>
                <Route path="/posts">
                    <UserContext.Provider value={this.state.user}>
                        <PostsHolder/>
                    </UserContext.Provider>

                </Route>
                <Redirect to='/posts'/>
            </Switch>
        </Router>
    }
}