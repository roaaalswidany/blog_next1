import React, { Suspense } from "react";
import Loading from "./loading";
import { getPosts } from "@/apiCalls/postsApiCalls";
import {Post} from "@prisma/client"
import Link from "next/link";
import DeletePostButton from "@/components/DeletePostButton/DeletePostButton";

/* prisma/client */
/* interface Post{
  id: number
  title: string
  description: string
  createdAt: string
  updatedAt:string
} */

const Posts = async () => {
  const posts : Post[] = await getPosts()
  console.log(posts)
  return (
    <div>
      <Suspense fallback={<Loading />}>{posts.map(post => {
        return(
          <div key={post.id}>
            <h2><Link href={"/posts/"+post.id}>{post.title}</Link></h2>
            <p>{post.description}</p>
            <Link href={"/posts/edit/"+post.id}>Edit</Link>
            <DeletePostButton postId={post.id}/>
          </div>
        )
      })}
      <Link href={"/posts/add"}>
      <div className="mx-auto w-[200px] p-4 text-center bg-green-600 font-bold ">Add</div>
      </Link>
      </Suspense>
    </div>
  );
};

export default Posts;
