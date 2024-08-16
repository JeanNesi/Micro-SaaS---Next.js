import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { prisma } from "../database";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { auth, handlers } = NextAuth({
  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: "/auth",
    verifyRequest: "/auth",
    newUser: "/home",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  callbacks: {
    authorized({ auth }) {
      const isAuthenticated = !!auth?.user;

      return isAuthenticated;
    },
  },
  providers: [
    EmailProvider({
      maxAge: 15 * 60, // 15 minutes
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
});
