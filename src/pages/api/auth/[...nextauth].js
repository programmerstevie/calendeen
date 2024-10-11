// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"

// /**
//  * @type {import("next-auth").AuthOptions}
//  */
// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     // ...add more providers here
//   ],
//   'callbacks': {
//     async session({ session, token, user }) {
//       // Send properties to the client, like an access_token from a provider.
//       session.accessToken = token.accessToken
//       return session
//     }
//   },
//   'session': {
//     'strategy': 'database'
//   }
// }

// export default NextAuth(authOptions)
