import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What age groups do you accept?",
    a: "We accept children aged 2 to 6 years. Our programs are tailored to each developmental stage.",
  },
  {
    q: "What are the school hours?",
    a: "Regular hours are 8:30 AM to 1:00 PM, Monday through Friday. Extended day care is available until 4:00 PM.",
  },
  {
    q: "What is your teacher-to-student ratio?",
    a: "We maintain a 1:8 ratio for 2-3 year olds and 1:12 for 4-6 year olds, ensuring personalized attention.",
  },
  {
    q: "Do you provide meals and snacks?",
    a: "Yes! We provide a healthy mid-morning snack and a nutritious lunch prepared in our hygienic kitchen.",
  },
  {
    q: "Is transportation available?",
    a: "We offer safe, GPS-tracked school bus service with trained attendants covering most areas of the city.",
  },
  {
    q: "How can I track my child's progress?",
    a: "Parents receive weekly activity reports and have access to our parent portal for photos, updates, and communication with teachers.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <h2 className="section-title text-foreground">
        Frequently Asked <span className="text-primary">Questions</span> ❓
      </h2>
      <p className="section-subtitle">
        Everything you need to know before joining our family.
      </p>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-2xl px-6 border border-border shadow-sm"
          >
            <AccordionTrigger className="font-heading font-bold text-foreground text-left hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-muted-foreground pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
