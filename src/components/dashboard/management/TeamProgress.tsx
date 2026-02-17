
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface TeamProgressProps {
    teams: {
        name: string;
        progress: number;
        tasksCompleted: number;
        totalTasks: number;
        aiprediction: string;
        status: 'on_track' | 'delayed' | 'at_risk';
    }[];
}

export function TeamProgress({ teams }: TeamProgressProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Team Progress Prediction</CardTitle>
                <CardDescription>AI-driven completion forecasting by team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {teams.map((team) => (
                    <div key={team.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <div className="font-medium">{team.name}</div>
                                <div className="text-xs text-muted-foreground">
                                    {team.tasksCompleted}/{team.totalTasks} tasks • Est. {team.aiprediction}
                                </div>
                            </div>
                            <Badge
                                variant={team.status === 'on_track' ? 'default' : team.status === 'delayed' ? 'destructive' : 'secondary'}
                            >
                                {team.status.replace('_', ' ')}
                            </Badge>
                        </div>
                        <Progress value={team.progress} className="h-2" />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
