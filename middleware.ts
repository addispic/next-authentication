import {NextRequest} from 'next/server'

// session
// update session
import { updateSession } from './app/lib/session'

export async function middleware(request: NextRequest){
    return await updateSession(request)
}