import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, HomeClick } from "./Menu";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const animeType = [
  { label: "TV/Series" },
  { label: "Movie/OVA" },
  { label: "HH Trung Quốc" },
  { label: "Anime Sắp Chiếu" },
  { label: "Anime Đang Chiếu" },
  { label: "Anime Trọn Bộ" },
];

const topAnime = [
  { label: "Theo Ngày" },
  { label: "Theo Tháng" },
  { label: "Theo Năm" },
  { label: "Theo Mùa" },
  { label: "Yêu Thích" },
];
const categoryAnime = [
  { label: "Action" },
  { label: "Adventure" },
  { label: "Cartoon" },
  { label: "Comedy" },
  { label: "Dementia" },
  { label: "Demons" },
  { label: "Drama" },
  { label: "Ecchi" },
  { label: "Fantasy" },
  { label: "Game" },
  { label: "Harem" },
  { label: "Historical" },
  { label: "Horror" },
  { label: "Josei" },
  { label: "Kids" },
  { label: "Live Action" },
  { label: "Magic" },
  { label: "Martial Arts" },
  { label: "Mecha" },
  { label: "Military" },
  { label: "Music" },
  { label: "Mystery" },
  { label: "Parody" },
  { label: "Police" },
  { label: "Psychological" },
  { label: "Romance" },
  { label: "Samurai" },
  { label: "School" },
  { label: "Sci-Fi" },
  { label: "Seinen" },
  { label: "Shoujo" },
  { label: "Shoujo Ai" },
  { label: "Shounen" },
  { label: "Shounen Ai" },
  { label: "Slice of Life" },
  { label: "Space" },
  { label: "Sports" },
  { label: "Super Power" },
  { label: "Supernatural" },
  { label: "Suspense" },
  { label: "Thriller" },
  { label: "Tokusatsu" },
  { label: "Vampire" },
  { label: "Yaoi" },
  { label: "Yuri" },
];
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Header
    <div
      className="p-4 flex items-center justify-center w-full h-[70px] fixed top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: isScrolled ? "rgb(0, 0, 0)" : "transparent",
      }}
    >
      <div className="flex items-center space-x-4 ">
        {/* logo */}
        <a
          href="#"
          className="py-[12px] text-[30px] uppercase font-bold text-red-700"
        >
          Anime
        </a>
        {/* Phần Search */}
        <div className="relative space-x-4">
          {/* Icon kính lúp */}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70"
          />

          <input
            type="text"
            className="w-[270px] h-[40px] pl-9 text-[13px] bg-transparent text-white 
                border rounded-lg placeholder:text-gray-300 
              focus:placeholder:text-white focus:outline-none"
            placeholder="Tìm: tên tiếng nhật, anh, việt"
          />
        </div>
        {/* Điều hướng */}
        <nav className="flex items-center space-x-4 font-alata">
          {/* Nút home */}
          <HomeClick title="Trang Chủ" />
          {/* Menu Hover */}
          <Menu title="Dạng Anime" items={animeType} />
          <Menu title="Top Anime" items={topAnime} />
          <Menu title="Thể loại" items={categoryAnime} />
          {/* Nút điều hướng tương tự home*/}
          <HomeClick title="Thư viện" />
          <HomeClick title="Lịch chiếu" />
          {/* Icon user */}

          <button className="flex items-center justify-center gap-2 p-2 bg-red-700 text-white w-[120px] rounded text-[13px] hover:bg-gray-600">
            <FontAwesomeIcon icon={faUser} className="text-white/90" />
            Thành Viên
          </button>
        </nav>
      </div>
    </div>
    // Banner
  );
}
export default Header;
