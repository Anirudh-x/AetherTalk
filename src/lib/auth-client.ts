import { polarClient } from "@polar-sh/better-auth"
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://aether-talk-snowy.vercel.app",
    plugins: [polarClient()]
})