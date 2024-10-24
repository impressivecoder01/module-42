
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-4 pt-4">
            <h2 className="text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
               bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)   
            }
        </div>
    );
};

export default Bookmarks;