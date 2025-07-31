import { DOMAIN } from "@/utils/constant"

export async function getPosts() {
      const response = await fetch(DOMAIN + "/api/posts",{
    cache: "no-store"
  })
  if (!response.ok) {
    throw new Error("failed to fetch posts")
  }
  
  return response.json()
}

export async function addPost(post : {title? : string, description? : string}) {
  try {
    const response =   await fetch (DOMAIN + "/api/posts",{
      method: "POST",
      body: JSON.stringify(post)
    })

    return response.json()
  } catch (error : any) {
    throw new Error(error)
  }
}


export async function editPost(post : {title? : string, description? : string}, id: string) {
  try {
    const response =   await fetch (DOMAIN + "/api/posts/" + id,{
      method: "PUT",
      body: JSON.stringify(post)
    })

    return response.json()
  } catch (error : any) {
    throw new Error(error)
  }
}


export async function getPosts1(id:string) {
  const response = await fetch(DOMAIN + "/api/posts/" + id , {
    cache: "no-store"
  })
  if (!response.ok) {
    throw new Error ("failed to fetch posts")
  }

  return response.json()
}

export async function deletePost(id:string) {
  try {
    const response = await fetch(DOMAIN + "/api/posts/" + id,{
      method: "DELETE"
    })
    return response.json()
  } catch (error : any) {
    throw new Error(error)
  }
}