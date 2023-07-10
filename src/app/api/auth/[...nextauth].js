import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: 'b9f1575b859a4f1e406f',
        clientSecret:'d44920fe3d4996bea9bccf2cee457bad5df0869f' ,
      }),
      // ...add more providers here
    ],
  }
  export default NextAuth(authOptions)