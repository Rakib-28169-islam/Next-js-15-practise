// This is a Server Component, no 'use client' needed.

// This component receives 'params' from the URL, like `/posts/123`
export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  
  const post = await fetch(`https://dummyjson.com/posts/${(await params).postId}`)
  .then(res => res.json());

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
      <p className="text-gray-700">{post?.body}</p>
    </div>
  );
}

// Dummy function to simulate an API call
async function fetchPostData(id: string) {
  // Wait for 500ms to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    id: id,
    title: `Post Title ${id}`,
    content: `This is the detailed content for Post ${id}. It's a great example of the Next.js template feature in action.`,
  };
}