
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, Download, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock Data
const CLIENTS = [
    { id: 1, name: 'Acme Corp', status: 'Active', revenue: '$150,000', leads: 45, conversion: '32%', roi: '120%' },
    { id: 2, name: 'Global Tech', status: 'Active', revenue: '$85,000', leads: 22, conversion: '28%', roi: '95%' },
    { id: 3, name: 'Stark Ind.', status: 'Review', revenue: '$320,000', leads: 89, conversion: '45%', roi: '210%' },
    { id: 4, name: 'Wayne Ent.', status: 'Active', revenue: '$500,000', leads: 120, conversion: '38%', roi: '180%' },
];

export default function ClientIntelligencePage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Client Intelligence</h1>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export Report
                    </Button>
                    <Button>
                        <TrendingUp className="mr-2 h-4 w-4" />
                        AI Forecast
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Active Clients</CardTitle>
                        <TrendingUp className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">124</div>
                        <p className="text-xs text-muted-foreground">+12% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <span className="h-4 w-4 text-muted-foreground">$</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$1,250,500</div>
                        <p className="text-xs text-muted-foreground">+8% month over month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg. ROI per Client</CardTitle>
                        <TrendingUp className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">145%</div>
                        <p className="text-xs text-muted-foreground">Top 10% industry benchmark</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">AI Churn Risk</CardTitle>
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Clients flagged at high risk</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Client Portfolio</CardTitle>
                    <CardDescription>Performance breakdown by client account.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Client Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Total Revenue</TableHead>
                                <TableHead>Leads Generated</TableHead>
                                <TableHead>Conversion Rate</TableHead>
                                <TableHead>ROI</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {CLIENTS.map((client) => (
                                <TableRow key={client.id}>
                                    <TableCell className="font-medium">{client.name}</TableCell>
                                    <TableCell>
                                        <Badge variant={client.status === 'Active' ? 'default' : 'secondary'}>
                                            {client.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{client.revenue}</TableCell>
                                    <TableCell>{client.leads}</TableCell>
                                    <TableCell>{client.conversion}</TableCell>
                                    <TableCell className="text-green-600 font-bold">{client.roi}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
