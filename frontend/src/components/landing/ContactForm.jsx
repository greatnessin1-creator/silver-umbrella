import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";import { toast } from 'sonner';
import { Send, Clock, Mail, Phone } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post(`${API}/contact`, formData);
      if (response.data.success) {
        setSubmitted(true);
        toast.success('Message sent! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
      } else {
        toast.error(response.data.message || 'Something went wrong.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-[hsl(var(--secondary))] noise-overlay"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: Copy */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(var(--rose-primary))] mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[hsl(var(--foreground))] mb-6">
              Contact Us
            </h2>
            <div className="rose-line mb-8" />
            <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
              Have a question about our products or need help with your order? We'd love to
              hear from you. Send us a message and our team will get back to you promptly.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--rose-soft))] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[hsl(var(--rose-primary))]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-[hsl(var(--foreground))]">Email</p>
                  <p className="font-body text-xs text-[hsl(var(--muted-foreground))]">support@puralivn.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--rose-soft))] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[hsl(var(--rose-primary))]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-[hsl(var(--foreground))]">Response Time</p>
                  <p className="font-body text-xs text-[hsl(var(--muted-foreground))]">Within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--rose-soft))] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[hsl(var(--rose-primary))]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-[hsl(var(--foreground))]">Hours</p>
                  <p className="font-body text-xs text-[hsl(var(--muted-foreground))]">Mon-Fri, 9AM - 6PM EST</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card className="rounded-2xl bg-white border border-[hsl(var(--border))] shadow-[0_10px_30px_-18px_rgba(20,16,12,0.2)]">
              <CardContent className="p-6 sm:p-8">
                {submitted ? (
                  <div data-testid="contact-form-status" className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--rose-soft))] flex items-center justify-center mx-auto mb-5">
                      <Send className="w-7 h-7 text-[hsl(var(--rose-primary))]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-2xl font-medium text-[hsl(var(--foreground))] mb-3">
                      Message Sent!
                    </h3>
                    <p className="font-body text-sm text-[hsl(var(--muted-foreground))] mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="border-[hsl(var(--rose-primary)/0.35)] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--rose-soft)/0.5)] rounded-xl font-body"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form data-testid="contact-form" onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot - hidden from humans */}
                    <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                      <Input
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleChange}
                        tabIndex="-1"
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-body text-sm font-medium text-[hsl(var(--foreground))]">Name *</Label>
                        <Input
                          id="name"
                          data-testid="contact-name-input"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`rounded-xl border-[hsl(var(--border))] font-body text-sm focus-visible:ring-[hsl(var(--rose-primary)/0.45)] ${errors.name ? 'border-red-400' : ''}`}
                        />
                        {errors.name && <p className="font-body text-xs text-red-500">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-body text-sm font-medium text-[hsl(var(--foreground))]">Email *</Label>
                        <Input
                          id="email"
                          data-testid="contact-email-input"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`rounded-xl border-[hsl(var(--border))] font-body text-sm focus-visible:ring-[hsl(var(--rose-primary)/0.45)] ${errors.email ? 'border-red-400' : ''}`}
                        />
                        {errors.email && <p className="font-body text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-body text-sm font-medium text-[hsl(var(--foreground))]">Phone <span className="text-[hsl(var(--muted-foreground))] font-normal">(optional)</span></Label>
                      <Input
                        id="phone"
                        data-testid="contact-phone-input"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="rounded-xl border-[hsl(var(--border))] font-body text-sm focus-visible:ring-[hsl(var(--rose-primary)/0.45)]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-body text-sm font-medium text-[hsl(var(--foreground))]">Message *</Label>
                      <Textarea
                        id="message"
                        data-testid="contact-message-textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={4}
                        className={`rounded-xl border-[hsl(var(--border))] font-body text-sm focus-visible:ring-[hsl(var(--rose-primary)/0.45)] resize-none ${errors.message ? 'border-red-400' : ''}`}
                      />
                      {errors.message && <p className="font-body text-xs text-red-500">{errors.message}</p>}
                    </div>

                    <Button
                      data-testid="contact-submit-button"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[hsl(var(--rose-medium))] text-white hover:bg-[hsl(var(--rose-medium)/0.9)] rounded-xl py-6 text-sm font-body font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="w-4 h-4" strokeWidth={1.75} />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
