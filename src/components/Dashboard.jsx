import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { getData } from "../Redux/action";
import "./Dashboard.css";

function Dashboard() {
  const { auth, token, name } = useSelector((state) => state);

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const page_size = 5;

  const [userName, setUserName] = useState("ravibala");

  useEffect(() => {
    getUsers();
  }, [page]);

  const dispatch = useDispatch();

  // https://api.github.com/search/users?q=${query}&page=${page}&per_page=${page_size}
  const getUsers = () => {
    dispatch(getData(userName, page, page_size, setUsers));
  };

  const handlePage = (val) => {
    setPage((prev) => prev + val);
  };

  if (!auth) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      {name}'s Dahsboard <br />
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter the user name"
      />
      <button onClick={getUsers}>Submit</button>
      <br />
      <button
        disabled={page === 1 ? true : false}
        onClick={() => handlePage(-1)}
      >
        Prev
      </button>
      <button onClick={() => handlePage(1)}>Next</button>
      <div className="container">
        {users.map((item) => (
          <a key={item.id} href={item.html_url}>
            <div>
              <img src={item.avatar_url} alt="" />
              <p>{item.login}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
