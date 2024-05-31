const ProductItem = ({ id, title, price, description, category, image }) => {
  return (
    <div className="Container" key={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>{category}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default ProductItem;
