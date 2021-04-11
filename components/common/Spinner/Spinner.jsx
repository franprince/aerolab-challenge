import Image from "next/image";

function Spinner({ size }) {
  return (
    <Image width={size} height={size} src="/spinner.gif" alt="loading data" />
  );
}

export default Spinner;
