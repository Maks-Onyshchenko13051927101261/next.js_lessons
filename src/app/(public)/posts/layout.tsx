import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PostsLyout metadata"
};

type Props = {children: React.ReactNode}
const PostsLyout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default PostsLyout;