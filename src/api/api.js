// Register User
export const registerUser = async (userData) => {
  const res = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/auth/local/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData.fullName,
        email: userData.email,
        password: userData.password,
      }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error?.message || "Registration failed");
  }

  return data;
};


// Get Categories (FIX for your error)
export const getCategories = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/categories?populate=*`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return data;
};