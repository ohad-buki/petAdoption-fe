import React from "react";

export default function SwitchBtn({ setSignUpState, signUpState }) {
  return (
    <div>
      {signUpState ? "Already have an account?" : "Don't have an account yet?"}
      <a
        onClick={() => {
          setSignUpState(!signUpState);
        }}
        style={{
          color: "#3F88C5",
          cursor: "pointer",
        }}
      >
        {signUpState ? "Sign up" : "Login"}
      </a>{" "}
    </div>
  );
}
