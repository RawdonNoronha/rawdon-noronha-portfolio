"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldGroup,
} from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"

interface EmailDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const EmailDialog = ({ open, setOpen }: EmailDialogProps) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error("Failed to send email")
        // throw new Error(data.error || "Failed to send email");
      }

      // alert("Email sent successfully!");
      toast.success("Email sent successfully!")

      setEmail("");
      setSubject("");
      setMessage("");
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer" onClick={() => setOpen(true)}>
          Email
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={sendEmail}>
          <DialogHeader>
            <DialogTitle>Send an Email</DialogTitle>

            <DialogDescription>
              Please contact me directly at{" "}
              rawdonnoronha11@gmail.com or through this form.
            </DialogDescription>
          </DialogHeader>
          <br></br>
          <FieldGroup>
            <Field>
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>

            <Field>
              <Label htmlFor="subject">Subject</Label>

              <Input
                id="subject"
                placeholder="Enter the subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </Field>

            <Field>
              <Label htmlFor="message">Message</Label>

              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailDialog;