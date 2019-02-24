import React from "react";
import { graphql } from 'gatsby' 

const Page = ({ children, data }) => (
  <div>
    {data.contentfulPage.title}
    <br />
    {data.contentfulPage.body.childContentfulRichText.html}
  </div>
)

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
