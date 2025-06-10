import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Transaction {
  id: string
  date: string
  amount: number
  status: string
  recipient: string
}

interface TransactionListProps {
  transactions: Transaction[]
  showAll?: boolean
}

export function TransactionList({ transactions, showAll = false }: TransactionListProps) {
  const displayTransactions = showAll ? transactions : transactions.slice(0, 3)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "processing":
        return <Clock className="h-4 w-4 text-amber-500" />
      case "failed":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Completed
          </Badge>
        )
      case "processing":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Processing
          </Badge>
        )
      case "failed":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Failed
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Recipient</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {displayTransactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.id}</TableCell>
            <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
            <TableCell>${transaction.amount.toFixed(2)}</TableCell>
            <TableCell>{transaction.recipient}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {getStatusIcon(transaction.status)}
                {getStatusBadge(transaction.status)}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
