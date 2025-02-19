import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/mongodb";
import UserModel from "@/models/User";
import { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      image?: string;
      role: string;
    };
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await connectDB();
      const existingUser = await UserModel.findOne({ email: user.email });

      if (!existingUser) {
        await UserModel.create({
          name: user.name,
          email: user.email,
          image: user.image,
          role: "user",
        });
      }
      return true;
    },
    async session({ session }) {
      if (!session.user?.email) {
        return session;
      }
      const dbUser = await UserModel.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.role = dbUser.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
