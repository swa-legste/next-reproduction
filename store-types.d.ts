type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating:  {
      rate: number;
      count: number;
    }
  };
  

  type Cart = {
    id: number;
    userId: number;
    products: {
      productId: number;
      quantity: number;
    }[];
  };