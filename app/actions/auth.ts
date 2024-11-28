"use server"
import { cookies } from "next/headers";
// session
import { encrypt } from "../lib/session";

// interface
interface UserCredentialsInterface {
    username: string;
    password: string;
}

// login
export async function login(userCredentials: UserCredentialsInterface){
    // username
    const {username} = userCredentials
    const session = await encrypt({ username });
    (await cookies()).set("session",session,{
        httpOnly: true,
        expires: new Date(Date.now() + 10 * 1000),
    })
}

// logout
export async function logout(){
    (await cookies()).set("session","",{expires: new Date(0)})
}