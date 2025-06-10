"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Upload, Check } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    passportNumber: "",
    selfie: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, selfie: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    console.log("Form submitted:", formData)
    // Redirect to dashboard or verification page
    window.location.href = "/dashboard"
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>Start sending money to India in just a few steps.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="register" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="register">Register</TabsTrigger>
                <TabsTrigger value="login">
                  <Link href="/login" className="w-full h-full flex items-center justify-center">
                    Login
                  </Link>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="register">
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+263 123 456 789"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <Button type="button" className="w-full" onClick={() => setStep(2)}>
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="passportNumber">Passport Number</Label>
                        <Input
                          id="passportNumber"
                          name="passportNumber"
                          placeholder="Enter your passport number"
                          required
                          value={formData.passportNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="selfie">Upload Selfie</Label>
                        <div className="border-2 border-dashed rounded-md p-4 text-center">
                          <Upload className="mx-auto h-8 w-8 text-gray-400" />
                          <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                          <Input
                            id="selfie"
                            name="selfie"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                            required
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            onClick={() => document.getElementById("selfie").click()}
                          >
                            Select File
                          </Button>
                          {formData.selfie && (
                            <div className="mt-2 flex items-center text-sm text-green-600">
                              <Check className="mr-1 h-4 w-4" />
                              File selected: {formData.selfie.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                          Back
                        </Button>
                        <Button type="submit" className="flex-1">
                          Create Account
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center space-y-2">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our{" "}
              <Link href="/terms-of-service" className="text-purple-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-purple-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
