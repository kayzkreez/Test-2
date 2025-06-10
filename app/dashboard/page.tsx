"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Clock, CheckCircle, AlertCircle, Plus, RefreshCw } from "lucide-react"
import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { TransactionList } from "@/components/transaction-list"
import { AccountDetails } from "@/components/account-details"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for demonstration
  const recentTransactions = [
    {
      id: "TX123456",
      date: "2025-06-08",
      amount: 200,
      status: "completed",
      recipient: "Rahul Sharma",
    },
    {
      id: "TX123455",
      date: "2025-06-05",
      amount: 150,
      status: "processing",
      recipient: "Priya Patel",
    },
    {
      id: "TX123454",
      date: "2025-06-01",
      amount: 300,
      status: "completed",
      recipient: "Amit Kumar",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px]">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <Button asChild>
                <Link href="/dashboard/send-money">
                  <Plus className="mr-2 h-4 w-4" /> Send Money
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$650.00</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Transfers</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1</div>
                    <p className="text-xs text-muted-foreground">Processing within 24 hours</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completed Transfers</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">All transfers completed successfully</p>
                  </CardContent>
                </Card>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="transactions">Transactions</TabsTrigger>
                  <TabsTrigger value="account">Account Details</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription>Your recent money transfers and their status.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <TransactionList transactions={recentTransactions} />
                      <div className="mt-4 flex justify-center">
                        <Button variant="outline" asChild>
                          <Link href="/dashboard/transactions">View All Transactions</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <Button asChild variant="outline" className="h-auto flex-col gap-2 p-4">
                          <Link href="/dashboard/send-money">
                            <Plus className="h-5 w-5" />
                            <span>New Transfer</span>
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-auto flex-col gap-2 p-4">
                          <Link href="/dashboard/transactions">
                            <RefreshCw className="h-5 w-5" />
                            <span>Track Transfer</span>
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-auto flex-col gap-2 p-4">
                          <Link href="/dashboard/support">
                            <AlertCircle className="h-5 w-5" />
                            <span>Get Support</span>
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="transactions">
                  <Card>
                    <CardHeader>
                      <CardTitle>All Transactions</CardTitle>
                      <CardDescription>A complete history of your money transfers.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <TransactionList transactions={recentTransactions} showAll />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="account">
                  <AccountDetails />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
