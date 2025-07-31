'use client'

import { deletePost } from "@/apiCalls/postsApiCalls"
import { useRouter } from "next/navigation"

const DeletePostButton = ({postId} : {postId : string}) => {
    const router = useRouter()
    const deletePostHundel = async (id : string)=>{
        const response = await deletePost(id)

        if (response) {
          router.refresh
        }
    }
  return (
    <button onClick={()=> deletePostHundel(postId)}>
      delete
    </button>
  )
}

export default DeletePostButton
