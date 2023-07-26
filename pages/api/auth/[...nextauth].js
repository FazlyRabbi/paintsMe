import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const strapiRes = await fetch(
          `https://printandgraph-backend.onrender.com/api/admins`
        );
        const data = await strapiRes.json();

        if (strapiRes.ok) {
          if (
            data.data[0].attributes.Email === credentials.Email &&
            data.data[0].attributes.Password === credentials.Password
          ) {
            return data.data[0].attributes.Email;
          }
        } else {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  secret: `ASFSAAt-2sGQh2aYKSoCQyxGSDAFSADFASFR8y6aUy7`,
});
