
const Blog = ({blog}) => {
    console.log(blog)
    const {title, cover_img, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div>
            <img src={cover_img} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h4 className="text-2xl">{author}</h4>
                        <p>{posted_date}</p>        
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map(hash => <span><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;