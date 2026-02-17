
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DollarSign, BarChart3, TrendingUp, AlertTriangle } from 'lucide-react';

const CAMPAIGNS = [
    { id: 1, name: 'Q4 Product Launch', platform: 'Facebook', budget: 5000, spend: 3200, roi: 2.4, status: 'Active' },
    { id: 2, name: 'Brand Awareness', platform: 'LinkedIn', budget: 10000, spend: 8500, roi: 1.8, status: 'Active' },
    { id: 3, name: 'Retargeting Alpha', platform: 'Google Ads', budget: 2000, spend: 400, roi: 4.5, status: 'Active' },
    { id: 4, name: 'Winter Promo', platform: 'Instagram', budget: 3000, spend: 2900, roi: 0.9, status: 'Paused' },
];

export default function MarketingPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Marketing & Spend</h1>
                <Button variant="default">
                    Create Campaign
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Ad Spend</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$15,000</div>
                        <p className="text-xs text-muted-foreground">Last 30 days</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg. ROI</CardTitle>
                        <TrendingUp className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2.4x</div>
                        <p className="text-xs text-muted-foreground">+0.2x from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Impressions</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">450k</div>
                        <p className="text-xs text-muted-foreground">Across all platforms</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Optimization Alerts</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-muted-foreground">Campaigns needing attention</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Active Campaigns</CardTitle>
                        <CardDescription>Real-time performance tracking.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Campaign Name</TableHead>
                                    <TableHead>Platform</TableHead>
                                    <TableHead>Budget</TableHead>
                                    <TableHead>Spend</TableHead>
                                    <TableHead>ROI</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {CAMPAIGNS.map((campaign) => (
                                    <TableRow key={campaign.id}>
                                        <TableCell className="font-medium">{campaign.name}</TableCell>
                                        <TableCell>{campaign.platform}</TableCell>
                                        <TableCell>${campaign.budget}</TableCell>
                                        <TableCell>${campaign.spend}</TableCell>
                                        <TableCell className={campaign.roi >= 2 ? 'text-green-600 font-bold' : campaign.roi < 1 ? 'text-red-600' : 'text-yellow-600'}>
                                            {campaign.roi}x
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>{campaign.status}</Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Wingman Advice</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-950/20 text-sm">
                            <div className="flex items-center font-semibold text-red-700 dark:text-red-400 mb-2">
                                <AlertTriangle className="mr-2 h-4 w-4" />
                                Pause "Winter Promo"
                            </div>
                            <p className="text-muted-foreground">
                                ROI has dropped below 1.0x (0.9x) for 3 consecutive days. Recommend reallocating budget to "Retargeting Alpha".
                            </p>
                            <Button size="sm" variant="destructive" className="mt-3 w-full">
                                Pause Campaign
                            </Button>
                        </div>
                        <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950/20 text-sm">
                            <div className="flex items-center font-semibold text-green-700 dark:text-green-400 mb-2">
                                <TrendingUp className="mr-2 h-4 w-4" />
                                Boost "Retargeting Alpha"
                            </div>
                            <p className="text-muted-foreground">
                                Exceptional performance (4.5x ROI). Increasing daily budget by 20% could yield an estimated $5k additional revenue.
                            </p>
                            <Button size="sm" className="mt-3 w-full bg-green-600 hover:bg-green-700">
                                Increase Budget
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
