// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user }) {
//       await connectDB();
//       const existingUser = await User.findOne({ email: user.email });
//       if (!existingUser) {
//         await User.create({
//           name: user.name,
//           email: user.email,
//           image: user.image,
//           role: "user",
//         });
//       }
//       return true;
//     },
//     async session({ session }) {
//       const dbUser = await User.findOne({ email: session.user?.email });
//       if (dbUser) session.user.role = dbUser.role;
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
