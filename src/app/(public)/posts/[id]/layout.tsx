import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PostsIdLyout metadata"
};

type Props = {children: React.ReactNode}
const PostsIdLyout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default PostsIdLyout;