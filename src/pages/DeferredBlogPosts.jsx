import { Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";
import Posts from "../components/Posts";
import { getSlowPosts } from "../util/api";

function BlogPostsPage() {
  const loaderData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Could not load posts 😬</p>}
        >
          {loadedPosts => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
}

export default BlogPostsPage;

export async function loader() {
  return defer({ posts: getSlowPosts() }); // await getSlowPosts() если нужно дождить полной загрузки
}
