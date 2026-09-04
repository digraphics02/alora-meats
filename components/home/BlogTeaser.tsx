import Link from "next/link";
import { ChevronRightIcon, CleaverIcon } from "@/lib/icons";

const posts = [
  { title: "Placeholder blog post title 01", excerpt: "Placeholder excerpt text for this article." },
  { title: "Placeholder blog post title 02", excerpt: "Placeholder excerpt text for this article." },
  { title: "Placeholder blog post title 03", excerpt: "Placeholder excerpt text for this article." },
];

export default function BlogTeaser() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-maroon-600">
              Placeholder eyebrow
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-forest-900 sm:text-4xl">
              Latest from the blog
            </h2>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-maroon-600"
          >
            View all posts
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.title}
              href="/blog/"
              className="group overflow-hidden rounded-2xl border border-cream-200 bg-white transition-shadow hover:shadow-md"
            >
              <div className="flex aspect-[16/10] items-center justify-center bg-forest-900">
                <CleaverIcon className="h-10 w-10 text-gold-500/60" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-forest-900 group-hover:text-maroon-600">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
