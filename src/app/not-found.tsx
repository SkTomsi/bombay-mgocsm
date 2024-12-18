import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        404 - Page Not Found
      </h1>
      <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-mgocsm-orange text-white rounded-md hover:bg-mgocsm-orange/70  transition-colors duration-300"
      >
        Go back home
      </Link>
    </div>
  );
}
