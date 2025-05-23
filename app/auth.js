import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    Providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE-CLIENT-ID,
            clientSecret: process.env.GOOGLE-CLIENT-SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
});