import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import logo from "../images/logo.png";
import { graphql } from "gatsby";

//import Image from "../components/image"
//import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log("DingDing");
  const node = data.allContentfulStartseite.edges[0].node;
  console.log(node);

  const sections = [
    ["neuigkeiten", "Neuigkeiten"],
    ["kontakt", "Kontakt"],
    ["verein", "Verein"],
    ["faq", "FAQ"]
  ];

  return (
    <Layout>
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

      <div className="container mb-5">
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
