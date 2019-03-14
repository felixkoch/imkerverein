import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import logo from "../images/logo.png";

//import Image from "../components/image"
//import SEO from "../components/seo"

const IndexPage = () => (
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
  </Layout>
)

export default IndexPage
