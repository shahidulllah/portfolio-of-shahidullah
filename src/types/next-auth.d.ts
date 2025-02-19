import { DefaultSession, DefaultUser } from "next-auth";
import { IUser } from "./user.type";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: IUser;
  }

  interface User extends DefaultUser {
    role: "user" | "admin";
  }
}
