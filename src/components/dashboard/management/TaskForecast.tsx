
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

interface TaskForecastProps {
    completed: number;
    inProgress: number;
    atRisk: number;
}

export function TaskForecast({ completed, inProgress, atRisk }: TaskForecastProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Task Completion Forecast</CardTitle>
                <CardDescription>Real-time status overview</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-green-50 dark:bg-green-900/10">
                    <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
                    <div className="text-2xl font-bold">{completed}</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/10">
                    <Clock className="h-8 w-8 text-blue-500 mb-2" />
                    <div className="text-2xl font-bold">{inProgress}</div>
                    <div className="text-xs text-muted-foreground">In Progress</div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-red-50 dark:bg-red-900/10">
                    <AlertTriangle className="h-8 w-8 text-red-500 mb-2" />
                    <div className="text-2xl font-bold">{atRisk}</div>
                    <div className="text-xs text-muted-foreground">At Risk (AI Flagged)</div>
                </div>
            </CardContent>
        </Card>
    );
}
