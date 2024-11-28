"use server"
import {NextRequest, NextResponse} from 'next/server'
import { SignJWT, JWTPayload, jwtVerify } from "jose";
import { cookies } from "next/headers";

// secrete
const SECRET_KEY = process.env.SECRET_KEY;
// encoded key
const ENCODED_KEY = new TextEncoder().encode(SECRET_KEY);

// encrypt
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10s from now")
    .sign(ENCODED_KEY);
}

// decrypt
export async function decrypt(session: string) {
  const { payload } = await jwtVerify(session, ENCODED_KEY, {
    algorithms: ["HS256"],
  });
  return payload;
}

// get session
export async function getSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) {
    return;
  }
  return await decrypt(session);
}

// update session
export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value
    if(!session) return 
    
    // parsed
    const parsed = await decrypt(session)

    const res = NextResponse.next() 

    res.cookies.set({
      name: "session",
      value: await encrypt(parsed),
      httpOnly: true,
      expires: new Date(Date.now() + 10 *1000)
    });

    return res
}
