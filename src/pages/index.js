import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import TypewriterWords from "@site/src/components/TypewriterWords";
import React from "react";
import ReactPlayer from "react-player";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="myHeroLayout">
      <div className="mainText">
        <Heading as="h1" className="hero__title">
          <TypewriterWords />
        </Heading>
        Limitless possibilities with your entire eBook collection accessible on
        any device, any time and any where. Easily, upload, organize, read,
        share and sync your eBooks with BookFusion.
      </div>
      <div className="playerWrapper">
        <ReactPlayer
          playing={true}
          loop={true}
          muted={true}
          className="reactPlayer"
          url="videos/BookFusionIntroductionVideo.webm"
          controls={false}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
