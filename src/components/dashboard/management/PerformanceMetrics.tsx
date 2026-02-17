
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface PerformanceMetricsProps {
    score: number;
    deadlineAdherence: number;
    productivityTrend: number;
}

export function PerformanceMetrics({ score, deadlineAdherence, productivityTrend }: PerformanceMetricsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Overall organizational health</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                        <div className="text-sm font-medium">Team Performance Score</div>
                        <div className="text-2xl font-bold">{score}/100</div>
                    </div>
                    <div className={`flex items-center text-sm ${score >= 80 ? 'text-green-500' : 'text-yellow-500'}`}>
                        {score >= 80 ? <ArrowUpRight className="mr-1 h-4 w-4" /> : <ArrowDownRight className="mr-1 h-4 w-4" />}
                        {score >= 80 ? 'Good' : 'Needs Attention'}
                    </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                        <div className="text-sm font-medium">Deadline Adherence</div>
                        <div className="text-2xl font-bold">{deadlineAdherence}%</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                        On-time completion rate
                    </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                        <div className="text-sm font-medium">Productivity Trend</div>
                        <div className="text-2xl font-bold">{productivityTrend > 0 ? '+' : ''}{productivityTrend}%</div>
                    </div>
                    <div className={`flex items-center text-sm ${productivityTrend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        vs. last week
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
