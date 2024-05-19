"use client";

const Error = ({ error }) => {
  return (
    <div className="text-center content-center items-center mx-auto">
      <h2>Error occurs</h2>
      <p>{error.message}</p>
    </div>
  );
};
export default Error;
