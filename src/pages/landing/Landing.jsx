import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { layoutContext } from "../../App";

import "./landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const { modeColor, setModeColor } = useContext(layoutContext);

  return (
    <>
      <div
        className={`${
          modeColor ? "component-color" : "component-night"
        } d-flex flex-column align-items-center justify-content-center w-100 vh-100`}
      >
        <div class="checkbox-wrapper-5">
          <div class="check">
            <input
              checked={modeColor}
              id="check-5"
              type="checkbox"
              onClick={() => setModeColor(!modeColor)}
            />
            <label for="check-5"></label>
          </div>
        </div>
        <h1 className="font-weight-bold">TEDIM LABU</h1>
        <br />
        <button className="entry-btn" onClick={() => navigate("/content")}>
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <img
                src="https://violet-patient-silverfish-348.mypinata.cloud/ipfs/QmeDKTt5jddRbfrxnPtUpBGpbKzLVNyxmgceQvbrbPFjRY"
                alt="Guitar"
                width="35"
                height="35"
              />
            </div>
          </div>
          <span>Laa</span>
        </button>
      </div>
    </>
  );
};

export default Landing;
