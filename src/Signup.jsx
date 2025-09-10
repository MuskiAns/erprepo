import InputField from "./components/InputField";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-screen">
      <div className="login-container">
        <h2 className="form-title">Sign Up</h2>
        <form className="login-form">
          <InputField type="text" placeholder="Full Name" />
          <InputField type="email" placeholder="Email address" />
          <InputField type="password" placeholder="Password" />
          <InputField type="password" placeholder="Confirm Password" />
          <button type="submit" className="login-button">Sign Up</button>
        </form>
        <p className="signup-prompt">
          Already have an account? <Link to="/" className="signup-link">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;