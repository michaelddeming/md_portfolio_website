function BlogPost(props) {
  return (
    <>
      <div className="blog-post">
        <h2>{props.post_title}</h2>
        <p>{props.post_content}</p>
        <small>Posted: {props.post_date}</small>
        <small>#{props.post_id}</small>
      </div>
    </>
  );
}

export default BlogPost;
