function Pagination({ props }) {
  const { currPage, setCurrPage, totalPages } = props;

  const btnStyles =
    "bg-gray-200 px-3 rounded-sm cursor-pointer hover:bg-gray-300";
  return (
    <div className="flex gap-2">
      <button
        className={
          currPage == 1
            ? ` ${btnStyles} opacity-50 pointer-events-none `
            : btnStyles
        }
        onClick={() => {
          if (currPage > 1) setCurrPage(currPage - 1);
        }}
      >
        Prev
      </button>
      {currPage >= 4 ? (
        <>
          <button
            className={btnStyles}
            onClick={(e) => {
              setCurrPage(e.target.innerText);
            }}
          >
            1
          </button>
          <p>...</p>
        </>
      ) : null}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, index) =>
          index > currPage - 4 && index < currPage + 2 ? (
            <button
              key={index}
              className={
                index == currPage - 1
                  ? `${btnStyles} bg-violet-500 pointer-events-none`
                  : btnStyles
              }
              onClick={(e) => {
                setCurrPage(e.target.innerText);
              }}
            >
              {index + 1}
            </button>
          ) : null
        )}

        {currPage  > totalPages - 3 ? null : (
          <>
            <p>...</p>
            <button
              className={btnStyles}
              onClick={(e) => {
                setCurrPage(e.target.innerText);
              }}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>
      <button
        className={
          currPage < totalPages
            ? btnStyles
            : `${btnStyles} pointer-events-none opacity-50`
        }
        onClick={() => {
          if (currPage < totalPages) setCurrPage(currPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
