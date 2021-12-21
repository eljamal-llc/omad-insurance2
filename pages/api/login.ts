import { NextApiRequest, NextApiResponse } from "next";
export interface LoginProps {}

const Login = (req: NextApiRequest, res: NextApiResponse) => {
  console.log("==>", req.body);
};

export default Login;
