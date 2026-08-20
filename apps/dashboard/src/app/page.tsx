import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Logo } from "@workspace/ui/components/logo";

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto rounded-none">
      {/* Hero Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 rounded-none">
        <div className="flex items-center gap-4 rounded-none">
          <Logo className="size-10 shrink-0" />
          <div className="rounded-none">
            <h1 className="text-3xl font-bold tracking-tight font-mono">Dyzulk Dashboard</h1>
            <p className="text-muted-foreground text-sm">Enterprise client workspace and active services node monitor.</p>
          </div>
        </div>
        <Button className="rounded-none tracking-wide font-mono">NEW CLUSTERS</Button>
      </div>

      {/* Main Stats Grid */}
      <div className="grid gap-6 md:grid-cols-3 rounded-none">
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
          <CardContent className="rounded-none font-mono">
            <p className="text-2xl font-bold">$12,450.00</p>
            <p className="text-xs text-muted-foreground mt-1">+4.3% from last week</p>
          </CardContent>
        </Card>

        <Card className="rounded-none">
          <CardHeader className="rounded-none">
            <CardTitle className="rounded-none">System Status</CardTitle>
            <CardDescription className="rounded-none">All services operational</CardDescription>
          </CardHeader>
          <CardContent className="rounded-none font-mono">
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">99.98%</p>
            <p className="text-xs text-muted-foreground mt-1">Uptime monitored live</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

