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
      <Navbar bg="white" expand="lg" fixed="top" collapseOnSelect={true} className="shadow-sm">
        <Navbar.Brand href="/"><img src={logo} className="logo" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          {sections.map(section => (
            <Nav.Link key={section[0]} href={"/#" + section[0]}  >{section[1]}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      {/*
      <nav
        className="navbar navbar-expand-sm fixed-top bg-white navbar-light shadow-sm"
        id="navbar"
      >
        <Link className="navbar-brand" to="/">
          <img src={logo} className="logo" alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse fancylinks"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {sections.map(section => (
              <li className="nav-item" key={section[0]} data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link to={"/#" + section[0]} className="nav-link" >
                  {section[1]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
            */}
      {props.children}
      {/*
      <div className="container mb-5">
        <div className="d-md-flex flex-row-reverse">
          <div className="text-center mb-5">
            <img src={logo} />
          </div>
          <div className="">
            <h1 className="hero">Freizeitimker Wümme-Region e.V.</h1>
          </div>
        </div>
      </div>
  
      <div className="container mb-4">
        <form className="form-inline">
          <div className="form-group mr-3 mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="E-Mail"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg mb-3">
            Zum Newsletter anmelden
          </button>
        </form>
      </div>
  
      <div className="container" id='neuigkeiten'>
        <h2>Neuigkeiten</h2>
        <h3>Einladung zum Klönabend im Januar</h3>
        <p>
        Lorem ipsum dolor amet slow-carb pitchfork scenester pug vegan offal, affogato small batch messenger bag plaid. Four dollar toast lyft farm-to-table pug gentrify jean shorts. Aesthetic tumblr banjo health goth sriracha trust fund swag hammock gluten-free photo booth. Bicycle rights affogato asymmetrical green juice, health goth whatever scenester schlitz cred. Pickled health goth kitsch, la croix synth DIY hoodie waistcoat.
  
  Salvia synth humblebrag, cardigan austin pitchfork before they sold out man braid locavore vinyl dreamcatcher gastropub kitsch try-hard. Single-origin coffee four loko YOLO before they sold out polaroid stumptown. Williamsburg tofu artisan intelligentsia XOXO tilde glossier narwhal VHS kombucha. VHS semiotics 90's pok pok pickled direct trade. Drinking vinegar green juice jean shorts aesthetic, tacos scenester selfies pinterest mumblecore. Cliche trust fund DIY biodiesel, pork belly meggings kale chips PBR&B aesthetic cloud bread tumblr letterpress fashion axe hammock.
  
  Deep v single-origin coffee +1 forage, put a bird on it whatever try-hard hammock XOXO. Pitchfork chicharrones raclette helvetica. Affogato fanny pack gochujang flexitarian, pinterest williamsburg mixtape offal banh mi direct trade. Put a bird on it readymade vinyl chartreuse tilde waistcoat PBR&B.
        </p>
      </div>
  
      <div className="container" id='verein'>
        <h2>Neuigkeiten</h2>
        <h3>Einladung zum Klönabend im Januar</h3>
        <p>
        Lorem ipsum dolor amet slow-carb pitchfork scenester pug vegan offal, affogato small batch messenger bag plaid. Four dollar toast lyft farm-to-table pug gentrify jean shorts. Aesthetic tumblr banjo health goth sriracha trust fund swag hammock gluten-free photo booth. Bicycle rights affogato asymmetrical green juice, health goth whatever scenester schlitz cred. Pickled health goth kitsch, la croix synth DIY hoodie waistcoat.
  
  Salvia synth humblebrag, cardigan austin pitchfork before they sold out man braid locavore vinyl dreamcatcher gastropub kitsch try-hard. Single-origin coffee four loko YOLO before they sold out polaroid stumptown. Williamsburg tofu artisan intelligentsia XOXO tilde glossier narwhal VHS kombucha. VHS semiotics 90's pok pok pickled direct trade. Drinking vinegar green juice jean shorts aesthetic, tacos scenester selfies pinterest mumblecore. Cliche trust fund DIY biodiesel, pork belly meggings kale chips PBR&B aesthetic cloud bread tumblr letterpress fashion axe hammock.
  
  Deep v single-origin coffee +1 forage, put a bird on it whatever try-hard hammock XOXO. Pitchfork chicharrones raclette helvetica. Affogato fanny pack gochujang flexitarian, pinterest williamsburg mixtape offal banh mi direct trade. Put a bird on it readymade vinyl chartreuse tilde waistcoat PBR&B.
        </p>
      </div>
  
      <div className="container" id='kontakt'>
        <h2>Neuigkeiten</h2>
        <h3>Einladung zum Klönabend im Januar</h3>
        <p>
        Lorem ipsum dolor amet slow-carb pitchfork scenester pug vegan offal, affogato small batch messenger bag plaid. Four dollar toast lyft farm-to-table pug gentrify jean shorts. Aesthetic tumblr banjo health goth sriracha trust fund swag hammock gluten-free photo booth. Bicycle rights affogato asymmetrical green juice, health goth whatever scenester schlitz cred. Pickled health goth kitsch, la croix synth DIY hoodie waistcoat.
  
  Salvia synth humblebrag, cardigan austin pitchfork before they sold out man braid locavore vinyl dreamcatcher gastropub kitsch try-hard. Single-origin coffee four loko YOLO before they sold out polaroid stumptown. Williamsburg tofu artisan intelligentsia XOXO tilde glossier narwhal VHS kombucha. VHS semiotics 90's pok pok pickled direct trade. Drinking vinegar green juice jean shorts aesthetic, tacos scenester selfies pinterest mumblecore. Cliche trust fund DIY biodiesel, pork belly meggings kale chips PBR&B aesthetic cloud bread tumblr letterpress fashion axe hammock.
  
  Deep v single-origin coffee +1 forage, put a bird on it whatever try-hard hammock XOXO. Pitchfork chicharrones raclette helvetica. Affogato fanny pack gochujang flexitarian, pinterest williamsburg mixtape offal banh mi direct trade. Put a bird on it readymade vinyl chartreuse tilde waistcoat PBR&B.
        </p>
              <p>
        Lorem ipsum dolor amet slow-carb pitchfork scenester pug vegan offal, affogato small batch messenger bag plaid. Four dollar toast lyft farm-to-table pug gentrify jean shorts. Aesthetic tumblr banjo health goth sriracha trust fund swag hammock gluten-free photo booth. Bicycle rights affogato asymmetrical green juice, health goth whatever scenester schlitz cred. Pickled health goth kitsch, la croix synth DIY hoodie waistcoat.
  
  Salvia synth humblebrag, cardigan austin pitchfork before they sold out man braid locavore vinyl dreamcatcher gastropub kitsch try-hard. Single-origin coffee four loko YOLO before they sold out polaroid stumptown. Williamsburg tofu artisan intelligentsia XOXO tilde glossier narwhal VHS kombucha. VHS semiotics 90's pok pok pickled direct trade. Drinking vinegar green juice jean shorts aesthetic, tacos scenester selfies pinterest mumblecore. Cliche trust fund DIY biodiesel, pork belly meggings kale chips PBR&B aesthetic cloud bread tumblr letterpress fashion axe hammock.
  
  Deep v single-origin coffee +1 forage, put a bird on it whatever try-hard hammock XOXO. Pitchfork chicharrones raclette helvetica. Affogato fanny pack gochujang flexitarian, pinterest williamsburg mixtape offal banh mi direct trade. Put a bird on it readymade vinyl chartreuse tilde waistcoat PBR&B.
        </p>
      </div>
   */}
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
