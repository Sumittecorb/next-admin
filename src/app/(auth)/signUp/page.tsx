"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        isAdmin: true,
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
            const response = await axios.post("/api/user/signUp", user)
            console.log("sigUp Success", response.data);
            router.push("/login")

        } catch (error: any) {
            console.log("signUp failed", error.message);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <h1 className="mt-4 text-center">Admin Panel</h1>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h3>{isLoading ? "Processing" : "Signup"}</h3>
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
                <Link href="/">Visit login page</Link>
            </div>
        </>

    )

}