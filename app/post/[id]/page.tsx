// /app/post/[id]/page.tsx
import { getPostData, getAllPostIds } from "@/lib/posts";
import Comments from "@/app/components/comments";
import Image from "next/image";
import { notFound } from "next/navigation";

// This function pre-generates the routes based on post ids (static params generation)
export function generateStaticParams() {
  return getAllPostIds().map((post) => ({ params: { id: post.id } }));
}

// Correct typing for Post component props
interface PostPageProps {
  params: {
    id: string;
  };
}

// Server Component: Fetch the post data directly on the server side
export default async function Post({ params }: PostPageProps) {
  // `params.id` should be passed correctly as a string
  const postData = await getPostData(params.id);

  if (!postData) {
    return notFound(); // If no post data, show the 404 page
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <header className="mb-8">
          {postData.image && (
            <Image
              src={postData.image}
              alt={`Cover image for ${postData.title}`}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-6"
              priority
            />
          )}
          <h1 className="text-4xl font-bold text-white mb-2">{postData.title}</h1>
          <p className="text-gray-400 text-sm">Published on: {postData.date}</p>
        </header>
        <article className="prose prose-lg max-w-none mb-8 text-gray-300">
          <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </article>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Comments</h2>
          <Comments />
        </section>
      </div>
    </div>
  );
}
