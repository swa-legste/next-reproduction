"use server";
import { getCart, updateCart } from "@/libs/store";
import { revalidateTag } from "next/cache";

export async function updateCartItem(
  state: Error | undefined,
  {
    productId,
    quantity,
  }: {
    productId: number;
    quantity: number;
  }
) {
  const cart = await getCart(1);

  //Some logic here we don't need since this is all fake
  try {
    await updateCart(cart);
  } catch (e) {
    return new Error("Failed to update cart", { cause: e });
  }

  revalidateTag("cart");
}
