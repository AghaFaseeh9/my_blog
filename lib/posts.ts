import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) return [];

  try {
    const fileNames = fs.readdirSync(postsDirectory).filter((file) => path.extname(file) === ".md");

    return fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title || "Untitled",
        date: matterResult.data.date || "Unknown Date",
        content: matterResult.content || "",
        image: matterResult.data.image || "/default-image.jpg",
      };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date (newest first)
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) return [];

  try {
    return fs
      .readdirSync(postsDirectory)
      .filter((file) => path.extname(file) === ".md")
      .map((fileName) => ({
        id: fileName.replace(/\.md$/, ""),
      }));
  } catch (error) {
    console.error("Error fetching post IDs:", error);
    return [];
  }
}

export function getPostData(id: string) {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    if (!fs.existsSync(fullPath)) {
      console.error(`Post not found: ${id}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title || "Untitled",
      date: matterResult.data.date || "Unknown Date",
      content: matterResult.content || "",
      image: matterResult.data.image || "/default-image.jpg",
    };
  } catch (error) {
    console.error("Error reading post data:", error);
    return null;
  }
}
