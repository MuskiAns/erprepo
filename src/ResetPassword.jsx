import React, { useState } from "react";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="auth-screen">
      <div className="login-container" style={{ width: 350 }}>
        <h2 className="form-title">Reset Password</h2>
        <div style={{ marginBottom: "10px" }}>
          <input
            type={isPasswordShown ? "text" : "password"}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="input-field"
            style={{ height: 48, marginBottom: 10 }}
          />
          <input
            type={isPasswordShown ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field"
            style={{ height: 48 }}
          />
        </div>

        <button className="login-button" style={{ height: 48 }}>
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;