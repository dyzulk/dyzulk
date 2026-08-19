import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-6 max-w-5xl mx-auto rounded-none">
      <div className="flex justify-between items-center rounded-none">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your client workspace dashboard.</p>
        </div>
        <Button className="rounded-none">New Action</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 rounded-none">
        <Card className="rounded-none">
          <CardHeader className="rounded-none">
            <CardTitle className="rounded-none">Analytics Overview</CardTitle>
            <CardDescription className="rounded-none">Monthly active client sessions</CardDescription>
          </CardHeader>
          <CardContent className="rounded-none">
            <p className="text-2xl font-bold">1,280</p>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="rounded-none">
          <CardHeader className="rounded-none">
            <CardTitle className="rounded-none">Total Revenue</CardTitle>
            <CardDescription className="rounded-none">Payments processed through Render</CardDescription>
          </CardHeader>
          <CardContent className="rounded-none">
            <p className="text-2xl font-bold">$12,450.00</p>
            <p className="text-xs text-muted-foreground mt-1">+4.3% from last week</p>
          </CardContent>
        </Card>

        <Card className="rounded-none">
          <CardHeader className="rounded-none">
            <CardTitle className="rounded-none">System Status</CardTitle>
            <CardDescription className="rounded-none">All services operational</CardDescription>
          </CardHeader>
          <CardContent className="rounded-none">
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">99.98%</p>
            <p className="text-xs text-muted-foreground mt-1">Uptime monitored live</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
