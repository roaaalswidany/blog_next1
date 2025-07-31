'use client'

import { addPost } from "@/apiCalls/postsApiCalls"
import { useRouter } from "next/navigation"
import { FormEvent, useRef } from "react"

const AddPostForm = () => {
  const router = useRouter()
    const title = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLTextAreaElement>(null)
    const sendData = async (event : FormEvent)=>{
        event.preventDefault()
        const response = await       addPost({
            title : title.current?.value,
            description : description.current?.value,
        })
        if (response) {
            router.refresh()
            router.back()
        }
    }
  return (
    <form onSubmit={sendData}>
      <input type="text" placeholder="post title" className="block border-2 border-black w-full" ref={title} required/>
      <textarea placeholder="post description" className="block border-2 border-black w-full" ref={description} required></textarea>
      <input type="submit" value="add"  className="block" />
    </form>
  )
}

export default AddPostForm
