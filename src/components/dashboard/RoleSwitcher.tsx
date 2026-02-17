
'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { useRole } from '@/lib/contexts/RoleContext';
import { Badge } from '@/components/ui/badge';
import { ShieldAlert } from 'lucide-react';

export function RoleSwitcher() {
    const { role, setRole } = useRole();

    return (
        <div className="flex items-center space-x-2 mr-4">
            <Badge variant="outline" className="hidden md:flex">
                <ShieldAlert className="mr-1 h-3 w-3" /> Demo Mode
            </Badge>
            <Select value={role} onValueChange={(v: any) => setRole(v)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="management">Higher Management</SelectItem>
                    <SelectItem value="head">Department Head</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
