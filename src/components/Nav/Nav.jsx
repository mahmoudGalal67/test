import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Nav.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="section">
      <Navbar.Brand href="#home">
        <img
          src="home/logo.png"
          alt=""
          style={{ width: "50px", marginRight: "32px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#features" className="active">
            Home
          </Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
          <Nav.Link href="#pricing">Blogs</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>
        <Nav>
          <div className="search">
            <input type="text" placeholder="Search your product" />
            <img src="home/Icon.svg" alt="" style={{ width: "24px" }} />
          </div>
        </Nav>
        <Nav className="icons">
          <Nav.Link href="#deets">
            <img src="home/clarity_notification-outline-badged.svg" alt="" />
          </Nav.Link>
          <Nav.Link href="#deets">
            <img src="home/Vector (3).svg" alt="" />
          </Nav.Link>
          <Nav.Link href="#deets">
            <img src="home/Vector (4).svg" alt="" />
          </Nav.Link>
          <Nav.Link href="#deets">
            <img src="home/Group.svg" alt="" />
            <span style={{ marginLeft: "12px" }}> Hello, Log in</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
