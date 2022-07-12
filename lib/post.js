import axios from "axios";

export async function getAllPost(page) {
  const res = await axios.get(
    `${process.env.URL_API}/api/posts?populate=%2A&pagination[page]=${page}&pagination[pageSize]=3`
  );
  const data = res.data;
  return data;
}
export async function getPostById(id) {
  const res = await axios.get(
    `${process.env.URL_API}/api/posts/${id}?populate=%2A`
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
export async function getCategories() {
  const res = await axios.get(
    `${process.env.URL_API}/api/categories?populate=%2A`
  );
  const data = res.data;
  return data;
}

export async function getIdCategories() {
  const res = await axios.get(`${process.env.URL_API}/api/categories`);
  const categoryId = res.data.data.map((data) => {
    return {
      params: {
        id: data.id.toString(),
      },
    };
  });
  return categoryId;
}

export async function getAuthors() {
  const res = await axios.get(
    `${process.env.URL_API}/api/authors?populate=%2A`
  );
  const data = res.data;
  return data;
}
