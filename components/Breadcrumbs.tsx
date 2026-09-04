import Link from "next/link";
import { ChevronRightIcon } from "@/lib/icons";

type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cream-100/70">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-gold-400">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-gold-400">
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRightIcon className="h-3 w-3" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
