
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Phone, Mail, Linkedin, Facebook, MessageSquare, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const LEADS = [
    { id: 1, name: 'John Doe', company: 'TechFlow', source: 'LinkedIn', status: 'New', score: 85, bestTime: '2:00 PM' },
    { id: 2, name: 'Sarah Smith', company: 'Creative Co', source: 'Facebook', status: 'Contacted', score: 60, bestTime: '10:00 AM' },
    { id: 3, name: 'Mike Johnson', company: 'Logiistics', source: 'Website', status: 'Converted', score: 95, bestTime: '4:00 PM' },
    { id: 4, name: 'Emily Davis', company: 'Marketing Pros', source: 'LinkedIn', status: 'New', score: 78, bestTime: '11:00 AM' },
];

export default function LeadsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Lead Generation</h1>
                <Button>
                    <Phone className="mr-2 h-4 w-4" />
                    Auto AI Dialing
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">Total Leads Collected</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,240</div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Linkedin className="h-3 w-3 mr-1" /> 45% LinkedIn
                            <Facebook className="h-3 w-3 mx-1" /> 30% Facebook
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4.8%</div>
                        <p className="text-xs text-muted-foreground">Top of funnel efficiency</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">AI Scheduled Calls</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">28</div>
                        <p className="text-xs text-muted-foreground">Pending for today</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Recent Leads</CardTitle>
                        <CardDescription>AI-scored leads prioritized for follow-up.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Company</TableHead>
                                    <TableHead>Source</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>AI Score</TableHead>
                                    <TableHead>Best Time to Call</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {LEADS.map((lead) => (
                                    <TableRow key={lead.id}>
                                        <TableCell className="font-medium">{lead.name}</TableCell>
                                        <TableCell>{lead.company}</TableCell>
                                        <TableCell>{lead.source}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{lead.status}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <span className={lead.score > 80 ? 'text-green-600 font-bold' : 'text-yellow-600'}>
                                                {lead.score}
                                            </span>
                                        </TableCell>
                                        <TableCell className="flex items-center">
                                            <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                                            {lead.bestTime}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>AI Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-3 rounded-lg border border-blue-100 dark:border-blue-900">
                            <h4 className="font-semibold text-sm mb-1 text-blue-800 dark:text-blue-300">Optimal Contact Time</h4>
                            <p className="text-xs text-muted-foreground">
                                Based on recent interactions, contacts in the "Tech" sector are most responsive between 2 PM and 4 PM.
                            </p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/10 p-3 rounded-lg border border-purple-100 dark:border-purple-900">
                            <h4 className="font-semibold text-sm mb-1 text-purple-800 dark:text-purple-300">Follow-up Suggestion</h4>
                            <p className="text-xs text-muted-foreground">
                                You have 5 leads from "Real Estate" pending follow-up for 3+ days.
                            </p>
                            <Button size="sm" variant="link" className="px-0 pt-2 h-auto text-purple-600">
                                Auto-draft emails
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
