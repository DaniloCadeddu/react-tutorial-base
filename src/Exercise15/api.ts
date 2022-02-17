export interface LoginRequest {
  username: string;
  password: string;
}
export const login = async ({ username, password }: LoginRequest) => {
  if (username === "admin" && password === "admin") {
    return "jwt";
  }
  throw Error();
};
