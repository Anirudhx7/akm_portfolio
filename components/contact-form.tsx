"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form"
import { Loader2 } from "lucide-react"

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll respond to your message shortly.",
        variant: "success",
      })

      form.reset()
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              {...form.register("name", { required: true, minLength: 2 })}
              placeholder="Your name"
              required
              minLength={2}
              aria-describedby="name-error"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...form.register("email", { required: true })}
              placeholder="your.email@example.com"
              required
              aria-describedby="email-error"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">
              Subject <span className="text-destructive">*</span>
            </Label>
            <Input
              id="subject"
              {...form.register("subject", { required: true, minLength: 5 })}
              placeholder="How can I help you?"
              required
              minLength={5}
              aria-describedby="subject-error"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              {...form.register("message", { required: true, minLength: 10 })}
              placeholder="Your message..."
              className="min-h-[120px]"
              required
              minLength={10}
              aria-describedby="message-error"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
