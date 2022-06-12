import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import ParticlesContainer from "../components/Contact";
import config from "../../content/meta/config";
import Fab from "@material-ui/core/Fab";
import { FaTag } from "./category";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa/";
import { IconContext } from "react-icons";

const ContactPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <ParticlesContainer />
      <div className={"texts"}>
        <span className={"nameTitle"}>{config.headerTitle}</span>
        <h2>
          Im a Full Stack Developer at{" "}
          <a className={"companyButton"} href={"https://www.fmss.com.tr"}>
            FMSS
          </a>
        </h2>
        <div className={"resumeDiv"}>
          <Fab
            variant="extended"
            size="medium"
            color="secondary"
            aria-label="add"
            target="_self"
            href={"/CV.pdf"}
          >
            View Resume
          </Fab>
        </div>
        <div className={"icons"}>
          <IconContext.Provider value={{ size: "25", className: "react-icons" }}>
            <a className={"socialButtons"} href={"https://github.com/Ahmetyldd"} target="_blank">
              <FaGithub />
            </a>
            <a
              className={"socialButtons"}
              href={"https://www.linkedin.com/in/ahmet-y%C4%B1ld%C4%B1r%C4%B1m-7aab5b149/"}
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className={"socialButtons"}
              href={"https://www.twitter.com/Ahmetyldd"}
              target="_blank"
            >
              <FaTwitter />
            </a>
          </IconContext.Provider>
        </div>
      </div>

      <Seo facebook={facebook} />
      <style jsx>{`
        .MuiFab {
          color: blue;
        }

        .nameTitle {
          font-size: 3.4vw;
          font-family: "Cabin", sans-serif;
        }

        .resumeDiv {
          float: left;
        }

        .socialButtons {
          margin-left: 10px;
        }

        .socialButtons:hover {
          color: blue;
        }

        .companyButton {
          text-decoration: underline;
          color: black;
        }

        .icons {
          display: block;
          float: left;
          margin-top: 14px;
        }

        .texts {
          position: absolute;
          margin-left: 20%;
          margin-top: 17%;
        }
      `}</style>
    </React.Fragment>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
