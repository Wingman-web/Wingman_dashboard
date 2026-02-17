
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Sparkles, Zap, TrendingUp } from 'lucide-react';

export default function AIPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Wingman AI Engine</h1>
                <Button>
                    <Zap className="mr-2 h-4 w-4" />
                    Run Optimization
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-100 dark:border-indigo-900">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Sparkles className="mr-2 h-5 w-5 text-indigo-500" />
                            Daily Insights
                        </CardTitle>
                        <CardDescription>AI-generated executive summary (Today)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                            <li>Team <strong>Engineering</strong> is 15% ahead of schedule on "Core Platform".</li>
                            <li>Client <strong>Acme Corp</strong> has shown a sign of churn risk due to low engagement.</li>
                            <li>Marketing campaign "Winter Promo" is underperforming. Recommendation: Pause.</li>
                            <li>3 new high-value leads identified in the "Finance" sector.</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                            ROI Forecast
                        </CardTitle>
                        <CardDescription>Predicted returns for next quarter</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg">
                            [Interactive Chart Placeholder]
                        </div>
                        <p className="mt-4 text-center text-sm font-medium">
                            Projected Growth: <span className="text-green-600">+18%</span>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
