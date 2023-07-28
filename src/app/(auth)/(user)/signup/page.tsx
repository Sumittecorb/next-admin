"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { errorToastify } from "@/components/common";
import { ToastContainer } from "react-toastify";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        isAdmin: false,
    })
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        }
        else {
            setButtonDisabled(true)
        }
    }, [user])

    const onSignup = async () => {
        try {
            setIsLoading(true)
            const response = await axios.post("/api/v1/user/signUp", user)
            console.log("sigUp Success", response.data);
            router.push("/login")

        } catch (error: any) {
            console.log("signUp failed", error.message);
            errorToastify(error?.response?.data.error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h3> User Signup</h3>
                <hr />
                <label htmlFor="email">email</label>
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="email"
                />
                <label htmlFor="password">password</label>
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="password"
                />
                <button
                    disabled={buttonDisabled}
                    onClick={onSignup}
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                    {buttonDisabled ? "No signup" :
                        "Signup"}
                </button>
                <Link href="/login">Visit login page</Link>
            </div>
            <ToastContainer />
        </>

    )

}