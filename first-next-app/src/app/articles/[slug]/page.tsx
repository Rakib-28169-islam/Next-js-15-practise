import React from "react";

const page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { slug } = await params;
  const query = searchParams?.key;

  return (
    <div>
      <h1>Articles Slug Page</h1>
      <h2>This is article about {slug}</h2>
      {query ? (
        query instanceof Array ? (
          query.map((q, i) => <h3 key={i}>Query is {q}</h3>)
        ) : (
          <h3>Query is {query}</h3>
        )
      ) : (
        <h3></h3>
      )}
    </div>
  );
};

export default page;
