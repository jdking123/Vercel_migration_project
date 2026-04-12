import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "@/lib/language";
import { toast } from "sonner";
import { track } from "@/lib/analytics";
import { env } from "@/lib/env";

interface ContactForm {
  name: string;
  email: string;
  org: string;
  message: string;
  website: string;
}

export function useContactForm() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", org: "", message: "", website: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formStarted = useRef(false);

  const handleFieldInteraction = useCallback(() => {
    if (!formStarted.current) {
      formStarted.current = true;
      track({ name: "contact_form_start", props: { lang } });
    }
  }, [lang]);

  const formRef = useRef(form);
  const submittedRef = useRef(submitted);
  formRef.current = form;
  submittedRef.current = submitted;

  useEffect(() => {
    return () => {
      if (formStarted.current && !submittedRef.current) {
        const f = formRef.current;
        const filledCount = [f.name, f.email, f.org, f.message].filter(Boolean).length;
        track({ name: "contact_form_abandon", props: { lang, fields_filled: filledCount } });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (env.SUPABASE_URL) {
        const res = await fetch(`${env.SUPABASE_URL}/functions/v1/contact-form`, {
          method: "POST",
          headers: { "Content-Type": "application/json", apikey: env.SUPABASE_KEY ?? "" },
          body: JSON.stringify({ name: form.name, email: form.email, org: form.org, message: form.message, website: form.website }),
        });
        if (!res.ok) throw new Error();
      }
      track({ name: "contact_form_submit", props: { lang } });
      setSubmitted(true);
    } catch {
      toast.error(t("contact.error.send"));
    } finally {
      setSubmitting(false);
    }
  }, [form, lang, t]);

  const handleSendAnother = useCallback(() => {
    setForm({ name: "", email: "", org: "", message: "", website: "" });
    setSubmitted(false);
  }, []);

  const updateField = useCallback((field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  }, []);

  return { form, updateField, submitting, submitted, handleFieldInteraction, handleSubmit, handleSendAnother };
}
