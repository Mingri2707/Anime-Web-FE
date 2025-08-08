import { useParams } from "react-router-dom";

const Banner_anime = () => {
  const { id } = useParams();

  return (
    <div className="text-white p-10">
      <h1 className="text-3xl mb-4">Trang Banner Anime</h1>
      <p>ID video nhận được: {id}</p>
      {/* Bạn có thể fetch dữ liệu chi tiết video ở đây */}
    </div>
  );
};

export default Banner_anime;
