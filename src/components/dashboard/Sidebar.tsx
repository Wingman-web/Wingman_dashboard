
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/config/navigation';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useRole } from '@/lib/contexts/RoleContext';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname();
    const { role } = useRole();

    return (
        <div className={cn('pb-12 w-64 border-r bg-background hidden md:block', className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Wingman Dashboard
                    </h2>
                    <div className="space-y-1">
                        {navItems.map((item) => {
                            if (!item.roles.includes(role)) return null;

                            const Icon = item.icon;
                            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                            return (
                                <Button
                                    key={item.href}
                                    variant={isActive ? 'secondary' : 'ghost'}
                                    className="w-full justify-start"
                                    asChild
                                >
                                    <Link href={item.href}>
                                        <Icon className="mr-2 h-4 w-4" />
                                        {item.title}
                                    </Link>
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
