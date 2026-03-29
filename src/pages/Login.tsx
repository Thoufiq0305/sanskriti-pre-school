"use client"

import { useState } from "react"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
    
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: { email?: string; password?: string } = {};

        if (!email) {
            newErrors.email = "Please enter your email address";
        } else if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!password) {
            newErrors.password = "Please enter your password";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        // 🚨 Stop if validation fails
        if (Object.keys(newErrors).length > 0) return;

        try {
            setIsLoading(true);

            // 🔥 Firebase login
            await signInWithEmailAndPassword(auth, email, password);

            // ✅ Success
            toast({
                title: "Login successful! 🎉",
                description: "You have been logged in successfully.",
            });

            // 👉 redirect to home (your plan)
            navigate("/");

        } catch (error: any) {
            console.error(error);

            // ❌ Error handling
            if (error.code === "auth/user-not-found") {
                setErrors({ email: "User not found" });
            } else if (error.code === "auth/wrong-password") {
                setErrors({ password: "Incorrect password" });
            } else {
                setErrors({ email: "Login failed. Try again" });
            }
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#eaf3f6]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating shapes */}
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-yellow-200 opacity-60" />
              <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-purple-200 opacity-50" />
              <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-cyan-200 opacity-50" />
              <div className="absolute bottom-40 right-10 w-14 h-14 rounded-full bg-orange-200 opacity-60" />
              <div className="absolute top-1/2 left-5 w-10 h-10 rounded-full bg-teal-300 opacity-40" />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-primary/10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-4">
              <span className="text-4xl" role="img" aria-label="school">🏫</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Sanskriti Kindergarten
            </h1>
            <p className="text-muted-foreground text-lg">
              Welcome back! <span role="img" aria-label="waving">👋</span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span role="img" aria-label="envelope">📧</span>
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors({ ...errors, email: undefined })
                  }}
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-[#e6f2f5] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 text-base ${
                    errors.email ? "border-destructive" : "border-border"
                  }`}
                  placeholder="admin@email.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </div>
              {errors.email && (
                <p id="email-error" className="flex items-center gap-2 text-sm text-destructive font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span role="img" aria-label="lock">🔐</span>
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors({ ...errors, password: undefined })
                  }}
                  className={`w-full pl-12 pr-14 py-4 rounded-2xl border-2 bg-[#e6f2f5] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 text-base ${
                    errors.password ? "border-destructive" : "border-border"
                  }`}
                  placeholder="Enter your password"
                  aria-describedby={errors.password ? "password-error" : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p id="password-error" className="flex items-center gap-2 text-sm text-destructive font-medium">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            {/* <div className="text-right">
              <a
                href="#"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                Forgot password? <span role="img" aria-label="key">🔑</span>
              </a>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 rounded-2xl bg-[#4db6ac] text-primary-foreground font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Logging in...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Let&apos;s Go! <span role="img" aria-label="rocket">🚀</span>
                </span>
              )}
            </button>
          </form>

          {/* Footer */}
          {/* <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              New to Little Stars? {" "}
              <a
                href="#"
                className="font-semibold text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                Register here <span role="img" aria-label="star">⭐</span>
              </a>
            </p>
          </div> */}

          {/* Decorative icons */}
          <div className="flex justify-center gap-4 mt-6 text-2xl opacity-60">
            <span role="img" aria-label="backpack">🎒</span>
            <span role="img" aria-label="rainbow">🌈</span>
            <span role="img" aria-label="crayon">🖍️</span>
            <span role="img" aria-label="book">📚</span>
            <span role="img" aria-label="star">✨</span>
          </div>
        </div>

        {/* Bottom message */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          Where little minds grow big! <span role="img" aria-label="seedling">🌱</span>
        </p>
      </div>
    </main>
  )
}
