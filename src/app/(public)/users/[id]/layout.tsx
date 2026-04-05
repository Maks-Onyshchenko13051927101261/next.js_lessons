import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "UserIdLyout metadata"
};

type Props = {children: React.ReactNode}
const UserIdLyout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default UserIdLyout;