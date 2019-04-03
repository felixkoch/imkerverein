import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "cookieconsent/build/cookieconsent.min.css";

import logo from "../images/logo.png";
import "./layout.scss";

import sections from "./sections";
import SEO from "./seo";

if (typeof window !== `undefined`) {
  //import "cookieconsent";
  //import "./consent";

  require("cookieconsent");
  require("./consent");
}

const Layout = props => {
  console.log(props);
  //const isHomepage = location.pathname === withPrefix("/");
  //              {/*<Nav.Link key={section[0]} href={"/#" + section[0]} data-toggle="collapse" data-target=".navbar-collapse.show" >{section[1]}</Nav.Link>*/}

  return (
    <div>
      <SEO title={props.title} />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
          rel="stylesheet"
        />
      </Helmet>
      {props.banner && (
        <div id="banner" dangerouslySetInnerHTML={{
          __html: props.banner
        }}>
        </div>
      )}
      <Navbar
        bg="white"
        expand="sm"
        sticky="top"
        collapseOnSelect={true}
        className="shadow-sm"
      >
        <Navbar.Brand href="/">
          <img src={logo} className="logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {sections.map(section => (
              <Nav.Link key={section[0]} href={"/#" + section[0]}>
                {section[1]}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="mt-5">{props.children}</div>

      <div className="footer pt-3 pb-3 fancylinks">
        <div className="container">
          <ul>
            <li>
              <Link to="/datenschutz">Datenschutz</Link>
            </li>
            <li>
              <Link to="/impressum">Impressum</Link>
            </li>
          </ul>
        </div>
      </div>
      {/*}
      <div>
        {data.contentfulPage.title}
        <br />
        <div
          dangerouslySetInnerHTML={{
            __html: data.contentfulPage.body.childContentfulRichText.html
          }}
        />
        ;
      </div>
        */}
    </div>
  );
};

export default Layout;
