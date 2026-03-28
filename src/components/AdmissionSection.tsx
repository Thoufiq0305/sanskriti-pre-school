import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const admissionSchema = z.object({
  studentName: z.string().trim().min(1, "Student name is required").max(100),
  parentName: z.string().trim().min(1, "Parent name is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").regex(/^\+?[\d\s\-()]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  age: z.string().trim().min(1, "Age is required"),
  message: z.string().trim().max(500).optional(),
});

type FormData = z.infer<typeof admissionSchema>;

const AdmissionSection = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit = async (data: FormData) => {
  try {
    setStatus("idle");

    await emailjs.send(
      "service_7absf1g",
      "template_yvhbv97",
      {
        studentName: data.studentName,
        parentName: data.parentName,
        phone: data.phone,
        email: data.email,
        age: data.age,
        message: data.message || "No message",
      },
      "jAwRQonBGzmbvzvS3"
    );

    setStatus("success");
    reset();

    setTimeout(() => setStatus("idle"), 5000);
  } catch (error) {
    console.error(error);
    setStatus("error");
    setTimeout(() => setStatus("idle"), 5000);
  }
};

  return (
    <section id="admissions" className="section-padding bg-sky/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-foreground">
          <span className="text-primary">Admissions</span> Open 🎒
        </h2>
        <p className="section-subtitle">
          Join our family! Fill out the form below and we'll get back to you within 24 hours.
        </p>

        {status === "success" && (
          <div className="mb-6 flex items-center gap-3 p-4 rounded-2xl bg-mint text-mint-foreground font-semibold">
            <CheckCircle className="w-5 h-5 shrink-0" />
            Application submitted successfully! We'll contact you soon.
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 flex items-center gap-3 p-4 rounded-2xl bg-destructive/10 text-destructive font-semibold">
            <AlertCircle className="w-5 h-5 shrink-0" />
            Something went wrong. Please try again later.
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card rounded-3xl p-6 md:p-10 shadow-sm space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Student Name" error={errors.studentName?.message}>
              <input
                {...register("studentName")}
                placeholder="e.g. Aarav"
                className="form-input"
              />
            </Field>
            <Field label="Parent Name" error={errors.parentName?.message}>
              <input
                {...register("parentName")}
                placeholder="e.g. Rahul"
                className="form-input"
              />
            </Field>
            <Field label="Phone Number" error={errors.phone?.message}>
              <input
                {...register("phone")}
                placeholder="e.g. +91 98765 43210"
                className="form-input"
              />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                placeholder="e.g. parent@email.com"
                className="form-input"
              />
            </Field>
            <Field label="Child's Age" error={errors.age?.message}>
              <select {...register("age")} className="form-input">
                <option value="">Select age</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="6">6 years</option>
              </select>
            </Field>
          </div>
          <Field label="Message (Optional)" error={errors.message?.message}>
            <textarea
              {...register("message")}
              placeholder="Any questions or special needs?"
              rows={3}
              className="form-input resize-none"
            />
          </Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isSubmitting ? "Submitting…" : "Submit Application ✨"}
          </button>
        </form>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          border: 2px solid hsl(var(--border));
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.15);
        }
      `}</style>
    </section>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div>
    <label className="block font-heading font-semibold text-sm text-foreground mb-1.5">
      {label}
    </label>
    {children}
    {error && <p className="mt-1 text-xs text-destructive font-medium">{error}</p>}
  </div>
);

export default AdmissionSection;
