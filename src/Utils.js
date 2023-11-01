import axios from "axios";

const customFetch = axios.create({
  headers: {
    Authorization: "9gNuyIIPMBeL3grRrXI8S5oaXq9IJVK2BYVC7QXT8qc",
  },
});

export default customFetch;
