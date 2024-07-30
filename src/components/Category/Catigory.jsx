import Feature from "../Feature/Feature";

import "./Category.css";

function Catigory() {
  return (
    <div className="category section">
      <div className="wrapper">
        <div className="item">
          <img src="home/cat 1.png" alt="" />
          <div className="info">
            <p>
              A wonderful and <br /> of home and office
            </p>
            <Feature title="15% OFF" />
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
        <div className="item">
          <img src="home/cat 2.png" alt="" />
          <div className="info">
            <p>
              A wonderful and <br /> of home and office
            </p>
            <Feature title="15% OFF" />
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
        <div className="item">
          <img src="home/cat 2.png" alt="" />
          <div className="info">
            <p>
              A wonderful and <br /> of home and office
            </p>
            <Feature title="15% OFF" />
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
        <div className="item">
          <img src="home/cat 1.png" alt="" />
          <div className="info">
            <p>
              A wonderful and <br /> of home and office
            </p>
            <Feature title="15% OFF" />
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
      </div>
    </div>
  );
}

export default Catigory;
