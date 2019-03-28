import React from "react";
import { graphql } from "gatsby";

import Layout from "./Layout";


const Page = ({ children, data }) => (
  <Layout title={data.contentfulPage.title}>
    <div className="container">
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulPage.body.childContentfulRichText.html
        }}
      />
    </div>
  </Layout>
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
