import React, { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, subscribing, success

    const [contactForm, setContactForm] = useState({
        'entry.1331908454': '', // Name
        'entry.299383262': '',  // Email
        'entry.1599555423': '', // Phone
        'entry.1708222522': '', // Subject
        'entry.1480851550': ''  // Message
    });
    const [contactStatus, setContactStatus] = useState('idle'); // idle, sending, success

    const handleContactChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };

    const handleContactSubmit = () => {
        setContactStatus('sending');
        // The actual submission happens via the form action targeting the iframe
        // We just simulate the success state update here since we can't read the iframe response easily due to CORS
        setTimeout(() => {
            setContactStatus('success');
            setContactForm({
                'entry.1331908454': '',
                'entry.299383262': '',
                'entry.1599555423': '',
                'entry.1708222522': '',
                'entry.1480851550': ''
            });
            setTimeout(() => setContactStatus('idle'), 3000);
        }, 1500);
    };

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        setStatus('subscribing');

        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail(''); // Clear input
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error('Failed to subscribe');
                setStatus('idle'); // Or 'error' state if you had one
                alert('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('idle');
            alert('Server unavailable. Please ensure the backend is running.');
        }
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="section-header">
                <h2 className="section-title">Get In Touch</h2>
                <div className="title-underline"></div>
            </div>
            <div className="contact-content">
                {/* Left Column: Info & Organizers */}
                <div className="contact-left-col flex flex-col gap-8">
                    <div className="contact-info glass-card">
                        <h3>Contact Details</h3>
                        <div className="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span>+91 8885155552</span>
                        </div>
                        <div className="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-10 5L2 7" />
                            </svg>
                            <span>info@globalinnovatorsconclave.com</span>
                        </div>
                        <div className="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <a href="https://globalinnovatorsconclave.in/" target="_blank" rel="noreferrer">www.globalinnovatorsconclave.in/</a>
                        </div>
                    </div>

                    <div className="organizers glass-card">
                        <h3>Organizing Committee</h3>
                        <div className="organizer">
                            <span className="organizer-name">Prof. Dr. K. Ravindra</span>
                            <span className="organizer-role">Chair - Global Innovators Conclave</span>
                        </div>
                        <div className="organizer">
                            <span className="organizer-name">Dr. Gowtham Mamidisetti</span>
                            <span className="organizer-role">Convener - Global Innovators Conclave</span>
                        </div>
                        <div className="organizer">
                            <span className="organizer-name">M. Malavika</span>
                            <span className="organizer-role">Faculty Coordinator</span>
                        </div>
                        <div className="organizer">
                            <span className="organizer-name">G. Gnana Abi Sathwik</span>
                            <span className="organizer-role">Student Coordinator</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="contact-form-container glass-card h-full">
                    <h1 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Register To Get Notify</h1>
                    <h3>Send us a Message</h3>
                    <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
                    <form
                        className="flex flex-col gap-4 mt-4"
                        action="https://docs.google.com/forms/d/e/1FAIpQLSeKv9ovZxQ6gTVaV6UxcFyrVuOeLlYzBVZaEw7trLSwrj7Xnw/formResponse"
                        method="POST"
                        target="hidden_iframe"
                        onSubmit={handleContactSubmit}
                    >
                        <input
                            type="text"
                            name="entry.1331908454"
                            placeholder="Your Name"
                            required
                            value={contactForm['entry.1331908454']}
                            onChange={handleContactChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                        />
                        <input
                            type="email"
                            name="entry.299383262"
                            placeholder="Your Email"
                            required
                            value={contactForm['entry.299383262']}
                            onChange={handleContactChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                        />
                        <input
                            type="tel"
                            name="entry.1599555423"
                            placeholder="Phone Number"
                            required
                            value={contactForm['entry.1599555423']}
                            onChange={handleContactChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                        />
                        <input
                            type="text"
                            name="entry.1708222522"
                            placeholder="Subject"
                            required
                            value={contactForm['entry.1708222522']}
                            onChange={handleContactChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                        />
                        <textarea
                            name="entry.1480851550"
                            placeholder="Your Message"
                            rows={4}
                            required
                            value={contactForm['entry.1480851550']}
                            onChange={handleContactChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="cta-button primary w-full"
                            disabled={contactStatus === 'sending'}
                            style={contactStatus === 'success' ? { background: 'linear-gradient(135deg, #2ecc71, #27ae60)' } : {}}
                        >
                            {contactStatus === 'idle' && <span>Send Message</span>}
                            {contactStatus === 'sending' && <span>Sending...</span>}
                            {contactStatus === 'success' && <span>✓ Message Sent!</span>}
                        </button>
                    </form>
                </div>

                {/* Bottom: Newsletter */}
                <div className="newsletter-form glass-card" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
                    <h3>Get Event Details</h3>
                    <p>Subscribe to be the first to know when registration opens</p>
                    <form className="subscribe-form" onSubmit={handleNewsletterSubmit} style={{ maxWidth: '600px', margin: '2rem auto 0' }}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="cta-button primary"
                            disabled={status === 'subscribing'}
                            style={status === 'success' ? { background: 'linear-gradient(135deg, #2ecc71, #27ae60)' } : {}}
                        >
                            {status === 'idle' && <span>Notify Me</span>}
                            {status === 'subscribing' && <span>Subscribing...</span>}
                            {status === 'success' && <span>✓ Subscribed!</span>}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
