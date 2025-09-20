import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const {productId} =  await params;
  // const title = await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(`iphone-${pId}-Details`);
  //   }, 3000);
  // });

  const product = await fetch(`https://dummyjson.com/products/${productId}`).then(res => res.json());
  console.log(product);
  return {
    title: `Product ${product.title} | My Store`,
    description: `This is product ${productId} details page`,
  };
};

const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const pId = (await params).productId;

  return (
    <div>
      <h1>Details about product {pId}</h1>
    </div>
  );
};

export default page;
