import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="main-img">
        <img src="home/product/88efdcbdcb2af2ea2d80f7ac3a3e6527.png" alt="" />
      </div>
      <div className="title">Product Name</div>
      <div className="rating">
        <span>(332)</span>
        <img src="home/product/Group 27.svg" alt="" />
        <div className="rates">
          <img src="home/product/Vector.svg" alt="" />
          <img src="home/product/Vector.svg" alt="" />
          <img src="home/product/Vector.svg" alt="" />
          <img src="home/product/Vector.svg" alt="" />
        </div>
      </div>
      <div className="price">
        <span className="new-price">50,00 EGP</span>
        <span className="old-price">53,00 EGP</span>
      </div>
      <div className="links">
        <a href="#">
          <img src="home/product/fdsa.svg" alt="" />
        </a>
        <a href="#">
          <img src="home/Vector (3).svg" alt="" />
        </a>
        <a href="#">
          <img src="home/product/Component 8.svg" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Product;
