import React, { useState } from "react";

import Layout from "../components/Layout";
import logo from "../images/logo.png";
import { graphql } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";
import sections from "../components/sections";
import EmailValidator from "email-validator";
import classNames from "classnames";

const IndexPage = ({ data, location }) => {
  console.log("DingDing");
  const node = data.allContentfulStartseite.edges[0].node;
  console.log(location);

  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);

    const v = EmailValidator.validate(email);
    setValid(v);
    setSuccess(false);
    if(v)
    {
      setSuccess(true);
      addToMailchimp(email).then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
    }
  };

  return (
    <Layout title="Startseite" banner={node.banner.childContentfulRichText.html}>
      <div className="container mb-5">
        <div className="d-md-flex flex-row-reverse">
          <div className="text-center mb-5">
            <img src={logo} alt="Logo" />
          </div>
          <div className="">
            <h1 className="hero">Freizeitimker Wümme-Region e.V.</h1>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <form onSubmit={handleSubmit} className="">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className={classNames("form-control form-control-lg", {
                    "is-valid": success,
                    "is-invalid": valid === false,
                  })}
                  placeholder="E-Mail"
                  value={email}
                  onChange={e => {setEmail(e.target.value);setValid(null); setSuccess(false)}}
                />
                {valid === false && (
                  <div className="invalid-feedback">Bitte geben Sie eine gültige E-Mail Adresse ein.</div>
                )}
                {success && (
                  <div className="valid-feedback ">
                    Vielen Dank für Ihre Anmeldung.
                  </div>
                )}
              </div>
            </div>
            <div className="col-sm">
              <button type="submit" className="btn btn-primary btn-lg mb-3">
                Zum Newsletter anmelden
              </button>
            </div>
          </div>
        </form>
      </div>
      {sections.map(section => (
        <div
          id={section[0]}
          key={section[0]}
          className="container mb-5 positionrelative fancylinks section"
        >
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
          banner {
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
