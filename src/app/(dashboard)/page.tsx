
'use client';

import { TeamProgress } from '@/components/dashboard/management/TeamProgress';
import { TaskForecast } from '@/components/dashboard/management/TaskForecast';
import { PerformanceMetrics } from '@/components/dashboard/management/PerformanceMetrics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const MOCK_TEAMS = [
    { name: 'Engineering', progress: 75, tasksCompleted: 45, totalTasks: 60, aiprediction: 'Oct 24', status: 'on_track' as const },
    { name: 'Marketing', progress: 40, tasksCompleted: 12, totalTasks: 30, aiprediction: 'Nov 02', status: 'delayed' as const },
    { name: 'Design', progress: 90, tasksCompleted: 27, totalTasks: 30, aiprediction: 'Oct 20', status: 'on_track' as const },
];

export default function ManagementDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Executive Overview</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" className="hidden sm:flex">
                        Download Report
                    </Button>
                    <Button>
                        <Sparkles className="mr-2 h-4 w-4" />
                        AI Insights
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                    <TeamProgress teams={MOCK_TEAMS} />
                </div>
                <div className="col-span-3 space-y-6">
                    <TaskForecast completed={84} inProgress={42} atRisk={7} />
                    <PerformanceMetrics score={88} deadlineAdherence={92} productivityTrend={5.4} />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>AI Task Assignment Suggestions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="border p-4 rounded-lg flex justify-between items-center">
                                <div className="space-y-1">
                                    <p className="font-medium">Backend API Refactor</p>
                                    <p className="text-xs text-muted-foreground">High Complexity • Due in 2 days</p>
                                </div>
                                <Button size="sm" variant="secondary">
                                    <Sparkles className="mr-2 h-3 w-3" />
                                    Assign to Alex
                                </Button>
                            </div>
                            <div className="border p-4 rounded-lg flex justify-between items-center">
                                <div className="space-y-1">
                                    <p className="font-medium">Q4 Marketing Campaign</p>
                                    <p className="text-xs text-muted-foreground">Medium Complexity • Due in 5 days</p>
                                </div>
                                <Button size="sm" variant="secondary">
                                    <Sparkles className="mr-2 h-3 w-3" />
                                    Assign to Sarah
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2">
                                <span className="h-2 w-2 mt-2 rounded-full bg-red-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium">Marketing Team at risk of missing deadline</p>
                                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium">New high-value lead detected: TechCorp Inc.</p>
                                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
