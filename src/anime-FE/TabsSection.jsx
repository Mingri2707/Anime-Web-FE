import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faUsers,
  faVideo,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const tabs = [
  { label: "Thông tin phim", icon: faFileAlt, key: "info" },
  { label: "Nhân vật", icon: faUsers, key: "characters" },
  { label: "Trailer", icon: faVideo, key: "trailer" },
  { label: "Hình ảnh", icon: faImage, key: "images" },
];

const TabsSection = () => {
  const { id } = useParams(); // lấy id từ URL
  const [activeTab, setActiveTab] = useState("info");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const res = await fetch("http://localhost/anime-BE/get_videos.php");
        const data = await res.json();
        const video = data.find((v) => String(v.id) === String(id));
        if (video) {
          setDescription(video.description || "Chưa có mô tả.");
        } else {
          setDescription("Không tìm thấy phim.");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setDescription("Lỗi khi tải dữ liệu.");
      }
    };

    fetchDescription();
  }, [id]);

  return (
    <div className="mt-8">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex flex-col items-center gap-1 font-semibold text-sm transition-all ${
              activeTab === tab.key
                ? "text-lime-400"
                : "text-black focus:text-lime-400"
            }`}
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={tab.icon} />
              <span>{tab.label}</span>
            </div>
            {activeTab === tab.key && (
              <div
                style={{
                  top: "10px",
                  position: "relative",
                  width: "100%",
                  height: "4px",
                  backgroundColor: "rgb(163 230 53)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "-6px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0",
                    height: "0",
                    borderLeft: "4px solid transparent",
                    borderRight: "4px solid transparent",
                    borderTop: "6px solid rgb(163 230 53)",
                  }}
                />
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="bg-[#1e1e1e] text-white p-4 rounded-b-md mt-2 min-h-[150px]">
        {activeTab === "info" && <div>{description}</div>}
        {activeTab === "characters" && <div>🧑‍🎤 Đây là danh sách nhân vật</div>}
        {activeTab === "trailer" && <div>📺 Đây là trailer</div>}
        {activeTab === "images" && <div>🖼️ Đây là hình ảnh</div>}
      </div>
    </div>
  );
};

export default TabsSection;
