import React from "react";
import "./Pagination.css"


const Pagination = (props) => {
    const { page, totalPages, onLeftClick, onRightClick } = props
    const isPrevDisabled = page === 1;
    const isNextDisabled = page === totalPages;

    return (
        <div className="pagination-container">
            <button
                onClick={onLeftClick}
                disabled={isPrevDisabled}
                className={`pagination-button ${isPrevDisabled ? "disabled" : ""}`}
            >
                <div> ◀ </div>
            </button>

            <div>{page} de {totalPages}</div>

            <button
                onClick={onRightClick}
                disabled={isNextDisabled}
                className={`pagination-button ${isNextDisabled ? "disabled" : ""}`}
            >
                <div> ▶ </div>
            </button>
        </div>
    )
}

export default Pagination;