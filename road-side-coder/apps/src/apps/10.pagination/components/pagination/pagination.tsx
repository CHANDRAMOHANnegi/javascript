import "./style.css"

type PaginationProps = {
    currentPage: number
    totalPages: number
    setPage: (a: number) => void
    maxVisiblePages?: number
}

export const Pagination = ({ currentPage = 1, totalPages = 1, setPage, maxVisiblePages = 5 }: PaginationProps) => {

    const handleClickPage = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages && currentPage !== newPage) {
            setPage(newPage)
        }
    }

    const renderPageKey = (page, key) => {
        return (
            <button
                className={`btn ${currentPage === page ? "bg-slate-300 " : ""}`}
                key={key}
                onClick={() => handleClickPage(page)}
            >{page}</button>
        )
    }

    const renderPageNumbers = () => {
        const pageNumbers = []
        if (totalPages <= maxVisiblePages) {
            for (let pg = 1; pg <= totalPages; pg++) {
                pageNumbers.push(renderPageKey(pg, `${pg}`))
            }
        } else {
            let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
            let end = Math.min(totalPages, start + maxVisiblePages - 1)

            if (end - start + 1 < maxVisiblePages) {
                if (totalPages > maxVisiblePages) {
                    start -= maxVisiblePages - (end - start + 1)
                }
            }

            if (start >= 2) {
                pageNumbers.push(renderPageKey(1, "1"))
                pageNumbers.push(renderPageKey('...', "ellipsis-start"))
            }

            for (let i = start; i <= end; i++) {
                pageNumbers.push(renderPageKey(i, i))
            }
            
            if (end < totalPages) {
                pageNumbers.push(renderPageKey('...', "ellipsis-end"))
                pageNumbers.push(renderPageKey(totalPages, totalPages))
            }
        }
        return pageNumbers
    }

    return <div className='pagination'>
        <button
            className={`btn btn-prev ${currentPage === 1 ? "disable_pagination" : ""}`}
            onClick={() => handleClickPage(currentPage - 1)}
        >◀</button>
        {renderPageNumbers()}
        <button
            className={`btn btn-next ${currentPage === totalPages ? "disable_pagination" : ""}`}
            onClick={() => handleClickPage(currentPage + 1)}
        >▶</button>
    </div>
}
