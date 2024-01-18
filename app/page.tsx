import { getProducts } from "@/libs/store";
import { ProductTile } from "./_components/productTile";
export default async function Home() {

  const products = await getProducts();
  
  return (
    <main className="flex flex-col items-center justify-start py-12 px-6 gap-12">
      <h1 className="text-4xl font-bold">Most fake products</h1>
      <div className="flex flex-row flex-wrap gap-12 justify-center" >
      {products.map((product) => (
        <ProductTile key={product.id} {...product} />
      ))}
      </div>
    </main>
  );
}
