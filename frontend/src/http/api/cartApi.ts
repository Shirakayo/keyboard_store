import { $host } from "../index";

export const addCartItem = async (id: number) => {
  return await $host.post("cart", {
    id: id,
  });
};

export const deleteCartItem = async (id: number) => {
  return await $host.delete(`cart`, {
    params: {
      id: id,
    },
  });
};

export const fetchItems = async () => {
  return await $host.get("cart");
};

