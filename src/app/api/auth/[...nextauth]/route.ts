import NextAuth from "next-auth";
import { authOptions } from "./options";

const getHandler = NextAuth(authOptions);
const postHandler = NextAuth(authOptions);

export { getHandler as GET, postHandler as POST };
