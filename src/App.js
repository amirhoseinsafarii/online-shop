import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Component } from "react";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Route } from "react-router-dom";
import shopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
    //   this.setState({ currentUser: user });

    //   console.log(user);

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={shopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </div>
    );
  }
}

export default App;
