import styles from "./ItemIndex.module.scss";

function IndexButtons({ prevDisabled, nextDisabled, paginationDispatch }) {
  return (
    <div className={styles.buttonContainer}>
      <button
        aria-label="previous page"
        className={styles.paginationButton}
        style={{ display: prevDisabled ? "none" : "block" }}
        onClick={() => paginationDispatch({ type: "PREV_PAGE" })}
      >
        <svg width="48px" height="48px" viewBox="0 0 48 48">
          <title>arrow-left</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Catalog-p2" transform="translate(-1200.000000, -512.000000)">
              <g id="menu" transform="translate(132.000000, 512.000000)">
                <g id="arrow-left" transform="translate(1068.000000, 0.000000)">
                  <g id="Group-15">
                    <circle
                      id="Oval-4"
                      stroke="#D9D9D9"
                      cx="24"
                      cy="24"
                      r="23.5"
                    ></circle>
                    <polygon
                      id="Shape"
                      fill="#D9D9D9"
                      transform="translate(24.000000, 23.705000) rotate(-270.000000) translate(-24.000000, -23.705000) "
                      points="28.59 20 24 24.58 19.41 20 18 21.41 24 27.41 30 21.41"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
      <button
        aria-label="next page"
        className={styles.paginationButton}
        style={{ display: nextDisabled ? "none" : "block" }}
        onClick={() => paginationDispatch({ type: "NEXT_PAGE" })}
      >
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 48 48"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>arrow-up</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Catalog-p2" transform="translate(-1260.000000, -512.000000)">
              <g id="menu" transform="translate(132.000000, 512.000000)">
                <g
                  id="arrow-right"
                  transform="translate(1128.000000, 0.000000)"
                >
                  <circle
                    id="Oval-4"
                    stroke="#D9D9D9"
                    stroke-width="1"
                    cx="24"
                    cy="24"
                    r="23.5"
                  ></circle>
                  <polygon
                    id="Shape"
                    fill="#D9D9D9"
                    fill-rule="evenodd"
                    transform="translate(24.000000, 23.705000) scale(1, -1) rotate(-90.000000) translate(-24.000000, -23.705000) "
                    points="28.59 20 24 24.58 19.41 20 18 21.41 24 27.41 30 21.41"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default IndexButtons;
