import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../images/logo.png";
import "./layout.scss";

import sections from "./sections";

const Layout = props => {
  console.log(props);
  //const isHomepage = location.pathname === withPrefix("/");
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
          rel="stylesheet"
        />
        <body data-spy="scroll" data-target="#navbar" data-offset="200" />
      </Helmet>

      <nav
        className="navbar navbar-expand fixed-top  bg-white shadow-sm"
        id="navbar"
      >
        <a className="navbar-brand" href="#">
          <img src={logo} className="logo" />
        </a>

        <div className="collapse navbar-collapse fancylinks">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {sections.map(section => (
              <li className="nav-item" key={section[0]}>
                {props.index == true ? (
                  <a className="nav-link" href={"#"+section[0]}>
                    {section[1]}
                  </a>
                ) : (
                  <Link to={"/#"+section[0]} className="nav-link">
                    {section[1]}
                  </Link>
                )}
              </li>
            ))}

          </ul>
        </div>
      </nav>

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
