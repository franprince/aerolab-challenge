function Spinner({ maxWidth }) {
  return (
    <div>
      <img
        style={{ maxWidth: `${maxWidth}px` }}
        src="/spinner.gif"
        alt="loading data"
      />
    </div>
  );
}

export default Spinner;
