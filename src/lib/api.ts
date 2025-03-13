import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
}

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export const getAllPosts = (): Post[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug));
  return posts;
}

export const srcScrubber = (path: string = '') => {
  try {
    const url = new URL(path)

    if (url.protocol.includes('http')) {
      return path
    } else { throw new Error }
  } catch (_) {
    const joined = join(process.env.imageBase ?? '', path)

    if (joined && joined[0] !== '/') {
      return `/${joined}`
    }

    return joined
  }
}