import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CommentsLyout metadata"
};

type Props = {children: React.ReactNode}
const CommentsLyout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CommentsLyout;