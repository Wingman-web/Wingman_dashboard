
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle2, Circle, Clock, MoreHorizontal, Plus } from 'lucide-react';
import { TaskStatus, TaskPriority } from '@/lib/types';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock Tasks
const TASKS = [
    { id: 1, title: 'Redesign Landing Page', status: 'in_progress', priority: 'high', assignee: 'Alex', due: 'Oct 25' },
    { id: 2, title: 'Database Migration', status: 'todo', priority: 'urgent', assignee: 'Sam', due: 'Oct 28' },
    { id: 3, title: 'Client Meeting Prep', status: 'done', priority: 'medium', assignee: 'Jordan', due: 'Oct 20' },
    { id: 4, title: 'Q4 Budget Review', status: 'review', priority: 'high', assignee: 'Casey', due: 'Oct 26' },
    { id: 5, title: 'Fix Auth Bug', status: 'todo', priority: 'medium', assignee: 'Alex', due: 'Oct 29' },
];

export default function TasksPage() {
    const [view, setView] = useState('board');

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Task Management</h1>
                    <p className="text-muted-foreground">Manage ongoing work and track progress.</p>
                </div>
                <div className="flex space-x-2">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        New Task
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="board" className="space-y-4">
                <div className="flex justify-between items-center">
                    <TabsList>
                        <TabsTrigger value="board">Kanban Board</TabsTrigger>
                        <TabsTrigger value="list">List View</TabsTrigger>
                    </TabsList>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>Filter:</span>
                        <Badge variant="outline" className="cursor-pointer">My Tasks</Badge>
                        <Badge variant="outline" className="cursor-pointer">Team Tasks</Badge>
                    </div>
                </div>

                <TabsContent value="board" className="grid gap-6 md:grid-cols-4">
                    {['todo', 'in_progress', 'review', 'done'].map((status) => (
                        <div key={status} className="space-y-4">
                            <div className="font-semibold capitalize flex items-center justify-between">
                                {status.replace('_', ' ')}
                                <Badge variant="secondary">{TASKS.filter(t => t.status === status).length}</Badge>
                            </div>
                            <div className="space-y-3">
                                {TASKS.filter(t => t.status === status).map((task) => (
                                    <Card key={task.id} className="cursor-pointer hover:shadow-md transition-shadow">
                                        <CardHeader className="p-4 pb-2 space-y-0">
                                            <div className="flex justify-between items-start">
                                                <Badge
                                                    variant={task.priority === 'urgent' ? 'destructive' : 'outline'}
                                                    className="uppercase text-[10px]"
                                                >
                                                    {task.priority}
                                                </Badge>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-6 w-6">
                                                            <MoreHorizontal className="h-3 w-3" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                                        <DropdownMenuItem>Reassign</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                            <CardTitle className="text-sm font-medium pt-2">{task.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-4 pt-2">
                                            <div className="flex justify-between items-center text-xs text-muted-foreground mt-2">
                                                <div className="flex items-center">
                                                    <Calendar className="mr-1 h-3 w-3" />
                                                    {task.due}
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold">
                                                        {task.assignee[0]}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </TabsContent>
                <TabsContent value="list">
                    <Card>
                        <CardContent>
                            <div className="p-4 text-center text-muted-foreground">List View Implementation Pending</div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
