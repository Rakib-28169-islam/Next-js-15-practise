import Link from "next/link";
export default function Products() {
  return (
    <>
      <h1> Products List </h1>
      <p> This is products page </p>
      <Link href={"/products/1"}>
        <p>product 1</p>
      </Link>
      
      <Link href={"/products/2"}>
        <p>product 2</p>
      </Link>
    </>
  );
}
