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
          <h3 style={{ marginBottom: "10px" }}>Apache.pdf</h3>
          <iframe
            src="/Apache.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="Apache PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("Apache.pdf")}
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
          <h3 style={{ margin: "20px 0 10px" }}>NFS.pdf</h3>
          <iframe
            src="/NFS.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="NFS PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("NFS.pdf")}
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
          <h3 style={{ margin: "20px 0 10px" }}>DHCP.pdf</h3>
          <iframe
            src="/DHCP.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="DHCP PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("DHCP.pdf")}
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
          <h3 style={{ margin: "20px 0 10px" }}>DNS.pdf</h3>
          <iframe
            src="/DNS.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="DNS PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("DNS.pdf")}
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
          <h3 style={{ margin: "20px 0 10px" }}>Samba.pdf</h3>
          <iframe
            src="/Samba.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="Samba PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("Samba.pdf")}
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
          <h3 style={{ margin: "20px 0 10px" }}>Linux_attachment.pdf</h3>
          <iframe
            src="/Linux_attachment.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="Linux_attachment PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("Linux_attachment.pdf")}
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
          <h3 style={{ margin: "20px 0 10px" }}>Manual.pdf</h3>
          <iframe
            src="/Manual.pdf"
            width="100%"
            height="400px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="Manual PDF"
          ></iframe>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => copyPDFLink("Manual.pdf")}
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
