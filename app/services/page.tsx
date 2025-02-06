export default function Services() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>

      <div className="prose prose-lg text-gray-700">
        <p>
          At <strong>My Blog</strong>, we’re committed to providing valuable
          content and a thriving community for our readers. Whether you’re here
          to learn, share, or connect, we’ve got something for you!
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            📖 Blog Posts
          </h2>
          <p>
            Explore high-quality articles on technology, lifestyle, health, and
            more. Our content is designed to inform, inspire, and engage readers
            of all backgrounds.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">🎓 Tutorials</h2>
          <p>
            Learn new skills with our step-by-step tutorials, perfect for both
            beginners and experts. Stay ahead with the latest trends and tools
            in the industry.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            🌍 Community Engagement
          </h2>
          <p>
            Connect with like-minded individuals, participate in discussions,
            and collaborate on exciting projects. Your voice matters here!
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            ✍️ Guest Posting
          </h2>
          <p>
            Have something valuable to share? Become a guest contributor and
            showcase your expertise to a wider audience.
          </p>
        </section>

        <section className="mt-8 bg-gray-100 p-4 rounded-md shadow">
          <h3 className="text-xl font-semibold text-gray-900">
            🚀 Get Involved!
          </h3>
          <p>
            Interested in contributing or have questions?{" "}
            <strong>Reach out to us today</strong>
            and be a part of our growing community!
          </p>
        </section>
      </div>
    </div>
  );
}
