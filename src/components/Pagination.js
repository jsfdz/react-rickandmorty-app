import React from 'react'

export const Pagination = ({ page, message, residents, onPrevPage, onNextPage, total_residents, maxPage }) => {

    return (
        <div className="pagination">
            {!message &&
                <>
                    {residents &&
                        <>
                            {total_residents > 5 &&
                                <>
                                    <div className="page-buttons">
                                        <button onClick={onPrevPage} disabled={!page}>Prev</button>
                                        <button onClick={onNextPage} disabled={page === Math.ceil(total_residents / 5) - 1}>Next</button>
                                    </div>
                                    <div className="index-page">
                                        <p>{page + 1} of {maxPage}</p>
                                    </div>
                                </>
                            }
                        </>
                    }
                </>
            }
        </div>
    )
}