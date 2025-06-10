import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "Mula Wave has made it so easy to send money back home. The rates are great and the service is fast!",
      author: "Tendai M.",
      role: "Student at Mumbai University",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: "I used to struggle with bank transfers and high fees. Mula Wave solved all those problems for me.",
      author: "Chipo R.",
      role: "PhD Student in Delhi",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: "The customer service is excellent. They helped me track my transfer when I was worried about it.",
      author: "Farai T.",
      role: "Medical Student in Bangalore",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from students who use Mula Wave for their money transfer needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-purple-500 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
