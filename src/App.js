import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';
import { setCurrentUser } from './redux/user/user.actions';



/*
const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);
*/

class App extends React.Component {
  /*constructor()
  {
    super();
    this.state = {
      currentUser: null
    };
  }
  */

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
      //this.setState({currentUser: user});
//      createUserProfileDocument(user);
      //console.log(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot (snapShot => {
          //console.log(snapShot.data());});
          /*this.setState({
            currentUser: {
              id: snapShot.id, ...snapShot.data()
            }
          })*/
          setCurrentUser({
            id: snapShot.id, ...snapShot.data()
          });
          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <div>
        {/* hello world! */}
        {/* <HomePage /> */}
        {/* <Header currentUser = {this.state.currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/shop' component = {ShopPage} />
          <Route exact path = '/signin' render = {() => this.props.currentUser ? (<Redirect to = '/' />) : (<SignInAndSignUpPage />)} />

        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
