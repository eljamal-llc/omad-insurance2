import { FC } from "react";
import type { NextPage } from "next";
import {  Navbar , NotFoundPage } from "../components";



const NotFound: FC<NextPage> = () => {
  return (
      <>
      <Navbar/>
      <NotFoundPage/>
      </>
  );
};

export default NotFound;
