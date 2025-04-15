'use client';

import { cn } from '@/lib/utils';
import { User, Code, Briefcase, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function FloatingNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'About', icon: User },
    { href: '/skills', label: 'Skills', icon: Code },
    { href: '/projects', label: 'Projects', icon: Briefcase },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed left-[calc(1.5/3.5*100%)] bottom-4 sm:bottom-8 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 shadow-lg px-2 py-1.5 sm:px-4 sm:py-2 animate-fade-up">
      <ul className="flex items-center gap-0.5 sm:gap-2">
        {navItems.map(({ href, label, icon: Icon }) => (
          <li key={href}>            <Link
                href={href}
                className={cn(
                  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-9 w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300",
                  pathname === href
                    ? "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
                    : "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
                )}
              >
                <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="sr-only">{label}</span>
              </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
