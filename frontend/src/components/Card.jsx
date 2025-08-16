import { useNavigate } from "react-router-dom";

function Card({ blog }) {
  const { title } = blog;
  const navigate = useNavigate();
  const viewDetailedBlog = async () => {
    navigate(`/blog/${blog._id}`);
  };

  return (
    <div className=" border rounded-sm relative " onClick={viewDetailedBlog}>
      <img src="thumbnail.jpg" />
      <h1 className="font-bold text-white w-full capitalize text-center backdrop-blur-sm absolute bottom-0">
        {title}
      </h1>
    </div>
  );
}

export default Card;
