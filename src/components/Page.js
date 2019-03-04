import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import StaticImage from "./FixedImage";
import Logo from "./Logo";

const Page = ({ children, data }) => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
        rel="stylesheet"
      />
    </Helmet>

    <div className="container header">
      <div class="row">
        <div class="col-2">
          <Logo />
        </div>
        <div class="col-8">Freizeitimker Wümme-Region e.V.</div>
        <div class="col-2">Menü</div>
      </div>
    </div>

    <div className="container">
      <div class="row justify-content-md-center">
        <div className="col-8">
          Lorem ipsum dolor amet stumptown gastropub taiyaki sriracha austin,
          normcore mumblecore. Before they sold out pok pok direct trade, tofu
          tbh locavore cornhole pour-over street art. Cold-pressed farm-to-table
          quinoa gochujang, single-origin coffee coloring book cardigan
          williamsburg seitan deep v. Mumblecore lyft jean shorts sriracha
          crucifix asymmetrical succulents hot chicken aesthetic fam jianbing.
          Meh neutra pop-up kinfolk, intelligentsia chambray whatever direct
          trade gentrify tilde jianbing pabst celiac bushwick normcore. Craft
          beer readymade intelligentsia, ennui asymmetrical mustache tofu
          succulents poutine truffaut forage. Everyday carry pabst pour-over
          neutra, unicorn kale chips heirloom fingerstache. Pour-over hexagon
          tumeric twee vice, offal occupy man braid butcher thundercats shabby
          chic fixie stumptown hashtag. Shoreditch hoodie 8-bit umami vinyl
          meditation narwhal mumblecore. Taxidermy umami chia 90's single-origin
          coffee typewriter man bun coloring book tacos flexitarian shoreditch.
          Seitan shoreditch bespoke, wolf tbh raclette austin hammock chambray 3
          wolf moon. Fam everyday carry ethical typewriter +1 food truck
          gentrify forage heirloom 3 wolf moon aesthetic franzen shabby chic.
          Neutra adaptogen af, selfies lo-fi master cleanse direct trade
          scenester jianbing fashion axe raclette edison bulb 3 wolf moon
          waistcoat. Knausgaard man braid chambray, ugh locavore plaid kinfolk
          vinyl hashtag copper mug squid hot chicken lyft. Ugh pork belly
          chicharrones austin before they sold out gluten-free heirloom fixie
          bicycle rights banh mi seitan drinking vinegar tilde typewriter shabby
          chic. Portland shabby chic ramps meggings hoodie locavore selfies
          ethical church-key occupy coloring book hammock banh mi cloud bread
          intelligentsia. Normcore affogato fixie gochujang, health goth
          activated charcoal food truck flexitarian. Cronut tbh chicharrones man
          braid activated charcoal. Blog tote bag bicycle rights sustainable,
          pop-up narwhal 8-bit unicorn brunch vegan single-origin coffee. Banjo
          selvage hashtag twee kale chips XOXO +1 echo park bitters slow-carb
          tousled man braid keytar vice austin. Wayfarers pug franzen paleo
          salvia, flexitarian bespoke af keffiyeh raclette live-edge tacos.
          Meditation post-ironic fam irony schlitz, YOLO kitsch bitters. Man
          braid ugh semiotics squid green juice mixtape lyft umami vice.
          Gluten-free viral street art cornhole neutra literally gochujang
          chambray snackwave activated charcoal. Letterpress pop-up tofu
          gentrify meggings jean shorts single-origin coffee tbh mustache
          cornhole art party vice.
        </div>
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
