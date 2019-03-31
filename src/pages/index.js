import React from "react";

import Layout from "../components/Layout";
import logo from "../images/logo.png";
import { graphql } from "gatsby";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import sections from "../components/sections";



const IndexPage = ({ data, location }) => {
  console.log("DingDing");
  const node = data.allContentfulStartseite.edges[0].node;
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value) 
  }

  return (
    <Layout title="Startseite" >
      <div className="container mb-5">
        <div className="d-md-flex flex-row-reverse">
          <div className="text-center mb-5">
            <img src={logo} alt='Logo' />
          </div>
          <div className="">
            <h1 className="hero">Freizeitimker Wümme-Region e.V.</h1>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <form onSubmit={handleSubmit} className="d-md-flex align-items-start">
          <div className=" mr-3 mb-3">
            <div className="form-group">
            <input
              type="email"
              name='email'
              className="form-control form-control-lg is-valid"
              placeholder="E-Mail"
            />
            
            <div class="valid-feedback ">
              Vielen Dank für Ihre Anmeldung.
            </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg mb-3">
            Zum Newsletter anmelden
          </button>
        </form>
      </div>
      {sections.map(section => (
        <div id={section[0]} className="container mb-5 positionrelative fancylinks section">
          <h2>{section[1]}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: node[section[0]].childContentfulRichText.html
            }}
          />
        </div>
      ))}
    </Layout>
  );
};
export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    allContentfulStartseite(limit: 1) {
      edges {
        node {
          neuigkeiten {
            childContentfulRichText {
              html
            }
          }
          kontakt {
            childContentfulRichText {
              html
            }
          }
          verein {
            childContentfulRichText {
              html
            }
          }
          faq {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`;
