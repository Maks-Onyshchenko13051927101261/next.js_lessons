"use client";
import allEndpoint from "@/services/api.services";
import useFetch from "@/services/fetchHooks";
import { CommentComponent } from "./CommentComponent";

export const CommentsComponent = () => {
    const {loading, error, data: comments} = useFetch(allEndpoint.comments.getAll)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Somthing wrong</p>
    return (
        <div>{
           comments.map(comment => (<CommentComponent comment={comment} key={comment.id}/>))
        }</div>
    );
};