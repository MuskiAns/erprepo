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
          <h3 style={{ marginBottom: "10px" }}>1to3.pdf</h3>
          <iframe
            src="/1to3.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="1to3 PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("1to3.pdf")}
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
          <h3 style={{ margin: "20px 0 10px" }}>AWDPractical4.pdf</h3>
          <iframe
            src="/AWDPractical4.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="AWDPractical4 PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("AWDPractical4.pdf")}
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

          {/* PDF 4 */}
          <h3 style={{ margin: "20px 0 10px" }}>AWDPractical5a.pdf</h3>
          <iframe
            src="/AWDPractical5a.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="AWDPractical5a PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("AWDPractical5a.pdf")}
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

          {/* PDF 5 */}
          <h3 style={{ margin: "20px 0 10px" }}>AWDPractical6a.pdf</h3>
          <iframe
            src="/AWDPractical6a.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="AWDPractical6a PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("AWDPractical6a.pdf")}
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

          {/* PDF 6 */}
          <h3 style={{ margin: "20px 0 10px" }}>AWDPractical7.pdf</h3>
          <iframe
            src="/AWDPractical7.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="AWDPractical7 PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("AWDPractical7.pdf")}
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

          {/* PDF 5 */}
          <h3 style={{ margin: "20px 0 10px" }}>Practical4.pdf</h3>
          <iframe
            src="/Practical4.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="Practical4 PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("Practical4.pdf")}
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
          <h3 style={{ margin: "20px 0 10px" }}>FTP.pdf</h3>
          <iframe
            src="/FTP.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="FTP PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("FTP.pdf")}
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
