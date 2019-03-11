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
  <div onScroll={() => console.log('scroll')}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet"></link>
    </Helmet>

    <nav class="navbar navbar-expand fixed-top mb-5 bg-white shadow-sm">
      <a class="navbar-brand" href="#">
        <img src={logo} className="logo" />
      </a>

      <div class="collapse navbar-collapse fancylinks">
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
        <div className="text-center mb-5">
          <img src={logo} />
        </div>
        <div className="">
          <h1 className="hero">Freizeitimker Wümme-Region e.V.</h1>
        </div>
      </div>
    </div>

    <div className="container mb-4">
      <form class="form-inline">
        <div class="form-group mr-3 mb-3">
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="E-Mail"
          />
        </div>
        <button type="submit" class="btn btn-primary btn-lg mb-3">
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
