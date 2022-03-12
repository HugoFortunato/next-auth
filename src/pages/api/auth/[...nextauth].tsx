import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "bb566a5371798f0131d0",
      clientSecret: "bae4785001b872dd110ee485afd280b50584b354",
    }),
  ],
});
