import React from 'react';

const Structure = () => {
    return (
        <section className="section structure-section" id="structure">
            <div className="section-header">
                <h2 className="section-title">Event Structure</h2>
                <div className="title-underline"></div>
            </div>
            <div className="structure-timeline">
                <div className="timeline-item">
                    <div className="timeline-number">01</div>
                    <div className="timeline-content">
                        <h3><span style={{ color: 'var(--color-orange)' }}>K</span>nowledge <span style={{ color: 'var(--color-orange)' }}>B</span>ubble</h3>
                        <p>
                            Policymakers, industry leaders, startup founders, academicians and scientists
                            discuss global and national strategies, funding frameworks, R&D etc.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">02</div>
                    <div className="timeline-content">
                        <h3><span style={{ color: 'var(--color-orange)' }}>A</span>lpha 2 <span style={{ color: 'var(--color-orange)' }}>I</span>nfiniti</h3>
                        <p>
                            Students form into random teams to solve real world problems under the guidance of
                            mentors to promote "Rising minds for Global Impact".
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">03</div>
                    <div className="timeline-content">
                        <h3><span style={{ color: 'var(--color-orange)' }}>B</span>usi<span style={{ color: 'var(--color-orange)' }}>T</span>ech <span style={{ color: 'var(--color-orange)' }}>E</span>xpo</h3>
                        <p>
                            Features a Professional Startup Expo and Student Innovation Expo, focusing on
                            innovation and entrepreneurship.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">04</div>
                    <div className="timeline-content">
                        <h3><span style={{ color: 'var(--color-orange)' }}>I</span>nno<span style={{ color: 'var(--color-orange)' }}>V</span>estors <span style={{ color: 'var(--color-orange)' }}>B</span>oot <span style={{ color: 'var(--color-orange)' }}>C</span>amp</h3>
                        <p>
                            Start ups pitch to investors panel for seed funding and potential investment up to
                            10 crore INR*.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">05</div>
                    <div className="timeline-content">
                        <h3><span style={{ color: 'var(--color-orange)' }}>M</span>asterminds <span style={{ color: 'var(--color-orange)' }}>C</span>ongregation</h3>
                        <p>
                            Little masters pitch their ideas to panel of mentors (8th to 10th class school students).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Structure;
