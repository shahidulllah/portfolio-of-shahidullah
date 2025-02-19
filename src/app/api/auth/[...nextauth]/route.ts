import NextAuth, { AuthOptions, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/mongodb";
import UserModel from "@/models/User";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User }) {
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
    async session({ session }: { session: Session }) {
      const dbUser = await UserModel.findOne({ email: session.user?.email });

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
