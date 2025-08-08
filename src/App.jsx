import "./output.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./anime-FE/Banner";
import Header from "./anime-FE/Header";
import AnimeVideo from "./anime-FE/AnimeVideo";
import Banner_anime from "./anime-FE/Banner_Anime"; // <-- thêm import trang mới

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Trang chủ */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <AnimeVideo title={"Đề Xuất"} />
              <AnimeVideo title={"Mới Nhất"} />
            </>
          }
        />

        {/* Trang chi tiết video */}
        <Route path="/banner-anime/:id" element={<Banner_anime />} />
      </Routes>
    </>
  );
}

export default App;
