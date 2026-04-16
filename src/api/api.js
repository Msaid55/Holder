const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// helper
async function request(path) {
  const res = await fetch(`${STRAPI_URL}${path}`);
  if (!res.ok) throw new Error("Failed to fetch: " + path);
  return res.json();
}

export async function getProducts(params = "") {
  return request(`/api/products?populate=*&${params}`.replace("?populate=*&", "?populate=*"));
}

export async function getCategories() {
  return request(`/api/categories?populate=*`);
}

export async function registerUser(userData) {
  const res = await fetch("http://localhost:1337/api/auth/local/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await res.json();
  return data;
}

export async function loginUser(userData) {
  const res = await fetch("http://localhost:1337/api/auth/local", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await res.json();
  return data;
}