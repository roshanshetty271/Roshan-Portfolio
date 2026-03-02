"use client";

import { useState, FC } from "react";
import { C } from "./palette";
import { Reveal } from "./Reveal";

const ContactForm: FC = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    return (
        <Reveal delay={.15}>
            <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: 14, letterSpacing: "0.35em", textTransform: "uppercase", color: C.amber, fontWeight: 300, display: "block" }}>Send a Message</span>
            <span style={{ display: "block", width: 48, height: 1, background: C.amber, margin: "18px 0" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                    <label htmlFor="contact-name" style={{ fontFamily: "'Crimson Pro',serif", fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: C.inkDim, marginBottom: 8, display: "block" }}>Name</label>
                    <input id="contact-name" name="name" autoComplete="name" className="fi" type="text" placeholder="Your name…" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div>
                    <label htmlFor="contact-email" style={{ fontFamily: "'Crimson Pro',serif", fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: C.inkDim, marginBottom: 8, display: "block" }}>Email</label>
                    <input id="contact-email" name="email" autoComplete="email" spellCheck={false} className="fi" type="email" placeholder="you@example.com…" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
                </div>
                <div>
                    <label htmlFor="contact-message" style={{ fontFamily: "'Crimson Pro',serif", fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: C.inkDim, marginBottom: 8, display: "block" }}>Message</label>
                    <textarea id="contact-message" name="message" autoComplete="off" className="fi" rows={5} placeholder="Your message…" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} style={{ resize: "vertical", minHeight: 120 }} />
                </div>
                <a href={`mailto:shetty.ros@northeastern.edu?subject=Portfolio Inquiry from ${form.name}&body=${form.message}`} className="cp" style={{ textAlign: "center", marginTop: 4 }}>Send Message</a>
                <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, color: C.inkDim, textAlign: "center", fontStyle: "italic" }}>
                    Or email directly at{" "}<a href="mailto:shetty.ros@northeastern.edu" style={{ color: C.amber, textDecoration: "none" }}>shetty.ros@northeastern.edu</a>
                </p>
            </div>
        </Reveal>
    );
};

export default ContactForm;
