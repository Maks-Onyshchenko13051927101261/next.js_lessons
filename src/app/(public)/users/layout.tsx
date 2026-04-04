import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "UsersLyout metadata"
};

type Props = {children: React.ReactNode}
const UsersLyout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default UsersLyout;