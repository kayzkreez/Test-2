import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Globe, Shield, Clock, CreditCard } from "lucide-react"
import { HowItWorks } from "@/components/how-it-works"
import { TestimonialSection } from "@/components/testimonial-section"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Transfer Money from Zimbabwe to India with Ease
              </h1>
              <p className="text-lg md:text-xl text-gray-100">
                Mula Wave connects students with affordable, fast, and secure money transfers at just 5% fee and
                competitive exchange rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                  <Link href="/register">Create Account</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Students using Mula Wave"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Mula Wave?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're dedicated to making money transfers simple, affordable, and accessible for all students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Low Fees</h3>
              <p className="text-gray-600">
                Just 5% per transaction with competitive exchange rates of 87.5 rupees per dollar.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Transfers</h3>
              <p className="text-gray-600">
                Quick processing times to ensure your money reaches India as soon as possible.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">
                Advanced security measures to protect your personal and financial information.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Bank Required</h3>
              <p className="text-gray-600">Send and receive money without the need for a traditional bank account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Call to Action */}
      <section className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Send Money?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students already using Mula Wave for their money transfer needs.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
            <Link href="/register">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  )
}
