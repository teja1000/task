
const ProductCard = ({ product }) => {
  return (
    <div className="product-card-container">
      <div className="product-card">
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-rating">Rating: {product.rating}</p>
          <p className="product-stock">Stock: {product.stock}</p>
          <p className="product-brand">Brand: {product.brand}</p>
          <p className="product-category">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
