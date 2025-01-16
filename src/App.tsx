import { useState } from 'react'
import { Button } from "/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card"
import { Input } from "/components/ui/input"
import { Label } from "/components/ui/label"
import { RadioGroup, RadioGroupItem } from "/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState<{ amount: number, type: string, description: string, date: string }[]>([])
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('debit')
  const [description, setDescription] = useState('')
  const [sortOption, setSortOption] = useState('date')
  const [filterOption, setFilterOption] = useState('all')

  const handleAddExpense = () => {
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount.')
      return
    }

    const newExpense = {
      amount: parseFloat(amount),
      type,
      description,
      date: new Date().toISOString().split('T')[0]
    }

    setExpenses([...expenses, newExpense])
    setAmount('')
    setDescription('')
    alert('Expense added successfully!')
  }

  const handleExport = () => {
    const expensesText = expenses.map(expense => `${expense.date} - ${expense.type.toUpperCase()}: $${expense.amount.toFixed(2)} - ${expense.description}`).join('\n')
    const blob = new Blob([expensesText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'expenses.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sortOption === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortOption === 'amount') {
      return b.amount - a.amount
    } else {
      return 0
    }
  })

  const filteredExpenses = sortedExpenses.filter(expense => {
    if (filterOption === 'all') return true
    return expense.type === filterOption
  })

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
      </header>

      <main className="flex-grow">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add Expense</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <RadioGroup defaultValue="debit" className="mt-2" value={type} onValueChange={setType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="debit" id="debit" />
                    <Label htmlFor="debit">Debit</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit">Credit</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="col-span-full">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div className="col-span-full flex justify-end">
                <Button onClick={handleAddExpense}>Add Expense</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="sort">Sort By</Label>
                <Select value={sortOption} onValueChange={setSortOption} className="mt-2">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="amount">Amount</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="filter">Filter By</Label>
                <Select value={filterOption} onValueChange={setFilterOption} className="mt-2">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="debit">Debit</SelectItem>
                    <SelectItem value="credit">Credit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              {filteredExpenses.map((expense, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg">
                  <div className="font-bold">{expense.date}</div>
                  <div>{expense.type.toUpperCase()}: ${expense.amount.toFixed(2)}</div>
                  <div>{expense.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleExport}>Export to PDF</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}