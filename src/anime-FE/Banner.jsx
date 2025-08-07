import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const banners = [
  {
    image: "/public/Mavuika.png",
    title: "Mavuika",
    genres: ["Chính Trị", "Lịch Sử", "Triết Học"],
    description:
      "Cô hướng ánh mắt khích lệ tới từng chiến binh, từng chú Saurian. Cô kêu gọi từng ngọn lửa của Natlan, tập hợp lại thành ánh sáng xua tan bóng tối.",
  },
  {
    image: "/public/N&F.jpg",
    title: "Triết Học Mác - Lênin",
    genres: ["Triết Học", "Kinh Tế", "Chính Trị"],
    description: "Nền tảng lý luận của chủ nghĩa xã hội khoa học.",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[730px] overflow-hidden ">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Ảnh nền */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.image})` }}
          />
          {/* Gradient mờ dần ở đáy ảnh */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black via-black/50 to-transparent" />
          {/* Lớp phủ mờ */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Nội dung chữ */}
          <div className="relative z-10 flex flex-col justify-center h-full px-12 text-white max-w-[50%] space-y-5 mt-[50px]">
            {/* Title */}
            <h2 className="text-yellow-300 text-lg font-semibold">
              {banner.title}
            </h2>
            {/* Thể loại */}
            <div className="flex flex-wrap gap-2 text-sm opacity-80">
              {banner.genres.map((g, i) => (
                <a
                  href="#"
                  key={i}
                  className="bg-white/20 px-2 py-[2px] rounded hover:text-yellow-200 transition"
                >
                  {g}
                </a>
              ))}
            </div>

            {/* Mô tả */}
            <p className="text-lg opacity-80 leading-relaxed ">
              {banner.description}
            </p>

            {/* Nút */}
            <div className="flex items-center gap-4 mt-4">
              {/* Play */}
              <div className="group w-16 h-16 rounded-full bg-yellow-200 bg-gradient-to-tr from-black/50 via-black/10 to-transparent flex items-center justify-center hover:bg-red-700 duration-700 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[40px] h-[40px] text-black group-hover:text-white duration-700"
                  viewBox="0 0 16 16"
                >
                  {/* Nút play */}
                  <path d="M10.804 8.697L6.109 11.482c-.437.253-.984-.063-.984-.565V5.083c0-.502.547-.818.984-.565l4.695 2.785a.65.65 0 010 1.131z" />
                </svg>
              </div>

              {/* Like and detail */}
              <div className="flex overflow-hidden rounded-full border border-white/20 hover:border-white ml-4">
                <button className="w-20 h-12 flex items-center justify-center border-r border-white/20 hover:text-red-600 ">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="w-20 h-12 flex items-center justify-center border-r border-white/20 hover:text-blue-400">
                  <FontAwesomeIcon icon={faExclamationCircle} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Nút Previous */}
      <button
        className="absolute top-0 left-0 z-20 h-full w-10 flex items-center justify-center
          bg-transparent text-white hover:text-gray-300 transition-all duration-300 opacity-0"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Nút Next */}
      <button
        className="absolute top-0 right-0 z-20 h-full w-10 flex items-center justify-center
          bg-transparent text-white hover:text-gray-300 transition-all duration-300 opacity-0"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Banner;
