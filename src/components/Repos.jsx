import React from "react";
import Styles from "./github.module.css";
const Repos = ({
  id,
  name,
  owner,
  html_url,
  clone_url,
  created_at,
  description,
  default_branch,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <div className={Styles.owner_block}>
        <img src={owner.avatar_url} alt={owner.login} />
        <h4>{owner.login}</h4>
      </div>
      <div className={Styles.description}>
        <p>{description}</p>
      </div>
      <div className={Styles.footer}>
        <a href={clone_url} target="_blank">
          Clone repo
        </a>
        <a href={html_url} target="_blank">
          view repo
        </a>
      </div>
    </div>
  );
};

export default Repos;
