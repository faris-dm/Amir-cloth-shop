import { useNavigate } from "react-router-dom";


function ProductCard({ id,image, category, title, price }) {
   const API_BASE_URL = "http://localhost:2300";
  const navigate = useNavigate(); 
  return (
    <div onClick={()=>navigate(`/products/${id}`)}
    
    className="bg-gray-300 border border-gray-300 rounded-md overflow-hidden">
      <img
        src={`${API_BASE_URL}${image}`}
        alt={title}
        className="w-full h-96 object-cover"
      />

      <div className="p-3">
        <p className="text-xs text-gray-500">{category}</p>

        <div className="flex items-center justify-between mt-1">
          <h3 className="text-sm font-medium text-black">{title}</h3>
          <span className="text-sm font-semibold text-black">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
