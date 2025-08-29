import Image from "next/image";

export default function Home({params, searchParams}) {
  const {name} = searchParams;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-grey-200 rounded-xl shadow bg-white dark:bg-gray-900 dark:border-gray-800">
      <h1>Hello {name || "world"}</h1>
      <a href="/vat">👉🏼 Click here for VAT App 👈🏼</a>
    </div>
  );
}
