"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { BanknoteIcon as Bank, Smartphone } from "lucide-react"

export function AccountDetails() {
  const [activeTab, setActiveTab] = useState("india")
  const [paymentMethod, setPaymentMethod] = useState("bank")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recipient Account Details</CardTitle>
        <CardDescription>Manage your recipient account information for money transfers.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="india">India Account</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          <TabsContent value="india" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label>Payment Method</Label>
                <RadioGroup
                  defaultValue="bank"
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-2 gap-4 pt-2"
                >
                  <div>
                    <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
                    <Label
                      htmlFor="bank"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Bank className="mb-3 h-6 w-6" />
                      Bank Account
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="mobile" id="mobile" className="peer sr-only" />
                    <Label
                      htmlFor="mobile"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Smartphone className="mb-3 h-6 w-6" />
                      Mobile Wallet
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {paymentMethod === "bank" ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="accountName">Account Holder Name</Label>
                      <Input id="accountName" placeholder="Full name as per bank records" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bankName">Bank Name</Label>
                      <Input id="bankName" placeholder="e.g. State Bank of India" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input id="accountNumber" placeholder="Enter account number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ifscCode">IFSC Code</Label>
                      <Input id="ifscCode" placeholder="e.g. SBIN0001234" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bankBranch">Branch Address</Label>
                    <Input id="bankBranch" placeholder="Bank branch location" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="walletName">Wallet Provider</Label>
                      <Input id="walletName" placeholder="e.g. Paytm, PhonePe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="walletNumber">Mobile Number</Label>
                      <Input id="walletNumber" placeholder="e.g. +91 9876543210" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="walletId">UPI ID (if applicable)</Label>
                    <Input id="walletId" placeholder="e.g. name@upi" />
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="security" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPin">Current PIN</Label>
                <Input id="currentPin" type="password" placeholder="Enter current PIN" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPin">New PIN</Label>
                <Input id="newPin" type="password" placeholder="Enter new PIN" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPin">Confirm New PIN</Label>
                <Input id="confirmPin" type="password" placeholder="Confirm new PIN" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Save Changes</Button>
      </CardFooter>
    </Card>
  )
}
