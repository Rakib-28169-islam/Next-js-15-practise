import React from "react";
import {notFound} from "next/navigation"
const page = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { reviewId, productId } = await params;
  if(parseInt(reviewId)>100)
  {
    notFound();
  }
  return (
    <div>
      <h1>Product id:{productId}</h1>
      <h1>Review id:{reviewId}</h1>
    </div>
  );
};

export default page;
