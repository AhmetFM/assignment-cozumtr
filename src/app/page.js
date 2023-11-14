"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [check, setCheck] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("email", email.current.value);
    console.log("pass", password.current.value);
  }

  function handleCheck() {
    setCheck(!check);
  }

  return (
    <main className="flex h-screen overflow-hidden">
      <div className="min-h-screen">
        <Image alt="img" width={720} height={1024} src="/Picture.png"></Image>
      </div>
      <div className="flex-1 flex flex-col ml-80 overflow-x-hidden">
        <div className="flex w-full mt-[80px] ml-28">
          <Image alt="img" width={120} height={78} src="/Logo.png"></Image>
        </div>
        <div className="mt-[100px]">
          <h3 className="font-semibold text-[#09093799] text-[24px]">
            Welcome Back!
          </h3>
          <h1 className="font-bold text-[32px] text-[#090937] ">
            Login to your account
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-[60px]">
          <div className="flex flex-col gap-[10px] font-semibold">
            <label htmlFor="email" className="font-semibold text-[20px]">
              Email
            </label>
            <input
              className="bg-[#F4F4FF] w-[400px] p-4 rounded"
              type="email"
              name="email"
              ref={email}
              required
              placeholder="john@mail.com"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px] mt-8">
            <label htmlFor="password" className="font-semibold text-[20px]">
              Password
            </label>
            <input
              className="bg-[#F4F4FF] w-[400px] p-4 rounded"
              type="password"
              name="password"
              minLength={6}
              maxLength={20}
              ref={password}
              required
              placeholder="*******"
            ></input>
          </div>
          <div className="text-[#6251DD] mt-2 gap-1 flex">
            <input
              name="checkbox"
              id="checkbox"
              className="border border-white rounded-full"
              type="checkbox"
              defaultChecked={check}
              onChange={handleCheck}
            />
            <label
              htmlFor="checkbox"
              className="font-semibold cursor-pointer select-none"
            >
              Remember me
            </label>
          </div>
          <div className="buttons flex flex-col gap-[10px] mt-24">
            <button
              type="submit"
              className="bg-[#EF6B4A] text-white w-[400px] h-[60px] font-semibold rounded-[4px]"
            >
              Login
            </button>
            <button className="text-[#6251DD] w-[400px] h-[60px] border-[#6251DD] border font-semibold rounded-[4px]">
              Register
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
