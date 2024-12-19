import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// 引入全局布局和页面
import Layout from "./Layout";
import Home from "./pages/Home";
import Who from "./pages/Who"
import Archive from "./pages/Archive";
import Anonymous from "./pages/Anonymous";
import Mine from "./pages/Mine";

function App() {
  return (
    <Router>
      {/* 定义路由结构 */}
      <Routes>
        {/* 应用全局布局 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* 默认首页 */}
        </Route>
        <Route path="/who" element={<Layout />}>
          <Route index element={<Who />} />
        </Route>
        <Route path="/archive" element={<Layout />}>
          <Route index element={<Archive />} />
        </Route>
        <Route path="/anonymous" element={<Layout />}>
          <Route index element={<Anonymous />} />
        </Route>
        <Route path="/mine" element={<Layout />}>
          <Route index element={<Mine />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;