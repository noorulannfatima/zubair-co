import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, AlertCircle, X } from 'lucide-react'
import { fadeUp, stagger, viewport } from './motion'

const PROJECT_TYPES = ['Residential', 'Commercial', 'Industrial', 'Other']

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: 'Commercial',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [toast, setToast] = useState(null) // { type: 'success' | 'error', text }

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 5000)
    return () => clearTimeout(t)
  }, [toast])

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (form.message.trim().length < 10) e.message = 'Tell us a bit more (10+ chars).'
    return e
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) {
      setErrors(e)
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS env vars are missing. Check .env.')
      setStatus('error')
      setToast({ type: 'error', text: 'Email service is not configured. Please try again later.' })
      return
    }

    setStatus('sending')
    try {
      const time = new Date().toLocaleString('en-PK', {
        dateStyle: 'medium',
        timeStyle: 'short',
      })
      const composedMessage =
        `Project Type: ${form.type}\n` +
        `Email: ${form.email}\n\n` +
        form.message

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          time,
          project_type: form.type,
          message: composedMessage,
          to_name: 'Malik Zubair & Co.',
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('success')
      setToast({ type: 'success', text: 'Message sent — we\u2019ll be in touch shortly.' })
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
      setToast({ type: 'error', text: 'Could not send right now. Please try again or email us directly.' })
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-carbon-2">
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="status"
            aria-live="polite"
            className="fixed top-20 md:top-24 right-4 md:right-8 z-[70] max-w-sm"
          >
            <div
              className={`flex items-start gap-3 rounded-xl border px-4 py-3 backdrop-blur-md shadow-lg ${
                toast.type === 'success'
                  ? 'bg-carbon/90 border-orange-hi/40 text-white'
                  : 'bg-carbon/90 border-red-500/40 text-white'
              }`}
            >
              {toast.type === 'success' ? (
                <CheckCircle2 size={18} className="text-orange-hi mt-0.5 shrink-0" />
              ) : (
                <AlertCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
              )}
              <p className="text-sm leading-snug flex-1">{toast.text}</p>
              <button
                onClick={() => setToast(null)}
                aria-label="Dismiss"
                className="text-white/60 hover:text-white shrink-0"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:col-span-2"
        >
          <motion.div
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.25em] text-orange-hi mb-4"
          >
            — Start a project
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[1]"
          >
            Let's build
            <br />
            <span className="text-white/40">something real.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-white/60 max-w-sm"
          >
            Share a few details about your project. A senior project manager
            will respond within one business day.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <span className="grid place-items-center w-10 h-10 rounded-full border border-white/15 text-orange-hi shrink-0">
                <Mail size={16} />
              </span>
              <a href="mailto:malikzubairco19@gmail.com" className="text-white/80 hover:text-white break-all">
                malikzubairco19@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid place-items-center w-10 h-10 rounded-full border border-white/15 text-orange-hi shrink-0">
                <Phone size={16} />
              </span>
              <div className="text-white/80">
                <a href="tel:+923004337330" className="hover:text-white block">+92 300 4337330</a>
                <a href="tel:+923219451437" className="hover:text-white block">+92 321 9451437</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid place-items-center w-10 h-10 rounded-full border border-white/15 text-orange-hi shrink-0">
                <MapPin size={25} />
              </span>
              <a
                href="https://maps.google.com/?q=31.451923,74.317131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white leading-relaxed group inline-flex flex-col"
              >
                588 Block 3 Sector A2 Ground Floor office # 3,<br />
                Faizan Market Township Lahore.
                <span className="mt-1 text-[12px] uppercase tracking-[0.2em] text-orange-hi/80 group-hover:text-orange-hi">
                  View on Google Maps →
                </span>
              </a>
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:col-span-3"
        >
          <div className="relative rounded-3xl border border-white/10 bg-carbon p-6 md:p-10">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="min-h-[440px] grid place-items-center text-center"
                >
                  <div>
                    <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-orange-hi text-carbon mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl font-black tracking-tight">
                      Message received.
                    </h3>
                    <p className="mt-3 text-white/60 max-w-sm mx-auto">
                      Thanks, {form.name.split(' ')[0] || 'there'}. A project
                      manager will reach out within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  noValidate
                  className="grid gap-5"
                >
                  <Field label="Full Name" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Jane Architect"
                      className="input"
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="jane@company.com"
                      className="input"
                    />
                  </Field>
                  <Field label="Project Type">
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setForm((f) => ({ ...f, type: t }))}
                          className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                            form.type === t
                              ? 'bg-orange-hi text-carbon border-orange-hi'
                              : 'border-white/15 text-white/70 hover:border-white/40'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <Field label="Project Details" error={errors.message}>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell us about scope, site, timelines…"
                      className="input resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-orange-hi px-7 py-4 text-sm font-semibold text-carbon hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Email <Send size={16} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: #141416;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 14px 16px;
          color: #fff;
          font-size: 15px;
          outline: none;
          transition: border-color .2s, background .2s;
        }
        .input::placeholder { color: rgba(255,255,255,0.35); }
        .input:focus {
          border-color: #ff8c00;
          background: #1a1a1d;
        }
      `}</style>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2">
        {label}
      </span>
      {children}
      {error && (
        <span className="block mt-1.5 text-xs text-orange-hi">{error}</span>
      )}
    </label>
  )
}
