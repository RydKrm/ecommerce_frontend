import FormSubmit from "./form-submit";

export default function AddPost() {
  const createPost = async (formData) => {
    "use server";
    const title = formData.get("title");
    const description = formData.get("description");
    const tag = formData.get("tag");
    setTimeout(() => {
      console.log("pending...");
    }, 2000);
    console.log("Data uploaded ", { title, description, tag });
  };

  return (
    <div className="my-10 mx-auto">
      <h1>Create post</h1>
      <form action={createPost} className="flex flex-col w-2/3 mx-auto">
        <input
          className="border border-blue-300 py-3 px-8 mx-5 my-2"
          type="text"
          name="title"
        />
        <input
          className="border border-blue-300 py-3 px-8 mx-5 my-2"
          type="text"
          name="description"
        />
        <input
          className="border border-blue-300 py-3 px-8 mx-5 my-2"
          type="text"
          name="tag"
        />
        <FormSubmit />
      </form>
    </div>
  );
}
