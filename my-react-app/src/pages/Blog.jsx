import Header from "../comps/Header";
import BlogPost from "../comps/BlogPost";
import Card from "../comps/Card";



function Blog(){

    return(
        <>
        <Header></Header>
        <div className="blog">
            <Card>
                <BlogPost
                post_id={1}
                post_title="First Post"
                post_content={<p>My website is live!</p>}
                post_date="05/15/2025">
                </BlogPost>
      
            </Card>

        </div>
        </>
    );
}

export default Blog;