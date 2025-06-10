"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Send, Clock, CreditCard, User, Settings, HelpCircle, LogOut } from "lucide-react"

export function DashboardNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      icon: Home,
      label: "Dashboard",
      exact: true,
    },
    {
      href: "/dashboard/send-money",
      icon: Send,
      label: "Send Money",
    },
    {
      href: "/dashboard/transactions",
      icon: Clock,
      label: "Transactions",
    },
    {
      href: "/dashboard/payment-methods",
      icon: CreditCard,
      label: "Payment Methods",
    },
    {
      href: "/dashboard/profile",
      icon: User,
      label: "Profile",
    },
    {
      href: "/dashboard/settings",
      icon: Settings,
      label: "Settings",
    },
    {
      href: "/dashboard/support",
      icon: HelpCircle,
      label: "Support",
    },
  ]

  return (
    <nav className="grid items-start gap-2 py-4">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary",
            {
              "bg-muted": route.exact ? pathname === route.href : pathname?.startsWith(route.href),
              "text-primary": route.exact ? pathname === route.href : pathname?.startsWith(route.href),
              "text-muted-foreground": !(route.exact ? pathname === route.href : pathname?.startsWith(route.href)),
            },
          )}
        >
          <route.icon className="h-4 w-4" />
          {route.label}
        </Link>
      ))}
      <Link
        href="/logout"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-primary mt-auto"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Link>
    </nav>
  )
}
