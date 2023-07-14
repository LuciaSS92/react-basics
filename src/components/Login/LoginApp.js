import Login from "./Login";

const isLoggedIn = false;
const currentTime = new Date().getHours();

function LoginApp() {
  return (
    <>
      <div className="formBody">
        <div className="formContainer">
          {isLoggedIn ? <h1>Hello </h1> : <Login />}
        </div>
        <div className="formContainer">
          {currentTime > 12 && <h1>Why are you still working?</h1>}
        </div>
      </div>
    </>
  );
}

export default LoginApp;