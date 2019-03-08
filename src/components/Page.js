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
*/

const Page = ({ children, data }) => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
        rel="stylesheet"
      />
    </Helmet>

    <nav class="navbar navbar-expand-lg  mb-5">
      <a class="navbar-brand" href="#">
        <img src={logo} className="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Neuigkeiten
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Verein
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link Kontakt" href="#">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container mb-5">
      <div className="d-md-flex flex-row-reverse">
        <div className="text-center">
          <img src={logo} />
        </div>
        <div className="">
          <h1 className="hero">Freizeitimker Wümme-Region e.V.</h1>
        </div>
      </div>
    </div>

    <div className="container mb-5">
      <form class="form-inline">
        <div class="form-group mr-3">
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="E-Mail"
          />
        </div>
        <button type="submit" class="btn btn-primary btn-lg">
          Zum Newsletter anmelden
        </button>
      </form>
    </div>

    <div className="container">
      <h2>Neuigkeiten</h2>
      <h3>Einladung zum Klönabend im Januar</h3>
      <p>
        dfasdfa ads fsad fadsf asdf sadf asdfdsf sadf asd f sdf a dsf sadf af
        dsfasdf asdf asdf
      </p>
    </div>

    <div className="footer pt-3 pb-3">
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
