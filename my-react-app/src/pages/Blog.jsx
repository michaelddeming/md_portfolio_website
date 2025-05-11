import Header from "../comps/Header";
import BlogPost from "../comps/BlogPost";



function Blog(){

    return(
        <>
        <Header></Header>
        <div className="blog">
            <BlogPost
            post_id={1}
            post_title="First Post"
            post_content="First post content..."
            post_date="05/10/2025">
            </BlogPost>
        </div>
        </>
    );
}

export default Blog;