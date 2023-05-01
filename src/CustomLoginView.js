import React from "react";
import {
  LoginContainer,
  LoginEmail,
  LoginPassword,
  LoginButton,
  GoogleLoginButton,
  FacebookLoginButton,
  Auth0LoginButton,
  Alert,
} from "@pelcro/react-pelcro-js";

export default function CustomLoginView(){
  return (
    <LoginContainer
      onSuccess={(userObject) => {
        console.log(userObject);
      }}
      onFailure={(err) => {
        console.error(err.message);
      }}
    >
      <Alert />

      <LoginEmail label="Email" />
      <LoginPassword label="Password" />
      <LoginButton />

      <GoogleLoginButton />
      <FacebookLoginButton />
      <Auth0LoginButton />
    </LoginContainer>
  );
};