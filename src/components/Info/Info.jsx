import "./Info.css";

function Info() {
  return (
    <section className="section info">
      <div className="wrapper">
        <div className="left">
          <a href="">Contact Us</a>
          <a href="">
            <img src="home/Vector.svg" alt="" />
            contact@bellout.com
          </a>
          <a href="">
            <img src="home/Vector (1).svg" alt="" />+ 02 1300000000
          </a>
        </div>
        <div className="right">
          <a href="">
            <img src="home/material-symbols_language.svg" alt="" />
            English
          </a>
          <a href="" className="vendor">
            <img src="home/material-symbols_partner-exchange.svg" alt="" />
            BECOME A VENDOR
          </a>
        </div>
      </div>
    </section>
  );
}

export default Info;
