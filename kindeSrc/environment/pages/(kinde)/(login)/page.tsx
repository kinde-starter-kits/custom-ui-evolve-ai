"use server";

import {
  getKindeRegisterUrl,
  getKindeWidget,
  getLogoUrl,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import Layout from "../../layout";

const styles: {
  container: React.CSSProperties;
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  logo: React.CSSProperties;
  logoWrapper: React.CSSProperties;
} = {
  container: {
    minHeight: "100vh",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background:
      "url(https://asset.kindedemo.com/evolve-ai/bg.png) lightgray 50% / cover no-repeat",
  },
  loginForm: {
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "32px",
    background: "rgba(0, 0, 0, 0.2)",
  },
  heading: {
    alignSelf: "stretch",
    color: "#F5F5F5",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 650,
    lineHeight: "32px" /* 100% */,
    letterSpacing: "-0.64px",
  },
  description: {
    marginBottom: "1.5rem",
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3rem",
  },
  logo: {
    width: "115.5px",
  },
};

const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Layout context={context} request={request}>
      <div style={styles.container}>
        <main style={styles.loginForm}>
          <div style={styles.logoWrapper}>
            <img style={styles.logo} src={getLogoUrl()} />
          </div>
          <div>
            <h2 className="sf-pro" style={styles.heading}>
              {context.widget.content.heading}
            </h2>
            <p style={styles.description}>
              {context.widget.content.description}
            </p>
            {getKindeWidget()}
          </div>
        </main>
      </div>
    </Layout>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await DefaultPage(event);
  return renderToString(page);
}
