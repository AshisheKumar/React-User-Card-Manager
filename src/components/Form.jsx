import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    if (!data.name || !data.email || !data.image) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    handleFormSubmitData(data);
    reset();
  };
  return (
    <div className="mt-10 flex gap-10 justify-center">
      <form className="flex gap-10" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("name")}
          className="rounded-md text-base px-2 py-1 font-semibold outline-none"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          className="rounded-md text-base px-2 py-1 font-semibold outline-none"
          type="text"
          placeholder="email"
        />
        <input
          {...register("image")}
          className="rounded-md text-base px-2 py-1 font-semibold outline-none"
          type="text"
          placeholder="imageUrl"
        />
        <input
          className="rounded-md px-5 py-1 bg-blue-600 text-white font-semibold"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
