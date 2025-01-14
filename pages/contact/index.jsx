import ContactForm from "@/components/contact/ContactForm";
import Head from "next/head";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>contact me</title>
        <meta
          name="viewport"
          content="send me your messages"
        />
      </Head>
      <div>
        <ContactForm />
      </div>
    </>
  );
}
