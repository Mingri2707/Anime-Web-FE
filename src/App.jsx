import Banner from "./anime-FE/Banner";
import Header from "./anime-FE/Header";
import AnimeVideo from "./anime-FE/AnimeVideo";
import "./output.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <AnimeVideo title={"Đề Xuất"} />
      <AnimeVideo title={"Mới Nhất"} />
    </div>
  );
}

export default App;
