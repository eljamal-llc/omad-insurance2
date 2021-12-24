import { v4 as uuid } from "uuid";

type SignInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function SignInRequest(data: SignInRequestData) {
  await delay();
  return {
    token: uuid(),
    user: {
      name: "testName",
      email: "test@gmail.com",
    },
  };
}
export async function recoverUserInformation() {
  await delay();
  return {
    user: {
      name: "testName111111111",
      email: "test@gmail.com",
    },
  };
}
