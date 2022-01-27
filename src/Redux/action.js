import { SET_AUTH, SET_NAME } from "./actionTypes";

export const setAuth = (data) => {
  return {
    type: SET_AUTH,
    payload: data,
  };
};

export const setName = (data) => {
  return {
    type: SET_NAME,
    payload: data,
  };
};

export const getData = (userName, page, page_size, setUsers) => () => {
  try {
    fetch(
      `https://api.github.com/search/users?q=${userName}&page=${page}&per_page=${page_size}&limit=300`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        if (data.message) {
          setUsers([]);
        } else {
          setUsers(data.items);
        }
      });
  } catch (error) {
    console.log("error:", error);
  }
};
