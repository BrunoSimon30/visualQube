import axios from "axios";

import Head from "next/head";
import { CiCalendarDate } from "react-icons/ci";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Static component — no useEffect, no useRouter needed
export default function BlogDetail({
  post,
  featuredImage,
  tags,
  categories,
  recentPosts,
  authorName,
}) {
  if (!post)
    return <p className="text-red-500 text-center mt-10">Post not found</p>;

  const authorImages = {
    "Mustafa Uzair": "/img/t2.png",
    "Ali Qureshi": "/img/t1.png",
    "Jazib Qureshi": "/img/t3.png",
  };

  const getAuthorImage = (name) => {
    return (
      authorImages[name] ||
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?..."
    );
  };

  return (
    <>
      <Head>
        <title>{post?.seo_title || post.title.rendered}</title>
        <meta
          name="description"
          content={post?.seo_description || post.excerpt.rendered}
        />
      </Head>
      <Header />
      <section className="inner-ban  h-[60vh] bg-gray-200 px-24 flex items-center justify-center     w-full">
        <div>
          <h1
            className="text-[#030233] text-2xl md:text-[2vw] leading-[6vw] md:leading-[4.5vw] font-semibold   px-6 md:px-12  text-center"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></h1>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 md:px-16 lg:px-14">
        <div>
         

          <div className="flex flex-col md:flex-row gap-8 py-12">
            <div className="md:w-3/4 bg-gray-200 text-white p-6 md:p-10 rounded-lg space-y-2">
              {featuredImage && (
                <img
                  src={featuredImage}
                  alt="Featured"
                  className="w-full h-[900px] rounded-lg mb-4 object-cover"
                />
              )}
              <h1 className="text-[40px] font-bold text-[#030233]">{post.title.rendered}</h1>
              <div
                className="blogwrap text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              ></div>
            </div>
            <aside className="md:w-1/4 bg-gray-200  px-6 py-4 rounded-lg md:sticky md:top-28 md:self-start">
              <h2 className="text-[#030233] text-lg font-bold mb-4">Tags</h2>
              <ul className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <li key={index}>
                    <div className="border border-[#030233] px-3 py-1 md:px-4 md:py-2 rounded-3xl flex items-center gap-2">
                      <span className="text-[#030233] text-xs md:text-sm font-semibold capitalize">
                        {tag}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="text-[#030233] text-lg font-bold mt-6 mb-4">
                Recent Posts
              </h2>
              <ul className="space-y-4">
                {recentPosts.map((p) => (
                  <li key={p.id} className="flex items-center gap-4">
                    {p.featured_media && (
                      <img
                        src={p.featured_media}
                        alt="Post Thumbnail"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    )}
                    <Link
                      href={`/blogs/${p.slug}`}
                      className="text-[#030233] no-underline"
                    >
                      {p.title.rendered.length > 50
                        ? `${p.title.rendered.substring(0, 50)}...`
                        : p.title.rendered}
                    </Link>
                  </li>
                ))}
              </ul>

              <h2 className="text-[#030233] text-lg font-bold mt-6 mb-4">
                Categories
              </h2>
              <ul className="space-y-2 inline-flex items-center gap-2">
                {categories.map((cat) => (
                  <li key={cat.id} className="text-gray-400">
                    <div className="border border-[#030233] px-3 py-1 md:px-4 md:py-2 rounded-3xl flex items-center gap-2">
                      <span className="text-[#030233] text-xs md:text-sm font-semibold capitalize">
                        {cat.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// ----------- Static Generation Logic Below ---------------

export async function getStaticPaths() {
  const res = await axios.get(
    "https://blog.drop-root-llc.com/wp-json/wp/v2/posts?per_page=100"
  );
  const paths = res.data.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // or "blocking" if you want ISR
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  try {
    const response = await axios.get(
      `https://blog.drop-root-llc.com/wp-json/wp/v2/posts?slug=${slug}`
    );
    if (response.data.length === 0) {
      return { notFound: true };
    }

    const post = response.data[0];

    const [media, tagsRes, authorRes, catRes, recentRes] = await Promise.all([
      post.featured_media
        ? axios.get(
            `https://blog.drop-root-llc.com/wp-json/wp/v2/media/${post.featured_media}`
          )
        : Promise.resolve({ data: { source_url: null } }),

      post.tags.length
        ? axios.get(
            `https://blog.drop-root-llc.com/wp-json/wp/v2/tags?include=${post.tags.join(
              ","
            )}`
          )
        : Promise.resolve({ data: [] }),

      axios.get(
        `https://blog.drop-root-llc.com/wp-json/wp/v2/users/${post.author}`
      ),

      post.categories.length
        ? axios.get(
            `https://blog.drop-root-llc.com/wp-json/wp/v2/categories?include=${post.categories.join(
              ","
            )}`
          )
        : Promise.resolve({ data: [] }),

      axios.get(
        `https://blog.drop-root-llc.com/wp-json/wp/v2/posts?per_page=5&_embed`
      ),
    ]);

    const recentPosts = recentRes.data.map((p) => ({
      ...p,
      featured_media:
        p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    }));

    return {
      props: {
        post,
        featuredImage: media.data.source_url,
        tags: tagsRes.data.map((tag) => tag.name),
        authorName: authorRes.data.name,
        categories: catRes.data,
        recentPosts,
      },
    };
  } catch (err) {
    console.error(err);
    return { notFound: true };
  }
}
