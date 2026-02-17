export const dynamic = 'force-dynamic'

import { Header } from '@/components/dashboard/Header';
import { Sidebar } from '@/components/dashboard/Sidebar';

import { RoleProvider } from '@/lib/contexts/RoleContext';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RoleProvider>
            <div className="flex h-screen overflow-hidden">
                <Sidebar className="hidden md:block w-64" />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-auto bg-background p-4 md:p-8">
                        {children}
                    </main>
                </div>
            </div>
        </RoleProvider>
    );
}
