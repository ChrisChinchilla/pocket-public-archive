import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
import MainCTA from "../components/MainCTA";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Articles I've read"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    >
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"
      />
      <style>{fontawesome.dom.css()}</style>
    </Helmet>
    <MainCTA />
    <Header />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
