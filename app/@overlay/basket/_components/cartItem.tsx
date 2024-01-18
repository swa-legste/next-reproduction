import { getProduct } from "@/libs/store";
import Image from "next/image";
import { UpdateCartItemButton } from "./updateCartItemButton";

export const CartItem = async ({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) => {
  const product = await getProduct(productId);
  return (
    <div className="flex flex-row justify-start items-start w-full">
      <div className="relative aspect-square w-24 flex-shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "contain" }}
          sizes="100px"
        />
      </div>
      <div className="flex flex-col h-full justify-between">
        <h1 className="text-md">{product.title}</h1>
        <div className="flex flex-row items-center gap-2">
          <UpdateCartItemButton productId={productId} quantity={quantity}/>
        </div>
      </div>
    </div>
  );
};
