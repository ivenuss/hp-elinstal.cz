import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "ui/Button";
import { InputField } from "ui/InputField";

const ContactForm: React.FC = () => {
  const recaptchaRef = useRef<any>(null);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((curr) => ({ ...curr, [e.target.name]: e.target.value || "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    await fetch(`${process.env.SITE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setLoading(false);

    setVerified(false);
    recaptchaRef.current.reset();

    setForm({
      fullname: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <InputField
        required
        label="Jméno"
        placeholder="Vaše jméno"
        name="fullname"
        maxLength={120}
        value={form.fullname}
        onChange={handleInputChange}
      />
      <InputField
        required
        label="Email"
        placeholder="vas@email.cz"
        type="email"
        name="email"
        value={form.email}
        onChange={handleInputChange}
      />
      <InputField
        required
        type="tel"
        label="Telefon"
        placeholder="720205753"
        name="phone"
        pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        value={form.phone}
        onChange={handleInputChange}
      />
      <InputField
        required
        label="Předmět"
        placeholder="Předmět"
        name="subject"
        maxLength={60}
        value={form.subject}
        onChange={handleInputChange}
      />
      <InputField
        required
        label="Vaše zpráva"
        placeholder="Vaše zpráva, dotaz nebo otázka"
        textarea
        rows={3}
        name="message"
        autoComplete="off"
        maxLength={3000}
        value={form.message}
        onChange={handleInputChange}
      />
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LfFi8QeAAAAAHLMPd4SOOlUWKkw6TzpIcK6dgI2"
        onChange={(value) => setVerified(!!value)}
      />
      <Button
        disabled={!verified}
        loading={loading}
        type="submit"
        className="w-full"
      >
        Odeslat formulář
      </Button>
    </form>
  );
};

export default ContactForm;
