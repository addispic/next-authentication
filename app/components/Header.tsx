
import Link from "next/link";
// icons
import { PiBookOpenTextFill } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";
// components
// logout form
import LogoutForm from "./LogoutForm";

// session
// get session
import { getSession } from "../lib/session";
// action
import { logout } from "../actions/auth";

export default async function Header(){
    const session = await getSession()

    return (
      <header className="px-[3%] py-1.5 bg-emerald-600 flex items-center justify-between">
        {/* left */}
        <div>
          <Link href={"/"}>
            <PiBookOpenTextFill className="text-2xl text-neutral-200" />
          </Link>
        </div>
        {/* right */}
        <div>
          {session?.username ? (
            <div className="flex items-center gap-x-3">
              {/* profile */}
              <Link
                href={"/profile"}
                className="flex items-center gap-x-1 text-neutral-200"
              >
                <span className="text-sm">{`${session?.username}`}</span>
                <MdAccountCircle className="text-2xl" />
              </Link>
              <LogoutForm />
            </div>
          ) : (
            <Link
              href={"/login"}
              className="px-3 py-0.5 rounded-sm overflow-hidden text-sm bg-white text-emerald-600"
            >
              <span>Login</span>
            </Link>
          )}
        </div>
      </header>
    );
}