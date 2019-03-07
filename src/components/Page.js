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

    <nav class="navbar navbar-expand-lg  ">
      <a class="navbar-brand" href="#">
        Freizeitimker Wümme-Region e.V.
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
              KOntakt
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container">
      <div className="d-md-flex flex-row-reverse">
        <div className="p-4 text-center">
          <img src={logo} />
        </div>
        <div className="p-4">
          <h1 className="hero">Freizeitimker Wümme-Region e.V.</h1>
        </div>
      </div>
    </div>
    <div className="footer">
      <ul>
        <li>
          <a href="#">Datenschutz</a>
        </li>
        <li>
          <a href="#">Impressum</a>
        </li>
      </ul>
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
