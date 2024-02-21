import React from "react";

const Alert = ({ alert }) => {
  return (
    <div style={{ height: "50px" }}>
      {alert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{alert.type}</strong> {alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
