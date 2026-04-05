import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CommentsIdLyout metadata"
};

type Props = {children: React.ReactNode}
const CommentsIdLyout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CommentsIdLyout;