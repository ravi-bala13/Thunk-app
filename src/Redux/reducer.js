const init = {
  auth: false,
  token: "",
  name: "",
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        auth: true,
        token: payload,
      };

    case "SET_NAME":
      return {
        ...state,
        name: payload,
      };

    default:
      return state;
  }
};
