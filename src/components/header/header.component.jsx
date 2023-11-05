import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../asseets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
// import "./header.styles.scss";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropdown from "../cart-drop-down/cart-drop-down.component";
const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
    // <div className="header">
    //   <Link className="logo-container" to="/">
    //     <Logo className="logo" />
    //   </Link>
    //   <div className="options">
    //     <Link className="option" to="/shop">
    //       SHOP
    //     </Link>
    //     <Link className="option" to="/shop">
    //       CONTACT
    //     </Link>

    //     {currentUser ? (
    //       <div className="option" onClick={() => auth.signOut()}>
    //         SIGN OUT
    //       </div>
    //     ) : (
    //       <Link className="option" to="/signin">
    //         SIGN IN
    //       </Link>
    //     )}
    //     <CartIcon />
    //   </div>
    //   {hidden ? null : <CartDropdown />}
    // </div>
  );
};

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
