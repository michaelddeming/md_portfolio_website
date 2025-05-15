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
                post_content={<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio alias assumenda quaerat quam dolore et! Doloribus consectetur dignissimos odit, quo porro quasi incidunt corporis sed rem impedit sit quis laboriosam, ex id perspiciatis voluptatibus tenetur! Exercitationem aliquid fuga expedita saepe velit nam sequi asperiores alias itaque unde laudantium quidem natus quo distinctio repudiandae, repellat iusto magni nulla magnam debitis praesentium mollitia. Facilis esse assumenda aperiam suscipit officiis sunt. Recusandae totam expedita itaque ea eius reprehenderit culpa ipsum ratione? Fugiat provident officiis modi vero expedita molestias quaerat repudiandae aliquam voluptatem ipsum nisi quos sequi, vitae soluta deserunt vel, eum fuga voluptate error dolorum natus similique cum est ipsa. Aut deserunt repellat ad minima modi quasi commodi molestiae debitis, magni alias qui hic ullam totam voluptates nam sed obcaecati perferendis numquam repellendus unde! Odio, quasi libero architecto ipsum voluptatem hic dolorem earum ad at saepe asperiores quas assumenda aut laudantium beatae et laboriosam. Soluta non doloribus dolorem quod ea, tempora necessitatibus quo ab esse quam repellendus ducimus delectus enim ratione autem eos amet! Dignissimos assumenda deleniti facilis cum iusto cumque quaerat, quia dolorum! Laborum eveniet quibusdam eius doloribus, deleniti accusamus atque quam qui, similique nam omnis unde quo corporis iste itaque? Provident magnam debitis nobis consequuntur dolore recusandae saepe expedita quam, temporibus tempora earum perspiciatis vero eaque nam quidem culpa porro omnis itaque. Itaque unde, ducimus voluptates laboriosam voluptate officia quaerat magnam harum aspernatur molestiae dolorem, quae sint, atque praesentium quibusdam dolores. Amet nostrum voluptas commodi officia eum sunt non, dolor placeat numquam, ea vel perspiciatis explicabo a quae nam itaque culpa similique error nemo quaerat. Qui ad pariatur officiis, quia consequatur, voluptas itaque non cumque ipsum saepe maiores iure aspernatur odio numquam possimus, aut enim! Esse earum nesciunt ea quaerat, ipsum consequatur sequi asperiores adipisci aliquam, mollitia dicta expedita inventore vel veniam quas possimus! Aliquid rem beatae quidem nisi atque libero sapiente adipisci. Quaerat numquam aut provident iusto impedit quidem quas repellendus esse. Rerum culpa blanditiis laboriosam quos veritatis, iste ab obcaecati dolore cum vero odio. Aspernatur sapiente autem vero delectus porro illo labore iusto beatae tempore reiciendis at similique ipsam quisquam, sunt magni accusantium facilis modi perferendis est ut cum, numquam repellendus enim! A voluptas, ullam quidem iusto nostrum eaque esse est quibusdam nesciunt at neque, non itaque, vel dolore. Odio eos distinctio debitis amet voluptatem cumque illo deleniti! Incidunt ex a animi, laudantium quo dicta minus eius harum quas vel ducimus dolorem assumenda dolor voluptas ipsum eveniet neque iusto. Inventore unde ex laboriosam maiores ipsum libero minima in pariatur deserunt. Esse, numquam rem excepturi consequatur, tempore omnis molestias vero nulla, adipisci sed sunt error qui magni nesciunt tempora magnam praesentium perferendis delectus asperiores laudantium velit nam quasi. Veniam repudiandae hic accusantium similique distinctio perspiciatis non eligendi dolorum, quia corporis impedit totam cupiditate quis alias earum odio eveniet amet reprehenderit vero! Ipsum cum adipisci placeat reprehenderit assumenda fugit dolore illum sint error debitis quidem quia ab nemo voluptates tempora porro provident ullam quo officiis nihil, earum autem impedit! Aliquam, optio.</p>}
                post_date="05/10/2025">
                </BlogPost>
      
            </Card>
           <Card>
                      <BlogPost
                post_id={1}
                post_title="First Post"
                post_content="First post content...has hdanshdbashdbashdbashdbashdbasjhdbasjhahbdhabdhabdhabdajhdbasjhdbashdbashdbasjhdbashdbashdbasjhdbasdhbasjhdbasjhdbasjhdbasjhdbasjhdbasjhdbasjhdbasjhdbasjhdbasjhdbasjhdbasjhdbhajs"
                post_date="05/10/2025">
                </BlogPost>
           </Card>
        </div>
        </>
    );
}

export default Blog;