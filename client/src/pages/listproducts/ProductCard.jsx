function ProductCard({ image, category, title, price }) {
  return (
    <div className="bg-white border border-gray-300 rounded-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover" />

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
