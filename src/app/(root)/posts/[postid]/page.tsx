import React from "react";

interface ShowPostProps {
  params: { postId: string };
}

const ShowPost = ({ params }: ShowPostProps) => {
  return <div>heloo from show post {params.postId}</div>;
};

export default ShowPost;
