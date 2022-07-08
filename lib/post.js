import axios from "axios";

export async function getAllPost() {
  const res = await axios.get("http://localhost:1337/api/posts?populate=photo");
  const data = res.data.data;
  return data;
}
export async function getPostById(id) {
  const res = await axios.get(
    `http://localhost:1337/api/posts/${id}?populate=photo`
  );
  const data = res.data.data;
  return data;
}
export async function getIdPost() {
  const res = await axios.get("http://localhost:1337/api/posts");
  const postId = res.data.data.map((data) => {
    return {
      params: {
        id: data.id.toString(),
      },
    };
  });
  return postId;
}
