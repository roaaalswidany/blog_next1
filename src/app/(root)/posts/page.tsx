import React, { Suspense } from "react";
import Loading from "./loading";

interface Posts{
  id: number
  title: string
  description: string
  createdAt: string
  updatedAt:string
}

const Posts = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>heloo from post</Suspense>
    </div>
  );
};

export default Posts;
