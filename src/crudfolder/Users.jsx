import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import AxiosCRUD from "../apis/AxiosCRUD";
import Pagination from "./Pagination";

const Users = () => {
  let [state, setState] = useState([]);
  let [search, setSearch] = useState("");
  let [page, setPage] = useState(1);
  let [curentPage, setCurrentPage] = useState(8);
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await AxiosCRUD.get("/users");
      setState(data);
    };
    fetchData();
  }, []);
  let deleteHandler = async id => {
    await AxiosCRUD.delete(`/users/${id}`);
    window.location.assign("/");
  };
  const indexOflast = curentPage * page;
  const indexOffirst = indexOflast - curentPage;
  const currentPage = state.slice(indexOffirst, indexOflast);
  //   console.log(product.length);
  let paginate = num => {
    // pageNum.preventDefault();
    setPage(num);
  };

  return (
    <>
      <div className="userData">
        <label htmlFor=""> Search Users Name: </label>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <Pagination
        prepage={curentPage}
        crpage={state.length}
        paginate={paginate}
      />
      <div className="userDetails">
        {currentPage
          .filter(data => {
            if (search == "") {
              return data;
            } else if (
              data.name.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return data;
            }
          })
          .map(user => {
            return (
              <Fragment key={user.id}>
                <div>
                  <h2>{user.name}</h2>
                  <p>{user.salary}</p>
                  <h4>{user.company}</h4>
                  <Link to={`/edit-user/${user.id}`}>Edit</Link>
                  <button onClick={() => deleteHandler(user.id)}>Delete</button>
                </div>
              </Fragment>
            );
          })}
      </div>
    </>
  );
};

export default Users;
