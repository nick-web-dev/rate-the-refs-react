import React from "react";
import App from "next/app";
import Head from "next/head";
import "../styles/global.scss";
import DefaultLayout from "../src/layouts/DefaultLayout/DefaultLayout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Rate The Refs</title>
          <meta
            name="description"
            content="The 1st platform that enables you to share your opinion on the Ref’s performance."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="icon"
            sizes="192x192"
            href="/favicons/android-chrome-192x192.png"
          />
          <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" href="/favicons/favicon.ico" />
          <meta property="og:url" content="ratetherefs.com" />
          <meta property="og:title" content="Rate The Refs" />
          <meta name="theme-color" content="#44b9ed" />
          <meta
            property="og:description"
            content="The 1st platform that enables you to share your opinion on the Ref’s performance."
          />
        </Head>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </>
    );
  }
}

export default MyApp;
