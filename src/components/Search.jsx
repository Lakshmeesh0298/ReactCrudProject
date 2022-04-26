import React, { useState } from "react";
import { FaSearch, FaSuitcase, FaBuilding } from "react-icons/fa";
import Styles from "./github.module.css";
const Search = props => {
  let [state, setState] = useState("");
  let handleSubmit = e => {
    e.preventDefault();
    props.onTermSubmit(state);
  };
  return (
    <div className={Styles.searchBlock}>
      <form onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            placeholder="serch Profile"
            value={state}
            onChange={e => {
              setState(e.target.value);
            }}
          />
        </span>

        <span>
          <FaSearch />
        </span>
      </form>
      <main>
        <header>
          <figure>
            <img src={props.user.avatar_url} alt={props.user.login} />
          </figure>
          <div>
            <h2>{props.user.login}</h2>
            <p>
              <span>
                <FaSuitcase />
              </span>
              <span> {props.user.bio}</span>
            </p>
            <p>
              <span>
                <FaBuilding />
              </span>
              <span>{props.user.company}</span>
            </p>
          </div>
        </header>
      </main>
    </div>
  );
};

export default Search;
