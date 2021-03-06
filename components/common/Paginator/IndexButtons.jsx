import styles from "./ItemIndex.module.scss";

function IndexButtons({ prevDisabled, nextDisabled, paginationDispatch }) {
  const prevButtonColor = prevDisabled ? "#d9d9d9" : "#616161";
  const nextButtonColor = nextDisabled ? "#d9d9d9" : "#616161";
  return (
    <div className={styles.buttonContainer}>
      <button
        aria-label="previous page"
        className={styles.paginationButton}
        onClick={() => paginationDispatch({ type: "PREV_PAGE" })}
        disabled={prevDisabled}
      >
        <svg width="48px" height="48px" viewBox="0 0 48 48">
          <title>arrow left</title>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="Catalog-p2" transform="translate(-1200.000000, -512.000000)">
              <g id="menu" transform="translate(132.000000, 512.000000)">
                <g id="arrow-left" transform="translate(1068.000000, 0.000000)">
                  <g id="Group-15">
                    <circle
                      id="Oval-4"
                      stroke={prevButtonColor}
                      cx="24"
                      cy="24"
                      r="23.5"
                    ></circle>
                    <polygon
                      id="Shape"
                      fill={prevButtonColor}
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
        onClick={() => paginationDispatch({ type: "NEXT_PAGE" })}
        disabled={nextDisabled}
      >
        <svg width="48px" height="48px" viewBox="0 0 48 48">
          <title>arrow right</title>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="Catalog-p2" transform="translate(-1260.000000, -512.000000)">
              <g id="menu" transform="translate(132.000000, 512.000000)">
                <g
                  id="arrow-right"
                  transform="translate(1128.000000, 0.000000)"
                >
                  <circle
                    id="Oval-4"
                    stroke={nextButtonColor}
                    strokeWidth="1"
                    cx="24"
                    cy="24"
                    r="23.5"
                  ></circle>
                  <polygon
                    id="Shape"
                    fill={nextButtonColor}
                    fillRule="evenodd"
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
