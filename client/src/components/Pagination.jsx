import React from "react";

export default function Pagination({page, setPage, max}) {

    const pagebuttons = []

    for(let i=0;i<max;i++) {
        pagebuttons.push(
            <button className="pagebutton" value={(i+1)} onClick={(e)=> setPage(e.target.value)}> {(i+1)} </button>
        )
    }

    return (
        <div className="Paginacion">
            {pagebuttons}
        </div>
    )
}