'use client';

import { motion } from 'framer-motion';
import { Heart, Users, ArrowRight, Instagram } from 'lucide-react';
import Link from 'next/link';
// ResponsiveNav is handled in the root layout

export default function DonatePage() {
  return (
    // ========================================
    // MAIN CONTAINER & BACKGROUND
    // ========================================
    <div style={{
      backgroundColor: '#0B2341',
      fontFamily: 'Inter, sans-serif',
      position: 'relative',
      overflowX: 'hidden',
      width: '100%',
      maxWidth: '100vw',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Optimized Cinematic Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        background: `
          radial-gradient(at 30% 20%, rgba(253, 186, 45, 0.2) 0%, rgba(0, 0, 0, 0) 60%),
          radial-gradient(at 70% 40%, rgba(255, 106, 74, 0.15) 0%, rgba(0, 0, 0, 0) 50%),
          radial-gradient(at 20% 60%, rgba(16, 182, 198, 0.12) 0%, rgba(0, 0, 0, 0) 50%),
          radial-gradient(at 80% 80%, rgba(253, 186, 45, 0.1) 0%, rgba(0, 0, 0, 0) 60%),
          linear-gradient(135deg, rgb(11, 35, 65) 0%, rgb(14, 58, 76) 25%, rgb(11, 35, 65) 50%, rgb(14, 58, 76) 75%, rgb(11, 35, 65) 100%)
        `,
        backgroundAttachment: 'scroll',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }} />

      {/* ========================================
          NAVIGATION SECTION
          ======================================== */}
      {/* ResponsiveNav is handled in the root layout */}

      {/* Main Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
        flex: 1
      }}>
        {/* ========================================
            HERO SECTION
            ======================================== */}
        <section style={{
          paddingTop: '8rem',
          paddingBottom: '4rem',
          width: '100%',
          position: 'relative',
          zIndex: 2
        }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1.5rem',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            Support Our Mission
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '0.5rem'
            }}>
              Your support helps us create magical moments, strengthen community bonds, and spread joy throughout
            </p>
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '1rem'
            }}>
              Florida's Treasure Coast.
            </p>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0,
              fontStyle: 'italic'
            }}>
              Treasure Coast Scavengers Inc. is a registered 501(c)(3) nonprofit organization. All contributions are tax-deductible as allowed by law.
            </p>
          </motion.div>
        </div>
      </section>

        {/* ========================================
            DONATION OPTIONS SECTION
            ======================================== */}
        <section style={{
          padding: '2rem 0 6rem 0',
          width: '100%',
          position: 'relative',
          zIndex: 2
        }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            Choose Your Impact
          </motion.h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem',
            width: '100%'
          }}>
            <Link href="/donate/individual" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '3rem',
                  boxShadow: '0 15px 40px rgba(11, 35, 65, 0.1)',
                  border: '1px solid rgba(16, 182, 198, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  boxSizing: 'border-box',
                  display: 'block'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #FF6A4A, #FF6A4A80)'
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FF6A4A, #FF6A4A80)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px #FF6A4A40'
                  }}>
                    <Heart size={35} color="white" />
                  </div>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: 'bold',
                    color: '#0B2341',
                    margin: 0,
                    cursor: 'default'
                  }}>
                    Individual Donor
                  </h3>
                </div>
                
                <p style={{
                  color: '#0B2341',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                  fontSize: '1.125rem'
                }}>
                  Make a personal contribution to support our community treasure hunts and help us spread joy across the Treasure Coast.
                </p>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#FF6A4A',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>
                  <span>Learn More</span>
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>

            <Link href="/donate/corporate" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '3rem',
                  boxShadow: '0 15px 40px rgba(11, 35, 65, 0.1)',
                  border: '1px solid rgba(16, 182, 198, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  boxSizing: 'border-box',
                  display: 'block'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #10B6C6, #10B6C680)'
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10B6C6, #10B6C680)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px #10B6C640'
                  }}>
                    <Users size={35} color="white" />
                  </div>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: 'bold',
                    color: '#0B2341',
                    margin: 0,
                    cursor: 'default'
                  }}>
                    Corporate Partner
                  </h3>
                </div>
                
                <p style={{
                  color: '#0B2341',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                  fontSize: '1.125rem'
                }}>
                  Partner with us to sponsor events, support local businesses, and strengthen community connections through corporate giving.
                </p>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#10B6C6',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>
                  <span>Learn More</span>
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '1.5rem 0',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '16px',
          padding: '1rem 3rem',
          maxWidth: '900px',
          width: '90%',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          {/* Legal Information with Social Links */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {/* Centered Text */}
            <div style={{ 
              flex: '1', 
              textAlign: 'center',
              minWidth: '200px'
            }}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.875rem',
                margin: '0 0 0.25rem 0',
                lineHeight: 1.4,
                fontWeight: '500',
                cursor: 'default'
              }}>
                Treasure Coast Scavengers Inc. is a nonprofit organization with 501(c)(3) status pending IRS approval.
              </p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.75rem',
                margin: 0,
                lineHeight: 1.3,
                cursor: 'default'
              }}>
                © 2025 Treasure Coast Scavengers Inc. All rights reserved.
              </p>
            </div>

            {/* Social Media Follow */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'flex-end',
              flexShrink: 0
            }}>
              {/* Instagram Follow */}
              <motion.a
                href="https://instagram.com/treasurecoastscavengers"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  color: '#10B6C6'
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'all 0.3s ease',
                  padding: '0.25rem 0'
                }}
              >
                <Instagram size={16} />
                Follow us
              </motion.a>

              {/* Facebook Follow */}
              <motion.a
                href="https://www.facebook.com/TreasureCoastScavengers/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  color: '#10B6C6'
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'all 0.3s ease',
                  padding: '0.25rem 0'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow us
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
      </div>
    </div>
  );
}