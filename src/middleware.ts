export { default } from "next-auth/middleware";

export const config = {
  // * : Zero or more
  // + : One or more
  // ? : Zero or one
  matcher: ["/user"], // If not login, will redirect the user to Login page
};
