import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex flex-row gap-4 ">
      <Link href="/">Home</Link>
    </header>
  );
}
