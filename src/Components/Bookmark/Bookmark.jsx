
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="bg-slate-400 p-4 m-4">
            <h4 className="text-2xl mb-2">{title}</h4>
            
        </div>
    );
};

export default Bookmark;