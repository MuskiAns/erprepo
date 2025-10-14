import InputField from "./components/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login("token123");
    navigate("/dashboard", { replace: true });
  };

  // 📌 Copy PDF link function
  const copyPDFLink = (fileName) => {
    navigator.clipboard.writeText(window.location.origin + "/" + fileName);
    alert(`✅ ${fileName} link copied!`);
  };

  return (
    <div className="auth-screen">
      <div className="login-container">
        <h2 className="form-title">Admin Login</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <InputField type="email" placeholder="Email address" />
          <InputField type="password" placeholder="Password" />
          <Link
            to="/reset-password"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Forget Password?
          </Link>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        {/* 📌 PDF Embeds */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          {/* PDF 1 */}
          <h3 style={{ marginBottom: "10px" }}>Enterprise Java Lab Manual</h3>
          <iframe
            src="/EJ_Lab_Manual.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="EJ Lab Manual PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("EJ_Lab_Manual.pdf")}
              style={{
                padding: "8px 15px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Copy PDF Link
            </button>
          </div>

          {/* PDF 2 */}
          <h3 style={{ margin: "20px 0 10px" }}>ajt.pdf</h3>
          <iframe
            src="/ajt.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="ajt PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("ajt.pdf")}
              style={{
                padding: "8px 15px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Copy PDF Link
            </button>
          </div>

          {/* PDF 3 */}
          <h3 style={{ margin: "20px 0 10px" }}>EJManual.pdf</h3>
          <iframe
            src="/EJManual.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="EJManual PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("EJManual.pdf")}
              style={{
                padding: "8px 15px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Copy PDF Link
            </button>
          </div>
        </div>

        <p className="signup-prompt">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
