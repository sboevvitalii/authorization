import Link from "next/link";

export function AuthFormLink({
  text,
  linkText,
  url,
}: {
  text: string;
  linkText: string;
  url: string;
}) {
  return (
    <p className="text-sm text-gray-600">
      {text}{" "}
      <Link href={url} className="font-medium text-primary hover:underline">
        {linkText}
      </Link>
    </p>
  );
}
