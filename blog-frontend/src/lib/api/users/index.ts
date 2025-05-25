import axios from "axios";

export async function getUsers() {
  const res = await axios.get("http://jsonplaceholder.typicode.com/users/");
  return res.data;
}

export async function getUser(id: number) {
  const res = await axios.get(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  return res.data;
}
