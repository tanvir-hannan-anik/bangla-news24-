
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ArticleBlock {
  type: "text" | "image" | "subheading";
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string;
}

interface NewsArticle {
  id: string;
  title: string;
  description?: {
    blocks?: { text?: string }[];
  };
  firstPublished?: string;
  byline?: {
    name?: string;
  }[];
  body?: ArticleBlock[];
}

interface CategoryNewsPageProps {
  params: Promise<{
    newsId: string;
  }>;
}

const formatDate = (date?: string) => {
  if (!date) return "";

  return new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Dhaka",
  }).format(new Date(date));
};

const NewsDetailsPage = async ({
  params,
}: CategoryNewsPageProps) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    { next: { revalidate: 300 } }
  );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch news");
  // }

  const data = await res.json();
  const news: NewsArticle | undefined = data.data;

  if (!news) {
    notFound()
  }

  const description =
    news.description?.blocks
      ?.map((block) => block.text)
      .filter(Boolean)
      .join(" ") || "";

  const author = news.byline?.[0]?.name;

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">

        {/* News Title */}
        <header className="border-b border-gray-200 pb-7">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl md:text-5xl md:leading-[1.3]">
            {news.title}
          </h1>

          {description && (
            <p className="mt-6 text-lg leading-9 text-gray-600 sm:text-xl sm:leading-10">
              {description}
            </p>
          )}

          {/* Author and Date */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
            {author && (
              <span className="font-semibold text-gray-800">
                {author}
              </span>
            )}

            {news.firstPublished && (
              <time dateTime={news.firstPublished}>
                {formatDate(news.firstPublished)}
              </time>
            )}
          </div>
        </header>

        {/* News Body */}
        <div className="mt-8 space-y-7">
          {news.body?.map((block, index) => {
            if (block.type === "subheading" && block.text) {
              return (
                <h2
                  key={index}
                  className="pt-3 text-2xl font-bold leading-snug text-gray-950 sm:text-3xl"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "text" && block.text) {
              return (
                <p
                  key={index}
                  className="text-[17px] leading-9 text-gray-800 sm:text-lg sm:leading-[2.1]"
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === "image" && block.url) {
              return (
                <figure key={index} className="py-2">
                  <div className="overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={block.url}
                      alt={block.caption || news.title}
                      width={block.width || 1024}
                      height={block.height || 576}
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  {block.caption && (
                    <figcaption className="mt-3 border-b border-gray-200 pb-3 text-sm leading-6 text-gray-500">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            return null;
          })}
        </div>
      </article>
    </main>
  );
};

export default NewsDetailsPage;
