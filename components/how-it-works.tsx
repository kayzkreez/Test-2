import { ArrowRight, UserPlus, CreditCard, FileText, CheckCircle } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Mula Wave Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Send money from Zimbabwe to India in just a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-full">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="h-6 w-6 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Register</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create an account with your passport, email, phone number, and a selfie.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-full">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Create Order</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Specify the amount to send and get an order number with calculated fees and exchange rate.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-full">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Make Payment</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deposit cash or use EcoCash with your order number as reference.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-full">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-purple-700 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Receive Money</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The recipient gets the money in their bank account or mobile wallet in Indian Rupees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
