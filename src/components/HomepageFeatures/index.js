import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Custom Sources",
    description: (
      <>
        Etro is shipped with video, audio, image and text sources. You can
        easily create your own, too.
      </>
    ),
  },
  {
    title: "Hardware Accelerated Filters",
    description: (
      <>
        Hardware accelerated GLSL shaders for video effects. Use Etro's built-in
        effects or write your own.
      </>
    ),
  },
  {
    title: "Play, Stream and Record",
    description: (
      <>
        Play the result to an HTML canvas element, stream it with WebRTC or
        record it to a blob.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={`${clsx("col col--4")} ${styles.feature}`}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
