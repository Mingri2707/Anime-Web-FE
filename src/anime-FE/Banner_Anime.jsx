import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import TabsSection from "./TabsSection";

const Banner_anime = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost/anime-BE/get_videos.php");
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu:", error);
      }
    };
    fetchData();
  }, []);

  const video = videos.find((v) => v.id === id) || videos[id - 1];
  if (!video) return <p className="text-white">Đang tải...</p>;

  // Xử lý hiển thị iframe nhúng
  const renderVideo = () => {
    if (video.source === "youtube") {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${video.video_url}?rel=0&modestbranding=1&showinfo=0&controls=1`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      );
    }

    if (video.source === "bilibili") {
      return (
        <iframe
          src={`https://www.bilibili.tv/en/video/${video.video_url}`}
          title={video.title}
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      );
    }

    return <p className="text-white">Không hỗ trợ loại video này</p>;
  };

  return (
    <div className="w-full h-full flex justify-center items-start p-[80px] bg-gray-900">
      <div className="w-[1400px] min-h-[1000px] bg-gray-700 rounded shadow-lg px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-white font-semibold flex space-x-1 items-center mb-6">
          <Link to="/" className="hover:text-black">
            Trang chủ
          </Link>
          <span>/</span>
          <Link to="/anime-bo" className="hover:text-black">
            Anime bộ
          </Link>
          <span>/</span>
          <span className="text-white">{video.title}</span>
        </nav>

        {/* Tiêu đề */}
        <h1 className="text-xl font-bold mt-6 text-white">{video.title}</h1>

        {/* Nội dung chính */}
        <div className="flex space-x-6 mt-6 items-stretch">
          {/* Bên trái */}
          <div className="relative rounded shadow-lg overflow-hidden w-[70%]">
            <div
              style={{ position: "relative", width: "100%", height: "500px" }}
            >
              {renderVideo()}
            </div>

            {/* Tabs */}
            <div className="mt-4">
              <TabsSection />
            </div>
          </div>

          {/* Bên phải */}
          <div className="flex flex-col w-[30%]">
            <div className="bg-white h-[100px] rounded shadow-lg text-black px-4 py-2 mb-4">
              Gacha chơi
            </div>
            <div className="bg-black h-[250px] rounded shadow-lg text-white px-4 py-2 mb-4">
              Gacha chơi
            </div>
            <div className="bg-red-600 h-[750px] rounded shadow-lg text-white px-4 py-2">
              Gacha chơi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner_anime;
