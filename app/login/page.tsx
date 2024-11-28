import {redirect} from 'next/navigation'
import { getSession } from "../lib/session";
// components
// login form
import LoginForm from "../components/LoginForm";
export default async function Login() {
    // session
    const session =  await getSession() 
    console.log(session)
    if(session?.username){
        redirect("/profile")
    }
  return (
    <div className="w-full h-full flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
