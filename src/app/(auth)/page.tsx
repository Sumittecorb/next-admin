"use client";
import { errorToastify } from "@/components/common";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    isAdmin: true
  })

  const router = useRouter()
  const onLogin = async () => {
    try {
      const response = await axios.post("/api/user/login", user)
      console.log(response.data, "login succesfully");
      router.push("/dashboard")
    } catch (error: any) {
      console.log(error.message, "error")
      errorToastify(error?.response?.data.error)
    }
  }
  return (
    <>
      <main className="mt-0 transition-all duration-200 ease-in-out">
        <section>
          <div className="relative flex items-center min-h-screen p-0 overflow-hidden bg-center bg-cover">
            <div className="container z-1">
              <div className="flex flex-wrap -mx-3">
                <div className="flex flex-col w-full max-w-full px-3 mx-auto lg:mx-0 shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                  <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none lg:py4 dark:bg-gray-950 rounded-2xl bg-clip-border">
                    <div className="p-6 pb-0 mb-0">
                      <h1 className=" text-purple-900 underline text-center">Admin Panel</h1>
                      <h4 className="font-bold mt-14">Sign In</h4>
                      <p className="mb-0">
                        Enter your email and password to sign in
                      </p>
                    </div>
                    <div className="flex-auto p-6">

                      <form role="form">
                        <div className="mb-4">
                          <input
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="Email"
                            className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                          />
                        </div>
                        <div className="text-center">
                          <button
                            onClick={onLogin}
                            type="button"
                            className="inline-block w-full px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
                      <Link href="/login">
                        <p className="mx-auto mb-6 leading-normal text-sm cursor-pointer">
                          Login as a User{" "}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                          </svg>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 flex-col justify-center hidden w-6/12 h-full max-w-full px-3 pr-0 my-auto text-center flex-0 lg:flex">
                  <div className="relative flex flex-col justify-center h-full bg-cover px-24 m-4 overflow-hidden bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg')] rounded-xl ">
                    <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-blue-500 to-violet-500 opacity-60"></span>
                    <h4 className="z-20 mt-12 font-bold text-white">
                      "Attention is the new currency"
                    </h4>
                    <p className="z-20 text-white ">
                      The more effortless the writing looks, the more effort the
                      writer actually put into the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </main>
    </>
  );
};

export default Home;
