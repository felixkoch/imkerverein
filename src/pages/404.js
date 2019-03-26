import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout title="404: Seite nicht gefunden">
    <div className="container">
      <h1>Seite nicht gefunden</h1>
      <p>Schade.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
