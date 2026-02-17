
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon, Sparkles, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function SearchPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center justify-center space-y-4 min-h-[40vh]">
                <h1 className="text-4xl font-bold tracking-tight text-center">
                    Ask Wingman Anything
                </h1>
                <p className="text-muted-foreground text-center max-w-lg">
                    Search across tasks, clients, and leads, or ask AI for performance insights.
                </p>

                <div className="flex w-full max-w-2xl items-center space-x-2">
                    <Input
                        className="h-12 shadow-lg"
                        placeholder="e.g., 'Which team is falling behind?' or 'Show me high ROI campaigns'"
                    />
                    <Button size="lg" className="h-12 px-6">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Ask AI
                    </Button>
                </div>

                <div className="flex gap-2 mt-4 text-sm text-muted-foreground">
                    <span>Try:</span>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">"Revenue forecast for Q4"</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">"Unassigned high-priority tasks"</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">"Campaign optimization tips"</Badge>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Intelligent Queries</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-2 rounded hover:bg-muted cursor-pointer group">
                                <span className="flex items-center">
                                    <SearchIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                                    "Campaigns with ROI &gt; 3.0"
                                </span>
                                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </li>
                            <li className="flex items-center justify-between p-2 rounded hover:bg-muted cursor-pointer group">
                                <span className="flex items-center">
                                    <SearchIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                                    "Employee performance marketing team"
                                </span>
                                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
