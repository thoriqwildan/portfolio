"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input, TextArea } from "../ui/input";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import { toast } from 'sonner'

export default function EmailForm() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: { preventDefault: any; }) => {
    e.preventDefault()

    const service_id = 'service_7f68pnt'
    const template_id = 'template_bhh1kkj'
    const public_key = 'kSuv8rhdz8stQfCka'

    const templateParams = {
      from_name: firstname + ' ' + lastname,
      from_email: email,
      to_name: 'Thoriq Wildan',
      message: message
    }
    setFirstname('')
    setLastname('')
    setEmail('')
    setMessage('')

    emailjs.send(service_id, template_id, templateParams, public_key)
      .then((res) => {
        console.log('Email sent Successfully!', res)
        toast.success('Email sent Successfully!')
      })
      .catch((err) => {
        console.error('Error sending email :', err)
        toast.error('Email not send!')
      })
  }

    return (
        <div className="max-w-md w-full mx-auto rounded-3xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="example@gmail.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Enter your Message</Label>
          <TextArea
            id="message"
            placeholder="Message Here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </LabelInputContainer>
 
        <button
          className="bg-gradient-to-br relative group/btn from-bluecustom dark:from-zinc-900 dark:to-zinc-900 to-neutral-4  00 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send to Me &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
    )
}

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
   
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };