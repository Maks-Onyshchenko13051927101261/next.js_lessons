import allEndpoint from "@/services/api.services";
import { Metadata } from "next";
import { FC } from "react";

type CommentPropsType = {
    params: {id:string},
}

export const generateMetadata = async ({params}: CommentPropsType): Promise<Metadata> => {
    const {id} = await params;
    const comment = allEndpoint.comments.getById(id);
    return {
        title: ``
    }
}
const CommentIdPage:FC<CommentPropsType> = () => {};

export default CommentIdPage;