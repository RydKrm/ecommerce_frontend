"use client";
import { useFormStatus } from "react-dom";
export default function FormSubmit() {
  const status = useFormStatus();
  if (status.pending) {
    return <p>Pending</p>;
  }

  return (
    <div className="flex flex-row gap-x-4">
      <button
        className="bg-red-400 text-white my-5 w-24 px-1 py-2 rounded-md mx-auto"
        type="submit">
        Reset
      </button>
      <button
        className="bg-blue-400 text-white my-5 w-24 px-1 py-2 rounded-md mx-auto"
        type="submit">
        Add Post
      </button>
    </div>
  );
}
