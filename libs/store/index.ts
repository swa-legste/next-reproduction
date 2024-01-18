const api = async <T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> =>
  fetch(input, init)
    .catch((err) => Promise.reject(err))
    .then(async (res) => ({ res, payload: await res.json() }))
    .then(({ res, payload }) => {
      if (!res.ok) {
        console.error("Error in api", res.url, res.statusText, payload);
        return Promise.reject(new Error(payload.title, { cause: payload }));
      }
      return payload;
    });

export const getProducts = (limit = 10, init?: RequestInit) =>
  api<Product[]>("https://fakestoreapi.com/products?limit=" + limit, init);

export const getProduct = (id: number, init?: RequestInit) =>
  api<Product>(`https://fakestoreapi.com/products/${id}`, init);

export const getCart = (id = 1, init?: RequestInit) =>
  api<Cart>(`https://fakestoreapi.com/carts/${id}`, {
    ...init,
    next: {
      ...init?.next,
      tags: ["cart"],
    },
    cache: "no-store",
  });

export const updateCart = (cart: Cart, init?: RequestInit) =>
  api<{ id: number }>(`https://fakestoreapi.com/carts/${cart.id}`, {
    ...init,
    method: "PUT",
    body: JSON.stringify(cart),
    cache: "no-store",
  });
