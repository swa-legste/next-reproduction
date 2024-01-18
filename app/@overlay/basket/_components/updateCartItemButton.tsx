"use client";
import { ReactNode } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { updateCartItem } from "./actions";

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

export const UpdateCartItemButton = ({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) => {
const [error, formAction] = useFormState(updateCartItem, undefined);
  const updateCartItemAction = formAction.bind(undefined, { productId, quantity });

  return (
    <form action={updateCartItemAction}>
      <ActionButton>Fake Cart Update</ActionButton>
      <output aria-live="polite" className="sr-only">
        {error?.message}
      </output>
    </form>
  );
};
