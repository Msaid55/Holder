const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL || "https://ancient-dawn-cf46d216f3.strapiapp.com";

// Register User
export const registerUser = async (userData) => {
  const res = await fetch(`${STRAPI_URL}/api/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userData.fullName,
      email: userData.email,
      password: userData.password,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error?.message || "Registration failed");
  }

  return data;
};

// Login User
export const loginUser = async (userData) => {
  const res = await fetch(`${STRAPI_URL}/api/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: userData.email,
      password: userData.password,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error?.message || "Login failed");
  }

  localStorage.setItem("jwt", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));
  window.dispatchEvent(new Event("user_changed"));

  return data;
};

// Get Categories
export const getCategories = async () => {
  const res = await fetch(`${STRAPI_URL}/api/categories?populate=*`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return data.data || [];
};

// Get Products
export const getProducts = async () => {
  const res = await fetch(`${STRAPI_URL}/api/products?populate=*`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return data.data || [];
};

// Get Products By Category
export const getProductsByCategory = async (categoryId) => {
  const res = await fetch(
    `${STRAPI_URL}/api/products?populate=*&filters[category][id][$eq]=${categoryId}`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch products by category");
  }

  return data.data || [];
};