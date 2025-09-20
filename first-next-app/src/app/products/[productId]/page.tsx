const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const pId = (await params).productId;

  return (
    <div>
      <h1>Details about product {pId}</h1>
    </div>
  );
};

export default page;
