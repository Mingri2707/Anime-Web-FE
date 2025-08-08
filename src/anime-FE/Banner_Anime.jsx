import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TabsSection from "./TabsSection"; // Import tabs ở đây

const Banner_anime = () => {
  const { id } = useParams();

  return (
    <div className="w-screen h-full flex justify-center items-start p-10 bg-gray-900">
      <div className="w-[1400px] h-[3000px] bg-blue-500 rounded shadow-lg px-6 py-8">
        <nav className="text-sm text-black font-semibold flex space-x-1 items-center mb-6">
          <Link to="/" className="hover:text-black">
            Trang chủ
          </Link>
          <span>/</span>
          <Link to="/anime-bo" className="hover:text-black">
            Anime bộ
          </Link>
          <span>/</span>
          <span className="text-black">Thông tin</span>
        </nav>
        <h1 className="text-xl font-bold mt-6">ID video: {id}</h1>
        {/* bên trái */}
        <div className="flex space-x-6 mt-6 items-stretch">
          <div className="relative rounded shadow-lg overflow-hidden w-[70%]">
            <img
              src="/Mavuika.png"
              alt="Mavuika"
              className="w-full object-cover opacity-70"
              style={{ height: "500px" }}
            />
            <div className="absolute top-6 left-4 bg-opacity-30 text-white">
              <h1 className="text-4xl font-bold mb-4">Tiêu đề Anime</h1>
              <p className="text-lg">Mô tả ngắn gọn nội dung hoặc thông tin</p>
            </div>
            <div>
              <TabsSection />
            </div>
          </div>
          {/* bên phải */}
          <div className="flex flex-col w-[30%]">
            <div className="bg-white h-[100px] rounded shadow-lg text-black px-4 py-2 mb-4">
              Gacha chơi
            </div>
            <div className="bg-black h-[250px] rounded shadow-lg text-white px-4 py-2">
              Gacha chơi
            </div>
            <div className="bg-red-600 h-[750px] rounded shadow-lg text-white px-4 py-2">
              Gacha chơi
            </div>
          </div>
        </div>
        {/* Gọi TabsSection nằm dưới ảnh */}
      </div>
    </div>
  );
};

export default Banner_anime;
