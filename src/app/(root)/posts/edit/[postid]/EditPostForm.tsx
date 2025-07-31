'use client'

import { addPost, editPost } from "@/apiCalls/postsApiCalls"
import { useRouter } from "next/navigation"
import { FormEvent, useRef } from "react"
import {Post} from "@prisma/client"

interface EditPostFormProps{
  post : Post
}

const EditPostForm = ({post} : EditPostFormProps) => {
  const router = useRouter()
    const title = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLTextAreaElement>(null)
    const sendData = async (event : FormEvent)=>{
        event.preventDefault()
        const response = await editPost({
            title : title.current?.value,
            description : description.current?.value,
        },
          post.id)
        if (response) {
            router.refresh()
            router.back()
        }
    }
  return (
    <form onSubmit={sendData}>
      <input type="text" placeholder="post title" defaultValue={post.title} className="block border-2 border-black w-full" ref={title} required/>
      <textarea placeholder="post description" className="block border-2 border-black w-full" ref={description} required>{post.description}</textarea>
      <input type="submit" value="edit"  className="block" />
    </form>
  )
}

export default EditPostForm
