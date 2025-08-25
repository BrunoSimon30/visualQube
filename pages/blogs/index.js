"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const categoryParam = selectedCategory
          ? `&categories=${selectedCategory}`
          : "";

        // ✅ `_embed` will bring featured image + author in one call
        const response = await axios.get(
          `https://blog.drop-root-llc.com/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=4${categoryParam}`
        );

        setPosts(response.data);
        setTotalPages(Number(response.headers["x-wp-totalpages"]));
      } catch (error) {
        console.error(error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://blog.drop-root-llc.com/wp-json/wp/v2/categories"
        );
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchPosts();
    fetchCategories();
  }, [currentPage, selectedCategory]);

  const getImage = (post) => {
    return (
      post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full
        ?.source_url ||
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "/img/placeholder.png" // fallback image from public folder
    );
  };

  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | Blogs</title>
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="inner-ban h-[50vh]  px-4 flex items-center justify-center bg-gray-200">
        <h2 className="text-[#030233] text-[40px] md:text-[4.271vw] font-[600] uppercase pt-24">
          Blogs
        </h2>
      </section>

      {/* Category Buttons */}
      <section className="text-center mt-4 pt-12">
        <div className="flex gap-3 justify-center mb-4 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedCategory === null
                ? "bg-[#b6d800] text-black"
                : "bg-gray-800 text-white border border-gray-600"
            }`}
          >
            All
          </button>

          {categories
            .filter((cat) => cat.name.toLowerCase() !== "uncategorized")
            .map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-semibold capitalize ${
                  selectedCategory === cat.id
                    ? "bg-[#b6d800] text-black"
                    : "bg-[#030233] text-white border border-gray-600"
                }`}
              >
                {cat.name}
              </button>
            ))}
        </div>
      </section>

      {/* Blog Cards */}
      <section className="blog-sec py-8 px-4 md:px-16 lg:px-32">
        <div className="text-white relative p-6 md:p-10 rounded-lg">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-[#030233] uppercase text-2xl">Loading...</p>
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="p-6 md:p-10 rounded-lg space-y-6 bg-gray-200"
                  >
                    {/* ✅ Featured Image */}
                    <img
                      src={getImage(post)}
                      alt={post.title.rendered}
                      className="rounded-lg w-full h-[500px] object-cover"
                    />

                    {/* Content */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <div className="border border-[#030233] px-3 py-1 rounded-3xl flex items-center gap-2">
                            <CiCalendarDate className="text-[#030233]" />
                            <span className="text-[#030233] text-xs font-semibold uppercase">
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        </div>

                        <h2
                          className="text-lg md:text-2xl font-bold text-[#030233]"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        ></h2>

                        <p
                          className="text-gray-700 text-sm"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        ></p>
                      </div>

                      {/* Read More */}
                      <div className="flex justify-between items-center">
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="bg-[#b6d800] text-black rounded-3xl uppercase font-bold px-4 py-2 text-sm"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-10">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="bg-[#030233] text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
                  >
                    Prev
                  </button>
                  <span className="text-[#030233]">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="bg-[#030233] text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-gray-400">No posts found.</div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
