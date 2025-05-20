import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactScreen: React.FC = () => (
  <div style={{ width: '100vw', minHeight: '100vh', margin: '0 auto', background: '#fff' }}>
    <Header />
    <main style={{  margin: '0 auto', padding: 40 }}>
      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
        {/* Contact Info */}
        <div style={{ flex: 1, minWidth: 250  }}>
          <h1 style={{ 
            fontFamily: '"Lora", serif',
            color:'#000', 
            fontSize: 38, 
            fontWeight: 400,
            marginBottom: 16
             }}>Contact Info</h1>
          <p style={{ 
            color: '#707079', 
            marginBottom: 28,fontFamily:'"Cabin", sans-serif' ,
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '26px',
            margin:'0 0 15px 0'
            
            }}>
           Set 2 minutes on foot from the nearest bus stop, this no-nonsense budget hotel is 2 km from the Jawahar Kala Kendra arts centre and 3 km from the B.M. Birla Planetarium.
Simply furnished rooms feature air conditioning and flat-screen TVs, as well as en suite wet rooms.
There’s an informal, alcohol-free restaurant. Vegetarian breakfast and parking are available; a generator is on-site.
          </p>
          <div style={{ marginBottom: 12 }}>
            <strong style={{
                color:'#707079',
                fontSize: '16px',
                fontFamily:'"Cabin", sans-serif;',
                fontWeight: 500,
            }}
            >Address:   </strong> 
            <span style={{
               fontFamily: '"Lora", serif',
            color:'#19191a', 
            fontSize: '16px', 
            fontWeight: 500,
            lineHeight: '36px',
            marginBottom: 16
                 }}>
                    1/A, 51, opposite Motisons Jewelers, Everest Colony, Vidhayak Nagar, Lalkothi, Jaipur, Rajasthan 302015</span>
          </div>
          <div style={{ marginBottom: 12 }}>
            <strong style={{
                color:'#707079',
                fontSize: '16px',
                fontFamily:'"Cabin", sans-serif;',
                fontWeight: 500,
            }}
            
            >Phone:</strong> 
            <span style={{ 
               fontFamily: '"Lora", serif',
            color:'#19191a', 
            fontSize: '16px', 
            fontWeight: 500,
            lineHeight: '36px',
            marginBottom: 16
                 }}>081308 10918</span>
          </div>
          <div style={{ marginBottom: 12 }}>
             <strong style={{
                color:'#707079',
                fontSize: '16px',
                fontFamily:'"Cabin", sans-serif;',
                fontWeight: 500,
            }}>Email:</strong> 
            <span style={{ 
               fontFamily: '"Lora", serif',
            color:'#19191a', 
            fontSize: '16px', 
            fontWeight: 500,
            lineHeight: '36px',
            marginBottom: 16
                }}>info.colorlib@gmail.com</span>
          </div>
        </div>
        {/* Contact Form */}
        <form
          style={{
            flex: 1.2,
            minWidth: 340,
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            background: '#fff',
            borderRadius: 8,
            justifyContent: 'flex-start'
          }}
          onSubmit={e => { e.preventDefault(); alert('Message submitted!'); }}
        >
          <div style={{ display: 'flex', gap: 16 }}>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                flex: 1,
                padding: '14px 16px',
                border: '1px solid #e2e2e2',
                color:'#707079',
                backgroundColor:'#fff',
                borderRadius: 4,
                fontSize: 16,
                outline: 'none'
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={{
                flex: 1,
                padding: '14px 16px',
                border: '1px solid #e2e2e2',
                backgroundColor:'#fff',
                 color:'#707079',
                borderRadius: 4,
                fontSize: 16,
                outline: 'none'
              }}
            />
          </div>
          <textarea
            placeholder="Your Message"
            required
            rows={12}
            style={{
              padding: '14px 16px',
              border: '1px solid #e2e2e2',
              backgroundColor:'#fff',
               color:'#707079',
              borderRadius: 4,
              fontSize: 16,
              resize: 'vertical',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            style={{
              marginTop: 8,
              background: '#d2a86a',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '14px 0',
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: 1,
              cursor: 'pointer',
              width: 180,
              alignSelf: 'center',
              boxShadow: '0 2px 8px rgba(210,168,106,0.08)'
            }}
          >
            SUBMIT NOW
          </button>
        </form>
      </div>
      {/* Google Map */}
      <div style={{ marginTop: 48, borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <iframe
          title="map"
         src="https://www.google.com/maps?q=1/A, 51, opposite Motisons Jewelers, Everest Colony, Vidhayak Nagar, Lalkothi, Jaipur, Rajasthan 302015&output=embed"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
    <Footer />
  </div>
);

export default ContactScreen;