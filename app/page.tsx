import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-100">My Blog</h1>
      <ul className="space-y-6">
        {posts?.map((post) => (
          <li
            key={post.id}
            className="flex items-center space-x-6 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
          >
            {post.image && (
              <div className="flex-shrink-0">
                <Image
                  src={post.image} 
                  alt={`Thumbnail for ${post.title}`}
                  className="w-24 h-24 object-cover rounded-md shadow-lg"
                  width={100}
                  height={100}
                />
              </div>
            )}
            <div className="flex-1">
              <Link
                href={`/post/${post.id}`}
                className="text-blue-400 hover:text-blue-500 text-xl font-semibold transition-colors duration-200"
              >
                {post.title}
              </Link>
              <p className="text-gray-400 text-sm mt-2">{post.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
