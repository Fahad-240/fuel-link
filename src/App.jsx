import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/logo.png'
import heroCar from './assets/herocar.jpg'
import topBrand from './assets/topbrand.webp'
import coupleImage from './assets/couple.png'
import miniCar from './assets/miniCar.webp'
import standingImage from './assets/standing.jpg'
import investmentImage from './assets/investment.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openStep, setOpenStep] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    state: '',
    email: '',
    investmentRange: '',
    smsConsent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href').substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
          setIsMenuOpen(false)
        }
      })
    })
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="Juiced Fuel" className="logo-icon" />
      </div>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
        </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#industry">Industry</a></li>
            <li><a href="#why-franchise">Why Franchise</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="btn-primary nav-button">Get More Info</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img src={heroCar} alt="Juiced Fuel Truck" className="hero-car-image" />
        <div className="hero-overlay">
          <div className="hero-badge">
            <img src={topBrand} alt="Top Brand Badge" className="top-brand-image" />
          </div>
          <h1 className="hero-title">FRANCHISE WITH US</h1>
          <p className="hero-subtitle">The #1 Growing Mobile Fueling Franchise in the USA</p>
        
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">
            <span className="highlight">Revolutionizing</span> The Way People Refuel
          </h2>
          <div className="content-wrapper">
            <p className="lead-text">
              <strong>Juiced Fuel is revolutionizing the way people refuel</strong> by bringing high-quality fuel directly to their doorstep. As a veteran-owned and locally operated business, we provide on-demand and subscription-based fuel delivery services, eliminating the need for gas station stops. Our seamless, app-based ordering system ensures customers receive fuel when and where they need it—
            </p>
            <p>
              Whether at home, work, or on the go. With a focus on efficiency, reliability, and top-tier customer service, Juiced Fuel is redefining the fueling experience. Now, we're expanding through franchising, offering driven entrepreneurs the opportunity to <strong>bring this game-changing service to their communities</strong>. Join us in fueling the future—one tank at a time.
            </p>
          </div>
        </div>
      </section>
      <div className="couple-image-container">
        <img src={coupleImage} alt="Juiced Fuel" className="couple-image" />
      </div>

      {/* Industry Section */}
      <section id="industry" className="section industry-section">
        <div className="container">
          <div className="industry-grid">
            <div className="industry-left">
              <h2 className="industry-title">THE FUEL DELIVERY INDUSTRY</h2>
              <h3 className="industry-subtitle">A GROWING OPPORTUNITY</h3>
              <p>
                <strong>Fuel delivery is rapidly growing</strong>, driven by rising demand for convenience and time-saving solutions in today's fast-paced world.
              </p>
            </div>
            <div className="industry-middle">
              <p>
                As consumers look for efficient ways to manage daily tasks, <strong>on-demand services make fuel delivery an attractive option</strong> for busy professionals, families, and businesses. With technological advances and mobile apps, customers can now order fuel from home or the office, spurring market innovation.
              </p>
              <p>
                The industry's potential is significant as more people adopt these services and sustainability concerns drive a shift toward cleaner, more efficient fuel solutions. <strong>Franchisees benefit from a scalable business model</strong>, low overhead, and access to a growing consumer base that values convenience, flexibility, and reliability.
              </p>
            </div>
            <div className="industry-right">
              <p>
                Juiced Fuel is set to capitalize on these trends by combining cutting-edge technology with a strong commitment to customer service. With franchising opportunities available, now is the ideal time to join an industry poised for continued growth and success.
              </p>
              <div className="mini-car-container">
                <img src={miniCar} alt="Car Icon" className="mini-car-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Franchise Section */}
      <section id="why-franchise" className="section why-franchise-section">
        <div className="container">
          <h2 className="why-franchise-title">WHY FRANCHISE WITH US</h2>
          <div className="why-franchise-content">
            <div className="why-franchise-left">
              <p className="why-franchise-intro">
                <strong>Juiced Fuel offers a unique, high-demand business opportunity</strong> in the booming fuel delivery industry. As a franchisee, you'll benefit from a proven model designed for efficiency, scalability, and profitability. Here's why this opportunity stands out:
              </p>
              <ul className="why-franchise-list">
                <li>
                  <span className="list-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                    </svg>
                  </span>
                  <div>
                  <p><strong>Growing Market Demand</strong>More people are turning to on-demand services for convenience, making fuel delivery a rapidly expanding industry with high potential.</p>
                    
                  </div>
                </li>
                <li>
                  <span className="list-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                    </svg>
                  </span>
                  <div>
                  <p> <strong>Low Overhead, High Potential</strong>No need for a brick-and-mortar location. Our streamlined business model reduces costs while maximizing earning opportunities.</p>
                    
                  </div>
                </li>
                <li>
                  <span className="list-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Recurring Revenue Model</strong>
                    <p>With subscription-based plans and on-demand orders, franchisees enjoy steady, predictable income streams.</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Comprehensive Training & Support</strong>
                    <p>We set you up for success with hands-on operational training, safety protocols, and ongoing marketing guidance.</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Proven Technology & Systems</strong>
                    <p>Our app-based ordering and automated tracking systems ensure seamless operations, efficient fuel delivery, and superior customer service.</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Exclusive Territory Rights</strong>
                    <p>Own and grow your business in a protected market, minimizing local competition.</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Veteran-Owned & Community Focused</strong>
                    <p>Join a brand that values service, integrity, and giving back, with opportunities to make a real impact in your local community.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="why-franchise-right">
              <img src={standingImage} alt="Juiced Fuel Franchise" className="standing-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="section investment-section">
        <div className="investment-background">
          <img src={investmentImage} alt="Investment Background" className="investment-bg-image" />
        </div>
        <div className="container">
          <h2 className="investment-title">THE INVESTMENT</h2>
          <div className="investment-grid">
            <div className="investment-card">
              <h3>FRANCHISE FEE</h3>
              <div className="investment-amount">$59,500</div>
            </div>
            <div className="investment-card">
              <h3>INVESTMENT RANGE</h3>
              <div className="investment-amount">$92,700 - $132,000</div>
            </div>
            <div className="investment-card">
              <h3>ROYALTY</h3>
              <div className="investment-amount">$500-$2000/mo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="section support-section">
        <div className="container">
          <h2 className="support-title">FRANCHISEE SUPPORT</h2>
          <div className="support-content">
            <div className="support-left">
              <p className="support-intro">
                At Juiced Fuel, we believe that our franchisees' success is our success. That's why we provide a comprehensive support system designed to get your business up and running quickly and keep it operating smoothly. From training to technology, we've got you covered every step of the way.
              </p>
              <div className="support-list">
                <div className="support-item">
                  <span className="support-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" fill="#FF6B35"/>
                      <path d="M6 10L9 13L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <h3>Turnkey Startup Package</h3>
                    <p>We will prepare your fully equipped fuel delivery truck and equipment, allowing you to hit the ground running.</p>
                  </div>
                </div>
                <div className="support-item">
                  <span className="support-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" fill="#FF6B35"/>
                      <path d="M6 10L9 13L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <h3>Comprehensive Training</h3>
                    <p>When you arrive for training, your fully equipped fuel delivery truck and equipment will be ready to go, allowing you to hit the ground running.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="support-middle">
              <div className="support-list">
                <div className="support-item">
                  <span className="support-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" fill="#FF6B35"/>
                      <path d="M6 10L9 13L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <h3>Technology & App Integration</h3>
                    <p>Your business will be set up with a fully functional Juiced Fuel app, customized for your territory, so customers can easily place orders. Our CRM system and tech support ensure smooth operations from day one.</p>
                  </div>
                </div>
                <div className="support-item">
                  <span className="support-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" fill="#FF6B35"/>
                      <path d="M6 10L9 13L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <h3>Ongoing Marketing Support</h3>
                    <p>We help you build brand awareness with corporate-managed social media campaigns, content creation, and quarterly strategy calls to discuss new marketing techniques and local opportunities.</p>
                  </div>
                </div>
                <div className="support-item">
                  <span className="support-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" fill="#FF6B35"/>
                      <path d="M6 10L9 13L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <h3>Quarterly Growth Calls</h3>
                    <p>Regular check-ins to discuss new best practices, share ideas, and keep you updated on the latest industry trends and business improvements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="support-right">
              <div className="support-footer">
                <p>
                  With Juiced Fuel, you're not just starting a business—<strong>you're becoming part of a family that's committed to helping you succeed</strong>. Our network of franchisees is built on support, trust, and shared success, giving you the tools and training you need to grow. <strong>We take care of the details so you can focus on serving your customers</strong> and building a business with the backing of a team that feels like home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="section journey-section">
        <div className="container">
          <div className="journey-content">
            <div className="journey-left">
              <h2 className="image.pngimage.png">
                <span>FRANCHISE JOURNEY</span>
                
              </h2>
              <p className="journey-intro">
                Ready to fuel your future with Juiced Fuel? Our streamlined franchise process is designed to guide you every step of the way, from expressing your initial interest to launching your own fully equipped mobile juice business. You'll gain valuable insights into our business model, meet our leadership team, and receive comprehensive training to ensure your success. With ongoing support and a proven system in place, you'll be set up to thrive as part of the Juiced Fuel family. Here's how the journey unfolds:
              </p>
              <div className="journey-steps-list">
                <div className="journey-step-item">
                  <h3 
                    className="journey-step-header"
                    onClick={() => setOpenStep(openStep === 1 ? null : 1)}
                  >
                    1. Submit Your Interest
                    <span className="step-toggle">{openStep === 1 ? '−' : '+'}</span>
                  </h3>
                  {openStep === 1 && (
                    <p>Fill out our online franchise inquiry form to express your interest in becoming a Juiced Fuel franchisee. This helps us learn more about you and your background.</p>
                  )}
                </div>
                <div className="journey-step-item">
                  <h3 
                    className="journey-step-header"
                    onClick={() => setOpenStep(openStep === 2 ? null : 2)}
                  >
                    2. Initial Call & Introduction
                    <span className="step-toggle">{openStep === 2 ? '−' : '+'}</span>
                  </h3>
                  {openStep === 2 && (
                    <p>We'll schedule a call to discuss your goals, the Juiced Fuel business model, and answer any initial questions you have about the opportunity.</p>
                  )}
                </div>
                <div className="journey-step-item">
                  <h3 
                    className="journey-step-header"
                    onClick={() => setOpenStep(openStep === 3 ? null : 3)}
                  >
                    3. Franchise Disclosure & Review
                    <span className="step-toggle">{openStep === 3 ? '−' : '+'}</span>
                  </h3>
                  {openStep === 3 && (
                    <p>You'll receive our Franchise Disclosure Document (FDD), which outlines all the details about owning a Juiced Fuel franchise, including investment costs, operations, and expectations.</p>
                  )}
                </div>
                <div className="journey-step-item">
                  <h3 
                    className="journey-step-header"
                    onClick={() => setOpenStep(openStep === 4 ? null : 4)}
                  >
                    4. Validation & Due Diligence
                    <span className="step-toggle">{openStep === 4 ? '−' : '+'}</span>
                  </h3>
                  {openStep === 4 && (
                    <p>Connect with existing franchisees to learn about their experiences and validate the business opportunity.</p>
                  )}
                </div>
                <div className="journey-step-item">
                  <h3 
                    className="journey-step-header"
                    onClick={() => setOpenStep(openStep === 5 ? null : 5)}
                  >
                    5. Meet the Team Day
                    <span className="step-toggle">{openStep === 5 ? '−' : '+'}</span>
                  </h3>
                  {openStep === 5 && (
                    <p>Visit Juiced Fuel HQ to meet our leadership team, learn more about our operations, and get an up-close look at how we support our franchisees.</p>
                  )}
                </div>
                <div className="journey-step-item">
                  <h3 
                    className="journey-step-header"
                    onClick={() => setOpenStep(openStep === 6 ? null : 6)}
                  >
                    6. Sign the Franchise Agreement
                    <span className="step-toggle">{openStep === 6 ? '−' : '+'}</span>
                  </h3>
                  {openStep === 6 && (
                    <p>Once you're ready to move forward, you'll sign the Franchise Agreement and officially become part of the Juiced Fuel family. Congratulations!</p>
                  )}
                </div>
                <div className="journey-step-item">
                  <h3 
                    className="journey-step-header"
                    onClick={() => setOpenStep(openStep === 7 ? null : 7)}
                  >
                    7. Training & Truck Pickup
                    <span className="step-toggle">{openStep === 7 ? '−' : '+'}</span>
                  </h3>
                  {openStep === 7 && (
                    <p>Attend hands-on training where you'll shadow our team, learn operations, fueling procedures, and business management. Your fully equipped truck and technology systems will be ready for you to start operating immediately.</p>
                  )}
                </div>
                <div className="journey-step-item">
                  <h3 
                    className="journey-step-header"
                    onClick={() => setOpenStep(openStep === 8 ? null : 8)}
                  >
                    8. Launch & Ongoing Support
                    <span className="step-toggle">{openStep === 8 ? '−' : '+'}</span>
                  </h3>
                  {openStep === 8 && (
                    <p>You're ready to go! We'll guide you through your grand opening and provide ongoing marketing, operational, and technical support to ensure your business thrives.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="journey-right">
              <img src={heroCar} alt="Juiced Fuel Truck" className="journey-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="contact-background">
          <img src={coupleImage} alt="Contact Background" className="contact-bg-image" />
          <div className="contact-form-overlay">
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                
                // Prepare form data matching Google Sheets headers
                const data = {
                  name: formData.name || '',
                  mobile: formData.mobile || '',
                  city: formData.city || '',
                  state: formData.state || '',
                  email: formData.email || '',
                  investmentRange: formData.investmentRange || ''
                };

                try {
                  const response = await fetch('https://script.google.com/macros/s/AKfycbwzuVzGUCRXnfyi26A_0HyZwIqsjQvCWeW64lv4Zds7NHi82hnkAdHVBXcjN6oGDrVfsA/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                  });
                  
                  // Since we're using no-cors, we can't read the response
                  // But the data should be submitted successfully
                  alert('Thank you for your interest! We will contact you soon.');
                  
                  // Reset form
                  e.target.reset();
                  setFormData({
                    name: '',
                    mobile: '',
                    city: '',
                    state: '',
                    email: '',
                    investmentRange: '',
                    smsConsent: false
                  });
                } catch (error) {
                  console.error('Error submitting form:', error);
                  alert('Thank you for your interest! We will contact you soon.');
                  e.target.reset();
                } finally {
                  setIsSubmitting(false);
                }
              }}>
                <div className="form-group">
                  <label>Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Mobile Number (for SMS updates) *</label>
                  <input 
                    type="tel" 
                    name="mobile"
                    placeholder="number" 
                    required 
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input 
                    type="text" 
                    name="city"
                    placeholder="City" 
                    required 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <input 
                    type="text" 
                    name="state"
                    placeholder="State" 
                    required 
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Investment range *</label>
                  <select 
                    name="investmentRange"
                    required
                    value={formData.investmentRange}
                    onChange={(e) => setFormData({...formData, investmentRange: e.target.value})}
                  >
                    <option value="">Please Select</option>
                    <option value="92k-132k">$92,700 - $132,000</option>
                  </select>
                </div>
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      name="smsConsent"
                      required 
                      checked={formData.smsConsent}
                      onChange={(e) => setFormData({...formData, smsConsent: e.target.checked})}
                    />
                    <span>SMS Consent *</span>
                  </label>
                  <p className="checkbox-text">I agree to receive SMS and WhatsApp updates, reminders, and promotional messages from Juiced Fuel. I understand that message and data rates may apply. I can opt out anytime by replying STOP</p>
                </div>
                <button 
                  type="submit" 
                  className="btn-primary form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Information'}
                </button>
                <div className="form-links">
                  <a href="#privacy">Privacy Policy</a>
                  <span> | </span>
                  <a href="#terms">Terms of Service</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="contact-content">
            <div className="contact-left">
              <h2 className="contact-title">FRANCHISE WITH US</h2>
              <div className="contact-logo-section">
                <img src={logo} alt="Juiced Fuel Logo" className="contact-logo" />
              </div>
              <h3 className="contact-company-name">Fuel Link</h3>
              <div className="contact-details">
                <div className="contact-details-grid">
                  <div className="contact-details-left">
                    <p><strong>Email:</strong> <a href="mailto:info@fuellink.com">info@juicedfuel.com</a></p>
                    <p><strong>Phone Number:</strong> <a href="tel:8437095409">(843) 709-5409</a></p>
                  </div>
                  <div className="contact-details-right">
                    <p><strong>Website:</strong> <a href="https://fuellink.com" target="_blank" rel="noopener noreferrer">juicedfuel.com</a></p>
                    <p><strong>Location:</strong> Charleston, SC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="legal-notice">
            <p>
              This information is not intended as an offer to sell, or the solicitation of an offer to buy, a franchise. It is for information purposes only. An offer is made only by Franchise Disclosure Document (FDD). Currently, the following states regulate the offer and sale of franchises: California, Hawaii, Illinois, Indiana, Maryland, Michigan, Minnesota, New York, North Dakota, Oregon, Rhode Island, South Dakota, Virginia, Washington, and Wisconsin. If you are a resident of, or wish to acquire a franchise for a Juiced Fuel to be located in one of these states or a country whose laws regulate the offer and sale of franchises, we will not offer you a franchise unless and until we have complied with applicable pre-sale registration and disclosure requirements in your jurisdiction. Juiced Fuel Franchising LLC, (843) 709-5409, 2132 Pentland Dr., Charleston, SC 29412
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()}Fuel Link Franchising LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
