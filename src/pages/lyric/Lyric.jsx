import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import parse from "html-react-parser";
import AOS from "aos";

import { layoutContext } from "../../App";
import LyricJSON from "../../utils/lyrics/labu.json";

import "./lyric.css";

const Lyric = () => {
  const { modeColor } = useContext(layoutContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [lyric, setLyric] = useState(null);
  const [settingOpen, setSettingOpen] = useState("d-none");
  const [settingList, setSettingList] = useState("");
  const [settingToggle, setSettingToggle] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const existSong = LyricJSON.filter((item) => item.songNo === parseInt(id));
    if (existSong.length < 0 || parseInt(id) !== existSong[0]?.songNo) {
      navigate("/not-found");
    }

    setLyric(existSong[0]);
  }, [id, navigate, location]);

  const settingHandler = () => {
    setSettingOpen("");
    if (!settingToggle) {
      setSettingList("setting-open");
    } else {
      setSettingList("setting-close");
    }
    setSettingToggle(!settingToggle);
  };

  return (
    <div
      className={`${
        modeColor ? "component-color" : "component-night"
      } d-flex align-items-center justify-content-center w-100`}
    >
      <button class="setting-btn" onClick={settingHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          viewBox="0 0 20 20"
          height="30"
          fill="none"
          class="svg-icon"
        >
          <g stroke-width="1.5" stroke-linecap="round" stroke="#00bdc9">
            <circle r="2.5" cy="10" cx="10"></circle>
            <path
              fill-rule="evenodd"
              d="m8.39079 2.80235c.53842-1.51424 2.67991-1.51424 3.21831-.00001.3392.95358 1.4284 1.40477 2.3425.97027 1.4514-.68995 2.9657.82427 2.2758 2.27575-.4345.91407.0166 2.00334.9702 2.34248 1.5143.53842 1.5143 2.67996 0 3.21836-.9536.3391-1.4047 1.4284-.9702 2.3425.6899 1.4514-.8244 2.9656-2.2758 2.2757-.9141-.4345-2.0033.0167-2.3425.9703-.5384 1.5142-2.67989 1.5142-3.21831 0-.33914-.9536-1.4284-1.4048-2.34247-.9703-1.45148.6899-2.96571-.8243-2.27575-2.2757.43449-.9141-.01669-2.0034-.97028-2.3425-1.51422-.5384-1.51422-2.67994.00001-3.21836.95358-.33914 1.40476-1.42841.97027-2.34248-.68996-1.45148.82427-2.9657 2.27575-2.27575.91407.4345 2.00333-.01669 2.34247-.97026z"
              clip-rule="evenodd"
            ></path>
          </g>
        </svg>
      </button>
      <div
        className={`glass-wrapper setting-list ${settingList} ${settingOpen}`}
      >
        <ul>
          <li className="cursor-pointer">Font family</li>
          <li className="cursor-pointer">Language</li>
          <li className="cursor-pointer">Font size</li>
        </ul>
      </div>
      <div className="glass-wrapper d-flex flex-column px-4 py-4 m-2 w-70 h-80">
        {lyric && (
          <div
            className="d-flex flex-column align-items-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1 className="font-weight-700 text-center">
              {lyric.songNo}. {lyric.title.zo}
            </h1>
            <br />
            <div>
              {lyric.lyric.zo["1"] && (
                <div className="d-flex">
                  <span className="me-1">1.</span>
                  {parse(lyric.lyric.zo["1"])}
                </div>
              )}
              {lyric.lyric.zo.chorus && (
                <div>
                  <span className="me-1">Chorus:</span>
                  {parse(lyric.lyric.zo.chorus)}
                </div>
              )}
              {lyric.lyric.zo["2"] && (
                <div className="d-flex">
                  <span className="me-1">2.</span>
                  {parse(lyric.lyric.zo["2"])}
                </div>
              )}
              {lyric.lyric.zo["3"] && (
                <div className="d-flex">
                  <span className="me-1">3.</span>
                  {parse(lyric.lyric.zo["3"])}
                </div>
              )}
              {lyric.lyric.zo["4"] && (
                <div className="d-flex">
                  <span className="me-1">4.</span>
                  {parse(lyric.lyric.zo["4"])}
                </div>
              )}
              {lyric.lyric.zo["5"] && (
                <div className="d-flex">
                  <span className="me-1">5.</span>
                  {parse(lyric.lyric.zo["5"])}
                </div>
              )}
              {lyric.lyric.zo["6"] && (
                <div className="d-flex">
                  <span className="me-1">6.</span>
                  {parse(lyric.lyric.zo["6"])}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lyric;
