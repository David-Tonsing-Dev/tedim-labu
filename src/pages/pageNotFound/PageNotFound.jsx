import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import { layoutContext } from "../../App";

const PageNotFound = () => {
  const { modeColor } = useContext(layoutContext);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`${
          modeColor ? "component-color" : "component-night"
        } d-flex flex-column align-items-center justify-content-center w-100 vh-100`}
      >
        <h1>!Ooops...</h1>
        <br />
        <h3 className="font-weight-bold">404 - PAGE NOT FOUND</h3>
        <p>
          The page you are looking for might have been removed <br />
          or had its name changed or is temporarily unavailable.
        </p>
        <br />
        <Button variant="primary" size="lg" onClick={() => navigate("/")}>
          Go to home page
        </Button>
      </div>
    </>
  );
};

export default PageNotFound;
