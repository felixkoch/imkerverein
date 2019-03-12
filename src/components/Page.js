import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import StaticImage from "./FixedImage";
import Logo from "./Logo";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../images/logo.png";
/*
sanity io
product hunt
google fonts
work sans
montserrat
farbig markieren
prefetch
scrollspy
cookie hinweis
*/

const Page = ({ children, data }) => (
  <div onScroll={() => console.log('scroll')} data-spy="scroll"  data-target="#navbar" style={{position: 'relative', height:200, overflowY:'scroll'}}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
        rel="stylesheet"
      />
    </Helmet>

    <nav className="navbar navbar-expand fixed-top mb-5 bg-white shadow-sm" id='navbar'>
      <a className="navbar-brand" href="#">
        <img src={logo} className="logo" />
      </a>

      <div className="collapse navbar-collapse fancylinks">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#neuigkeiten">
              Neuigkeiten
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#verein">
              Verein
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link Kontakt" href="#kontakt">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>

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
        dfasdfa ads fsad fadsf asdf sadf asdfdsf sadf asd f sdf a dsf sadf af
        dsfasdf asdf asdf
      </p>
    </div>

    <div className="container" id='verein'>
      <h2>Neuigkeiten</h2>
      <h3>Einladung zum Klönabend im Januar</h3>
      <p>
        dfasdfa ads fsad fadsf asdf sadf asdfdsf sadf asd f sdf a dsf sadf af
        dsfasdf asdf asdf
      </p>
    </div>

    <div className="container" id='kontakt'>
      <h2>Neuigkeiten</h2>
      <h3>Einladung zum Klönabend im Januar</h3>
      <p>
        dfasdfa ads fsad fadsf asdf sadf asdfdsf sadf asd f sdf a dsf sadf af
        dsfasdf asdf asdf
      </p>
    </div>

    <div className="footer pt-3 pb-3 fancylinks">
      <div className="container">
        <ul>
          <li>
            <a href="#">Datenschutz</a>
          </li>
          <li>
            <a href="#">Impressum</a>
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

export default Page;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      body {
        id
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
