import Image from "next/image";
import { AddToCartButton } from "./addToCartButton";

export const ProductTile = (product: Product) => {
  return (
    <article
      className={`w-56 border border-gray-400 rounded-lg flex flex-col justify-between items-center p-2 gap-2`}
    >
      <div className="relative pb-12 w-full aspect-square">
        <Image
          fill
          src={product.image}
          alt={product.title}
          style={{ objectFit: "contain", objectPosition: "center" }}
          sizes="224px"
        />
      </div>
      <div className="text-sm text-center">{product.title}</div>
      <AddToCartButton {...product} />
      
    </article>
  );
};
