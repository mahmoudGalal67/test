import Feature from "../Feature/Feature";
import "./Header.css";

function Header() {
  return (
    <main className="section">
      <div className="wrapper">
        <div className="left">
          <div className="info">
            <h3>Enjoy</h3>
            <h2>PRODUCT NAME</h2>
            <p className="desc">
              A wonderful and unique collection of home and office furniture
              pieces with distinct details and customized only for your
              aspirations and ideas
            </p>
            <div className="price">
              <span className="new-price">50,00 EGP</span>
              <span className="old-price">53,00 EGP</span>
            </div>
            <a href="" className="costum-link">
              ADD TO CART <img src="home/quill_arrow-upw.svg" alt="" />
            </a>
          </div>
          <div className="main-img">
            <img src="home/3815e2c06e353446f05259a947df2606.png" alt="" />
          </div>
        </div>
        <div className="right">
          <Feature className="float" title="New" />
          <h2>PRODUCT NAME</h2>
          <p>
            A wonderful and unique of home and office furniture with distinct
            details and{" "}
          </p>
          <Feature title="15% OFF" />
          <img src="home/8daf86214d094dbe3cf8ce76ed141c53.png" alt="" />
          <a href="" className="costum-link">
            ADD TO CART{" "}
            <img
              src="home/quill_arrow-up.svg"
              style={{ width: "24px" }}
              alt=""
            />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Header;
