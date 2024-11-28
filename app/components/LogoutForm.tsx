import { logout } from "../actions/auth";
export default function LogoutForm(){
    return (
      <form action={logout}>
        <button
          className="px-3 py-0.5 rounded-sm overflow-hidden text-sm bg-white text-emerald-600"
          type="submit"
        >
          Logout
        </button>
      </form>
    );
}