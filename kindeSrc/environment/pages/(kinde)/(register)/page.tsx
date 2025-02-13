"use server";

import { getKindeWidget, type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import Layout from "../../layout";

const styles: {
  container: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  logo: React.CSSProperties;
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

  heading: {
    alignSelf: "stretch",
    color: "#F5F5F5",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "32px" /* 100% */,
    letterSpacing: "-0.64px",
    textAlign: "center",
  },
  description: {
    marginBottom: "1.5rem",
  },

  logo: {
    width: "200px",
  },
};

const RegisterPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Layout context={context} request={request}>
      <div style={styles.container}>
        <div className="header">
          <img style={styles.logo} src={"/logo"} />
        </div>
        <main className="login-form">
          <div
            style={{
              width: "100%",
            }}
          >
            <h1 style={styles.heading}>{context.widget.content.heading}</h1>
            <p style={styles.description}>
              {context.widget.content.description}
            </p>
            {getKindeWidget()}
          </div>
        </main>
        <div className="footer">
          <div className="terms">
            <a href="https://www.kinde.com">Terms of use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await RegisterPage(event);
  return renderToString(page);
}
