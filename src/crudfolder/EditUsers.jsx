import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AxiosCRUD from "../apis/AxiosCRUD";
const EditUsers = () => {
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");
  let navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await AxiosCRUD.get(`/users/${id}`);
      setName(data.name);
      setSalary(data.salary);
      setCompany(data.company);
    };
    fetchData();
  }, [id]);
  let handlerSubmited = async e => {
    e.preventDefault();
    try {
      let payLoad = { name, salary, company };
      await AxiosCRUD.put(`/users/${id}`, payLoad);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="userBlock">
      <h2>Create Users</h2>
      <form onSubmit={handlerSubmited}>
        <div>
          <label htmlFor="user">User Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="salary">User Salary</label>
          <input
            type="text"
            value={salary}
            required
            onChange={e => setSalary(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="company">User Company</label>
          <input
            type="text"
            value={company}
            required
            onChange={e => setCompany(e.target.value)}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditUsers;
