const environment = {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    AUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || ""
};

export default environment;