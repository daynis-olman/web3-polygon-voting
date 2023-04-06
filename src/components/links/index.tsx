import React from "react";

interface Props {
  dark?: boolean;
  footer?: boolean;
}

const Links = ({ dark, footer }: Props) => {
  return (
    <div className={`links ${footer ? "footer-links" : ""}`}>
      <div className="link" style={{ color: dark ? "#6851ff" : "#fff" }}>
        <a
          href="https://github.com/daynis-olman"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
      </div>
      <div
        className="link-divider"
        style={{ backgroundColor: dark ? "#DDDBE0" : "#a270d3" }}
      />
      <div className="link" style={{ color: dark ? "#6851ff" : "#fff" }}>
        <a
          href="https://github.com/daynis-olman"
          target="_blank"
          rel="noreferrer"
        >
          Outcomes
        </a>
      </div>
      <div
        className="link-divider"
        style={{ backgroundColor: dark ? "#DDDBE0" : "#a270d3" }}
      />
      <div className="link" style={{ color: dark ? "#6851ff" : "#fff" }}>
        <a
          href="https://github.com/daynis-olman"
          target="_blank"
          rel="noreferrer"
        >
          GitHUB
        </a>
      </div>
    </div>
  );
};

export default Links;
