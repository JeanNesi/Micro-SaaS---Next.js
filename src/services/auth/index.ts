import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { prisma } from "../database";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth",
    signOut: "auth",
    error: "/auth",
    verifyRequest: "/auth",
    newUser: "/home",
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    jwt: async (token, user, account) => {
      if (account) {
        token.accessToken = account.accessToken;
        token.refreshToken = account.refreshToken;
      }

      return Promise.resolve(token);
    },

    session: async (session, token) => {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return Promise.resolve(session);
    },
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    EmailProvider({
      maxAge: 15 * 60, // 15 minutes
      generateVerificationToken: () => {
        const random = crypto.getRandomValues(new Uint8Array(8));
        return Buffer.from(random).toString("hex").slice(0, 6); // generates a random token of 6 alphanumeric characters
      },
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
});
