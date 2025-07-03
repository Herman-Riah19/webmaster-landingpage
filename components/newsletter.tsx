"use client";

import React, { useTransition, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmailAction } from "@/lib/serviceMail";

export const Contact = () => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (formData: FormData) => {
    setError("");
    setSuccess(false);

    startTransition(async () => {
      const res = await sendEmailAction(formData);

      if (res.success) {
        setSuccess(true);
      } else {
        setError(res.error || "Erreur inconnue");
      }
    });
  };

  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Contactez-nous
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Envoyez-nous un message et nous vous répondrons rapidement.
        </p>

        <form
          action={handleSubmit}
          className="flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-4"
        >
          <Input
            name="email"
            type="email"
            placeholder="Votre email"
            className="bg-muted/50 dark:bg-muted/80"
            required
          />
          <Textarea
            name="message"
            placeholder="Votre message"
            className="bg-muted/50 dark:bg-muted/80"
            required
            rows={5}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? "Envoi..." : "Envoyer"}
          </Button>
          {success && <p className="text-green-600 text-sm">Message envoyé ✅</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
