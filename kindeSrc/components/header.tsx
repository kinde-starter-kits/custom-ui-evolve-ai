"use server";
import React from "react";

const styles = {
  logo: {
    width: "200px",
  },
};

export const Header = () => {
  return (
    <div className="header">
      <img style={styles.logo} src={"/logo"} />
    </div>
  );
};
