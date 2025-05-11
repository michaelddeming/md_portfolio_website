import Card from "./Card";

function BlogPost(props){

    return(
        <>
        <div className="blog-post">
        <Card> 
            <h2>{props.post_title}</h2>
            <p>{props.post_content}</p>
            <small>Posted: {props.post_date}</small>
            <small style={{textAlign:"right"}}>#{props.post_id}</small>
        </Card>
        </div>
        </>
    );
}

export default BlogPost