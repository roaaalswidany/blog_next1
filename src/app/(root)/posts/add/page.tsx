import AddPostForm from "./AddPostForm"


const AddPage = () => {
  return (
    <section className="fix-height w-full flex items-center justify-center px-5 lg:peer-[]:">
        <div className="shadow p-4 bg-purple-200 rounded w-full">
            <h2 className="text-2xl text-green-700 font-semibold mb-4">Add Article</h2>
            <AddPostForm/>
        </div>
    </section>
  )
}

export default AddPage
