import axios from "axios";

export async function getAllPost() {
  const res = await axios.get(
    `${process.env.URL_API}/api/posts?populate=photo&populate=author`
  );
  const data = res.data.data;
  return data;
}
export async function getPostById(id) {
  const res = await axios.get(
    `${process.env.URL_API}/api/posts/${id}?populate=photo&populate=author`
  );
  const data = res.data.data;
  return data;
}
export async function getIdPost() {
  const res = await axios.get(`${process.env.URL_API}/api/posts`);
  const postId = res.data.data.map((data) => {
    return {
      params: {
        id: data.id.toString(),
      },
    };
  });
  return postId;
}
