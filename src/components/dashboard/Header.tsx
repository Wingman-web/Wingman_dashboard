
'use client';

import { MobileSidebar } from './MobileSidebar';
import { UserNav } from './UserNav';
import { RoleSwitcher } from './RoleSwitcher';

export function Header() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <MobileSidebar />
                <div className="ml-auto flex items-center space-x-4">
                    <RoleSwitcher />
                    <UserNav />
                </div>
            </div>
        </div>
    );
}
