import React from "react";

const Newsletter = () => {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //   };

  return (
    <section className="flex flex-col justify-center items-center text-center relative z-[1] mt-4 mb-8">
      <div className="font-bold  absolute -z-[1] text-[7rem] text-[#f2f3f7] ">
        Newsletter
      </div>
      <h1 className="mb-4 font-semibold text-[#212121] text-[2rem] leading-10 tracking-[0.03em]">
        Subscribe Our Newsletter
      </h1>
      <p className="mb-8 text-base text-[#212121]">
        Get the latest information and promo offers directly
      </p>
      <form>
        <input
          type="email"
          placeholder="Input email address"
          className="bg-[#FCFCFC] border border-gray-400 pt-2 pr-[7.5rem] pb-2 pl-5 mb-4"
        ></input>
        <button
          type="submit"
          className="ml-2.5  bg-white text-sm font-semibold py-2.5 px-5   border border-sky-500 text-sky-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white "
        >
          Get Started
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
