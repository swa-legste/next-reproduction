import { getCart } from "@/libs/store";
import { Drawer } from "../_components/drawer";
import { CartItem } from "./_components/cartItem";

export default async function Page() {

  const cart = await getCart(1)
  return <Drawer title={"Fake Basket"}><div className="flex flex-col px-6 gap-12">
      {cart.products.map((product) => <CartItem key={product.productId} {...product} />)}
    </div></Drawer>;
}
