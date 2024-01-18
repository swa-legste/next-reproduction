"use client";
import { ReactNode } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { addToCart } from "./actions";

function ActionButton({ children }: Readonly<{ children: ReactNode }>) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="px-4 py-2 bg-black text-white font-bold rounded-md m-2"
    >
      {pending ? "action pending" : <>{children}</>}
    </button>
  );
}


export const AddToCartButton = (product: Product) => {
  const [error, formAction] = useFormState(addToCart, undefined);
  const addToCartAction = formAction.bind(null, product);

  return (
    <form action={addToCartAction}>
      <ActionButton>Add To Cart</ActionButton>
      <output aria-live="polite" className="sr-only">
        {error?.message}
      </output>
    </form>
  );
};
