import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How long does a transfer take?",
      answer:
        "Most transfers are processed within 24-48 hours after payment confirmation. However, during peak times or weekends, it might take slightly longer.",
    },
    {
      question: "What documents do I need to register?",
      answer:
        "You'll need a valid passport, an email address, a phone number, and a selfie for identity verification purposes.",
    },
    {
      question: "How is the exchange rate calculated?",
      answer:
        "We offer a competitive exchange rate of 87.5 Indian Rupees per US Dollar. This rate is regularly updated based on market conditions.",
    },
    {
      question: "What are the fees for sending money?",
      answer:
        "We charge a flat 5% fee on all transactions. This fee covers all our services including processing and delivery of funds.",
    },
    {
      question: "Can I cancel a transfer after it's been submitted?",
      answer:
        "You can cancel a transfer as long as it hasn't been processed yet. Contact our customer support team immediately if you need to cancel a transfer.",
    },
    {
      question: "How do I track my transfer?",
      answer:
        "You can track your transfer using the order number provided at the time of creating your transfer request. Simply log in to your account and check the status in the 'My Transfers' section.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
