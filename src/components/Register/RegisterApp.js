import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function RegisterApp() {
  return (
    <>
      <div className="formBody">
        <div className="formContainer">
          <Form isRegistered={userIsRegistered} />
        </div>
      </div>
    </>
  );
}

export default RegisterApp;
