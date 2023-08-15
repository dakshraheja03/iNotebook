import React from "react";

function Alert(props) {
  return (
    <>
      <div style={{height : '50px'}}>
        {props.alert && <div className={`alert alert-${props.alertType}`} role="alert">
            {props.alertText}
        </div>}
        </div>
    </>
  );
}

export default Alert;
