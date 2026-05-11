const ArticleSkeleton = () => {
    return (
        <div className="card skeleton">
            <div className="skeleton-image"></div>

            <div className="content">
                <div className="skeleton-line title"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line short"></div>
            </div>
        </div>
    )
}

export default ArticleSkeleton