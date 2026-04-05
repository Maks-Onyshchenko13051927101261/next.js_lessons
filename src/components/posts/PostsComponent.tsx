"use client";
import allEndpoint from "@/services/api.services";
import useFetch from "@/services/fetchHooks";
import { PostComponent } from "./PostComponent";

export const PostsComponent = () => {
    const {loading, error, data: posts} = useFetch(allEndpoint.posts)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Somthing wrong</p>
    return (
        <div>{
            posts.map(post => (<PostComponent post={post} key={post.id}/>))
        }</div>
    )
}