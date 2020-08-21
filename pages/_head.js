import React from "react";
import Head from "next/head";

export const HeadComp = ({ teamName }) => {
  return (
    <Head>
      <title>{teamName ? `Llamify @ ${teamName}` : "Llamify"}</title>
      <link rel="icon" type="image/icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&amp;display=swap"
        rel="stylesheet"
      ></link>
      <link rel="stylesheet" media="screen, projection" href="/reset.css" />
      <link rel="stylesheet" media="screen, projection" href="/shared.css" />
    </Head>
  );
};
HeadComp.displayName = "HeadComp";

export default HeadComp;
