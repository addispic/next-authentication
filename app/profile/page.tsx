import {redirect} from 'next/navigation'
import { getSession } from "../lib/session"

export default async function Profile(){
    const session = await getSession()
    if(!session){
        redirect("/")
    }
    return (
        <main>Profile Page</main>
    )
}