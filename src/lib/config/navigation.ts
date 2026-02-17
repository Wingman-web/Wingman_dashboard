
import {
    LayoutDashboard,
    Users,
    Target,
    Megaphone,
    Search,
    Bot,
    PieChart
} from 'lucide-react';
import { Role } from '@/lib/types';

export interface NavItem {
    title: string;
    href: string;
    icon: any;
    roles: Role[];
}

export const navItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/',
        icon: LayoutDashboard,
        roles: ['management', 'head', 'employee'],
    },
    {
        title: 'Clients',
        href: '/clients', // Updated path
        icon: Users,
        roles: ['management', 'employee'],
    },
    {
        title: 'Task Management',
        href: '/tasks', // Updated path
        icon: Target,
        roles: ['management', 'head', 'employee'],
    },
    {
        title: 'Leads',
        href: '/leads', // Updated path
        icon: PieChart,
        roles: ['management'],
    },
    {
        title: 'Marketing',
        href: '/marketing', // Updated path
        icon: Megaphone,
        roles: ['management'],
    },
    {
        title: 'Search',
        href: '/search', // Updated path
        icon: Search,
        roles: ['management', 'employee'],
    },
    {
        title: 'Wingman AI',
        href: '/ai',
        icon: Bot,
        roles: ['management', 'head', 'employee'],
    },
];
