import React, { useState, useEffect } from "react";
import Axios from "../apis/Axios";
import Search from "./Search";
import Styles from "./github.module.css";
import { MainContent } from "./MainContent";
const Home = () => {
  let [user, setUser] = useState("");
  let [repos, setRepos] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetch = async () => {
      try {
        let clintId = "Iv1.cad8e32bd8f7bec0";
        let clintSecret = "5692643eca9aebe0786148f7e88eb82d64db7bc7";
        let user = await Axios.get(
          `/users/Lakshmeesh0298?clintId${clintId}&clintScret${clintSecret}`
        );
        let repos = await Axios.get(
          `/users/Lakshmeesh0298/repos?clintId${clintId}&clintScret${clintSecret}`
        );

        setLoading(true);
        setUser(user.data);
        setRepos(repos.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetch();
  }, []);
  let onTermSubmit = async term => {
    try {
      let clintId = "Iv1.d764350773cda97a";
      let clintSecret = "cd069ca55568d478b5702a034f0ffe5db68e3567";
      let user = await Axios.get(
        `/users/${term}?clintId${clintId}&clintScret${clintSecret}`
      );
      let repos = await Axios.get(
        `/users/${term}/repos?clintId${clintId}&clintScret${clintSecret}`
      );

      setLoading(true);
      setUser(user.data);
      setRepos(repos.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <section id={Styles.mainBlock1}>
      <h3>WelCome to github Profiles</h3>
      <article>
        <Search onTermSubmit={onTermSubmit} user={user} loading={loading} />
        <MainContent user={user} loading={loading} repos={repos} />
      </article>
    </section>
  );
};

export default Home;
