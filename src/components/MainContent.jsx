import React, { Fragment } from "react";
import Repos from "./Repos";
import Spinner from "./Spinner";
import Styles from './github.module.css'

export const MainContent = props => {
  return (
    <div className={Styles.mainBlock}>
      <main className={Styles.repo_block}>
        {props.loading === true ? (
          <Spinner />
        ) : (
          props.repos.map(rep => {
            return (
              <Fragment key={rep.id}>
                <Repos {...rep} />
              </Fragment>
            );
          })
        )}
      </main>
    </div>
  );
};
