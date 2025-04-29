import environment from "@/config/environment";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWTExtended, SessionExtended, UserExtended } from "@/types/Auth";
import authServices from "@/services/auth.service";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth(
    {
        session: {
            strategy: "jwt",
            maxAge: 60 * 60 * 24
        },
        secret : environment.AUTH_SECRET,
        providers: [
            CredentialsProvider({
                id: "credentials",
                name: "credentials",
                credentials: {
                    identifier : {label: "identifier", type: "text"},
                    password : {label: "password", type: "password"},
                },
                async authorize(
                    credentials: Record<"identifier" | "password", string> | undefined,
                ) : Promise<UserExtended | null> {
                    const {identifier, password} = credentials as {identifier: string, password: string};
                    const result = await authServices.login({identifier, password}); 
    
                    const accessToken = result.data.data;
    
                    const me = await authServices.getProfileWithToken(accessToken);
    
                    const user = me.data.data;
    
                    if (accessToken && result.status === 200 && user._id && me.status === 200) {
                        user.accessToken = accessToken;
                        return user;
                    } else {
                        return null;
                    }
                },
            }),
            GoogleProvider({
                clientId: environment.GOOGLE_CLIENT_ID,
                clientSecret: environment.GOOGLE_CLIENT_SECRET,
            }),
        ],
        callbacks: {
            async signIn({ account }) {
                if (account?.provider === "google") {
                    try {
                        const googleToken = account.id_token;
                        const res = await authServices.loginGoogle({ token: googleToken! });
            
                        if (res.status === 200) {
                            // Simpan data user ke JWT via token.user
                            account.access_token = res.data.data.accessToken;
                            (account as any).userFromBackend = res.data.data;
                            return true;
                        }
                        return false;
                    } catch (err) {
                        console.error("Google login failed:", err);
                        return false;
                    }
                }
                return true;
            },
            
            

            async jwt({ token, user }: {token: JWTExtended; user: UserExtended | null}) {
                if (user) {
                    token.user = user;
                }
                return token;
            },
            async session({ session, token }: {session: SessionExtended; token: JWTExtended}) {
                session.user = token.user;
                session.accessToken = token.user?.accessToken;
                return session;
            },
        },
    }
);