import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Content from "./pages/content/Content";
import Lyric from "./pages/lyric/Lyric";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

import "./app.css";

export const layoutContext = createContext();

const App = () => {
  const [modeColor, setModeColor] = useState(false);
  return (
    <layoutContext.Provider value={{ modeColor, setModeColor }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/content" element={<Content />} />
          <Route path="/laa/:id" element={<Lyric />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/not-found" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </layoutContext.Provider>
  );
};

export default App;
