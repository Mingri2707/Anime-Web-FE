import React, { useState, useRef, useEffect } from "react";

const AnimeVideo = ({ title }) => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const containerRef = useRef(null);
  const itemWidth = 250 + 20; // width + margin-right
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Lấy dữ liệu từ backend PHP
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

  // Tính số item hiển thị mỗi trang khi resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const count = Math.floor(containerWidth / itemWidth);
        setItemsPerPage(count || 1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Chuyển slide tiếp
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= videos.length - itemsPerPage + 1 ? 0 : prev + 1
    );
  };

  // Chuyển slide lùi
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? videos.length - itemsPerPage : prev - 1
    );
  };

  // Khi click ảnh, set video id để hiện video nhúng
  const handleClick = (videoId) => {
    setActiveVideoId(videoId);
  };

  return (
    <div className="text-white text-3xl mt-10 px-10">
      <div className="mb-6">{title}</div>

      <div className="relative">
        <div className="overflow-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => handleClick(video.video_url)} // video_url là videoId youtube
                className="w-[250px] h-[170px] mr-5 shrink-0 cursor-pointer relative overflow-hidden rounded"
              >
                <img
                  src={video.image_url} // Đường dẫn hình theo backend bạn
                  alt={video.title}
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-sm p-2 truncate">
                  {video.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nút chuyển slide trái */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 text-white text-xl px-3 py-2 bg-transparent hover:bg-black/70 transition z-10"
        >
          &#10094;
        </button>

        {/* Nút chuyển slide phải */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 text-white text-xl px-3 py-2 bg-transparent hover:bg-black/70 transition z-10"
        >
          &#10095;
        </button>
      </div>

      {/* Video nhúng YouTube hiện khi click */}
      {activeVideoId && (
        <div className="mt-10 flex justify-center">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${activeVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default AnimeVideo;
