import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

import { layoutContext } from "../../App";
import LyricJSON from "../../utils/lyrics/labu.json";
import ScrollDown from "../../assets/images/scroll-down.gif";

const Content = () => {
  const { modeColor } = useContext(layoutContext);
  const navigate = useNavigate();
  const listRef = useRef(null);
  const [scrollToLast, setScrollToLast] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  const scrollHandler = () => {
    const list = listRef.current;
    if (list) {
      const { scrollTop, clientHeight } = list;
      const lastLi = list.querySelector("ul li:last-child");
      if (lastLi) {
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
        if (scrollTop + clientHeight >= lastLiOffset) {
          setScrollToLast(true);
        } else {
          setScrollToLast(false);
        }
      }
    }
  };

  const goToLyricHandler = (songno, lyric) => {
    navigate(`/laa/${songno}`, { state: { id: songno, lyric } });
  };

  return (
    <>
      <div
        className={`${
          modeColor ? "component-color" : "component-night"
        } d-flex align-items-center justify-content-center overflow-hidden w-100 vh-100`}
      >
        <div className="glass-wrapper d-flex flex-column px-4 pt-4 m-2 w-70 h-75">
          <input
            type="text"
            placeholder="Zong awl na..."
            className="search-input mb-2"
          />
          <div className="overflow-hidden">
            <ul
              ref={listRef}
              className="content-list"
              data-aos="fade-up"
              onScroll={scrollHandler}
            >
              {LyricJSON.map((item, index) => (
                <li
                  key={Date.now() + index}
                  className="list-item d-flex"
                  // data-aos="fade-up"
                  // data-aos-duration="400"
                  onClick={() => goToLyricHandler(item.songNo, item.lyric.zo)}
                >
                  <div className="widthCh8 me-2">{item.songNo}.</div>
                  <div className="text-nowrap">{item.title.zo}</div>
                </li>
              ))}
              {/* <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="600"
              >
                <div className="widthCh8 me-2">125.</div>
                <div className="text-nowrap">Country road, take me home</div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="800"
              >
                <div className="widthCh8 me-2">121.</div>
                <div className="text-nowrap">O for a thousand years</div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="1000"
              >
                <div className="widthCh8 me-2">333.</div>
                <div className="text-nowrap">
                  What a friend we have in Jesus
                </div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="1200"
              >
                <div className="widthCh8 me-2">18.</div>
                <div className="text-nowrap">
                  Tis so sweet, to love in Jesus
                </div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="1400"
              >
                <div className="widthCh8 me-2">334.</div>
                <div className="text-nowrap">This world is not my home</div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="1600"
              >
                <div className="widthCh8 me-2">125.</div>
                <div className="text-nowrap">Country road, take me home</div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="1800"
              >
                <div className="widthCh8 me-2">121.</div>
                <div className="text-nowrap">O for a thousand years</div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="2000"
              >
                <div className="widthCh8 me-2">333.</div>
                <div className="text-nowrap">
                  What a friend we have in Jesus
                </div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="2200"
              >
                <div className="widthCh8 me-2">18.</div>
                <div className="text-nowrap">
                  Tis so sweet, to love in Jesus
                </div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="2400"
              >
                <div className="widthCh8 me-2">18.</div>
                <div className="text-nowrap">
                  Tis so sweet, to love in Jesus
                </div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="2600"
              >
                <div className="widthCh8 me-2">334.</div>
                <div className="text-nowrap">This world is not my home</div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="2800"
              >
                <div className="widthCh8 me-2">125.</div>
                <div className="text-nowrap">Country road, take me home</div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="3000"
              >
                <div className="widthCh8 me-2">121.</div>
                <div className="text-nowrap">O for a thousand years</div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="3000"
              >
                <div className="widthCh8 me-2">333.</div>
                <div className="text-nowrap">
                  What a friend we have in Jesus
                </div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="3000"
              >
                <div className="widthCh8 me-2">18.</div>
                <div className="text-nowrap">
                  Tis so sweet, to love in Jesus
                </div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="3000"
              >
                <div className="widthCh8 me-2">18.</div>
                <div className="text-nowrap">
                  Tis so sweet, to love in Jesus
                </div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="3000"
              >
                <div className="widthCh8 me-2">18.</div>
                <div className="text-nowrap">
                  Tis so sweet, to love in Jesus
                </div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="3000"
              >
                <div className="widthCh8 me-2">334.</div>
                <div className="text-nowrap">This world is not my home</div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="3000"
              >
                <div className="widthCh8 me-2">125.</div>
                <div className="text-nowrap">Country road, take me home</div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="3000"
              >
                <div className="widthCh8 me-2">121.</div>
                <div className="text-nowrap">O for a thousand years</div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="3000"
              >
                <div className="widthCh8 me-2">333.</div>
                <div className="text-nowrap">
                  What a friend we have in Jesus
                </div>
              </li>
              <li
                className="list-item d-flex"
                // data-aos="fade-up"
                // data-aos-duration="3000"
              >
                <div className="widthCh8 me-2">18.</div>
                <div className="text-nowrap">
                  Tis so sweet, to love in Jesus
                </div>
              </li> */}
            </ul>
          </div>
          <div className="text-center">
            {scrollToLast ? (
              <img
                src={ScrollDown}
                alt="Scroll down"
                width="50"
                height="50"
                className="image-rotate"
              />
            ) : (
              <img src={ScrollDown} alt="Scroll down" width="50" height="50" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
