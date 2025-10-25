'use client';

import { motion } from 'framer-motion';
import { Users, Gem, Trophy, Compass, Instagram, HeartHandshake, Users2, Sparkles, MapPin } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import TreasureHuntPreview from '@/components/TreasureHuntPreview';
// ResponsiveNav is handled in the root layout

export default function HomePage() {
  // ========================================
  // EVENT HANDLERS
  // ========================================

  const handleJoinHunt = () => {
    // Redirect to donate page
    window.location.href = '/donate';
  };

  const handleLearnMore = () => {
    // Scroll to about section or redirect to about page
    window.location.href = '/about';
  };

  return (
    // ========================================
    // MAIN CONTAINER & BACKGROUND
    // ========================================
      <div style={{
        background: `
          radial-gradient(at 30% 20%, rgba(253, 186, 45, 0.2) 0%, rgba(0, 0, 0, 0) 60%),
          radial-gradient(at 70% 40%, rgba(255, 106, 74, 0.15) 0%, rgba(0, 0, 0, 0) 50%),
          radial-gradient(at 20% 60%, rgba(16, 182, 198, 0.12) 0%, rgba(0, 0, 0, 0) 50%),
          radial-gradient(at 80% 80%, rgba(253, 186, 45, 0.1) 0%, rgba(0, 0, 0, 0) 60%),
          linear-gradient(135deg, rgb(11, 35, 65) 0%, rgb(14, 58, 76) 25%, rgb(11, 35, 65) 50%, rgb(14, 58, 76) 75%, rgb(11, 35, 65) 100%)
        `,
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflowX: 'hidden',
        width: '100%',
        maxWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: 'auto',
        willChange: 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}>

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
        flex: 1,
        willChange: 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}>
        {/* ========================================
            HERO SECTION
            ======================================== */}
        <section style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: '6rem',
          paddingBottom: '3rem',
          width: '100%',
          zIndex: 10,
          willChange: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}>
          <div style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 1rem',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden'
          }}>
            {/* Main Headline with Enhanced Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1.5rem',
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                lineHeight: 1.4,
                cursor: 'default',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 1rem 0 1rem',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}
            >
              <span style={{
                display: 'block',
                textAlign: 'center',
                width: '100%',
                fontSize: 'clamp(1.5rem, 4.5vw, 4rem)',
                lineHeight: 1.2,
                padding: '0 1rem',
                cursor: 'default'
              }}>
                Adventure With Purpose.
              </span>
              <span style={{ 
                background: 'linear-gradient(135deg, #FDBA2D 0%, #FF6A4A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                textAlign: 'center',
                width: '100%',
                whiteSpace: 'normal',
                fontSize: 'clamp(1.5rem, 4.5vw, 4rem)',
                lineHeight: 1.2,
                padding: '0 1rem',
                cursor: 'default'
              }}>
                Connection Through Community.
              </span>
            </motion.h1>

            {/* Subtle Divider Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              style={{
                width: '120px',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                margin: '0 auto 2rem auto',
                borderRadius: '2px'
              }}
            />

            {/* Enhanced Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
                color: 'rgba(255, 255, 255, 0.95)',
                marginBottom: '3rem',
                lineHeight: 1.5,
                maxWidth: '750px',
                margin: '0 auto 3rem auto',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                textAlign: 'center',
                fontWeight: '500',
                cursor: 'default'
              }}
            >
              Treasure Coast Scavengers Inc. brings people together through free public scavenger hunts. As a Florida-based 501(c)(3) nonprofit, our events inspire adventure, community connection, and local discovery. We encourage residents and visitors to explore new places, support local businesses, and create meaningful memories across Florida's Treasure Coast.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '3rem'
              }}
            >
              <motion.button
                onClick={handleLearnMore}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: '0 20px 40px rgba(255, 106, 74, 0.4), 0 0 20px rgba(255, 106, 74, 0.2)',
                  background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D, #FF6A4A)',
                  backgroundSize: '200% 200%',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '1.2rem 3rem',
                  borderRadius: '50px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(255, 106, 74, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  width: '220px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease'
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                    borderRadius: '50px'
                  }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                Explore Our Story
              </motion.button>

              <motion.button
                onClick={handleJoinHunt}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: '0 20px 40px rgba(255, 106, 74, 0.4), 0 0 20px rgba(255, 106, 74, 0.2)',
                  background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D, #FF6A4A)',
                  backgroundSize: '200% 200%',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '1.2rem 3rem',
                  borderRadius: '50px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(255, 106, 74, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  width: '220px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease'
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                    borderRadius: '50px'
                  }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
                Support Our Mission
              </motion.button>
            </motion.div>

            {/* ========================================
                ENHANCED STATS SECTION
                ======================================== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: 'clamp(0.5rem, 2vw, 2rem)',
                maxWidth: '900px',
                margin: '0 auto',
                justifyContent: 'center',
                alignItems: 'stretch',
                overflow: 'visible',
                position: 'relative'
              }}
            >
              {/* Background Glow Effect */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(ellipse, rgba(16, 182, 198, 0.1) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }} />
              
              {[
                { 
                  number: '21', 
                  label: 'Treasures Found', 
                  icon: Gem, 
                  color: '#FF6A4A',
                  gradient: 'linear-gradient(135deg, #FF6A4A, #FF8A65)',
                  shadowColor: 'rgba(255, 106, 74, 0.4)'
                },
                { 
                  number: '1,600+', 
                  label: 'Adventurers', 
                  icon: Users, 
                  color: '#10B6C6',
                  gradient: 'linear-gradient(135deg, #10B6C6, #0EA5B8)',
                  shadowColor: 'rgba(16, 182, 198, 0.4)'
                },
                { 
                  number: '13', 
                  label: 'Events Hosted', 
                  icon: Trophy, 
                  color: '#FDBA2D',
                  gradient: 'linear-gradient(135deg, #FDBA2D, #F59E0B)',
                  shadowColor: 'rgba(253, 186, 45, 0.4)'
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 0.4 + index * 0.15,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '24px',
                    padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.5rem)',
                    textAlign: 'center',
                    minWidth: 'clamp(160px, 22vw, 220px)',
                    flexShrink: 1,
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Card Background Pattern */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '60px',
                    height: '60px',
                    background: stat.gradient,
                    borderRadius: '50%',
                    opacity: 0.1,
                    filter: 'blur(20px)'
                  }} />
                  
                  {/* Icon Container with Enhanced Design */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '20px',
                      background: stat.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto',
                      boxShadow: `0 12px 30px ${stat.shadowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Icon Background Glow */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      filter: 'blur(8px)'
                    }} />
                    <stat.icon size={32} color="white" style={{ position: 'relative', zIndex: 1 }} />
                  </motion.div>
                  
                  {/* Number with Enhanced Typography */}
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                    style={{
                      fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                      fontWeight: '800',
                      color: 'white',
                      marginBottom: '0.5rem',
                      textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                      letterSpacing: '-0.02em',
                      cursor: 'default',
                      background: 'linear-gradient(135deg, #ffffff, #e0e7ff)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  {/* Label with Better Typography */}
                  <div style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
                    fontWeight: '600',
                    marginBottom: '0.3rem',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    letterSpacing: '0.02em',
                    cursor: 'default'
                  }}>
                    {stat.label}
                  </div>
                  
                  
                  {/* Animated Border */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '24px',
                      background: stat.gradient,
                      opacity: 0,
                      zIndex: 0
                    }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========================================
            MISSION SECTION
            ======================================== */}
        <section style={{
          position: 'relative',
          zIndex: 2,
          padding: '4rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {/* Mission Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                textAlign: 'center',
                marginBottom: '3rem'
              }}
            >
              <h2 style={{
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '3rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.02em',
                cursor: 'default'
              }}>
                Our Mission
              </h2>
              
              <div style={{
                width: '150px',
                height: '6px',
                background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                margin: '0 auto',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
              }} />
            </motion.div>

            {/* Mission Content - Clean and Centered */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '24px',
                padding: 'clamp(2rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)',
                textAlign: 'center',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                maxWidth: '900px',
                margin: '0 auto'
              }}
            >

              <div style={{
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <p style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  lineHeight: 1.6,
                  marginBottom: '3rem',
                  fontWeight: '500',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  cursor: 'default'
                }}>
                  We believe every scavenger hunt has the power to turn strangers into friends and everyday moments into lasting memories that strengthen our community.
                </p>

                <p style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.5,
                  fontStyle: 'italic',
                  marginBottom: '3rem',
                  fontWeight: '400',
                  cursor: 'default'
                }}>
                  Through shared discoveries and community challenges, we're building a Treasure Coast where every adventure brings people closer.
                </p>
              </div>

              {/* Secondary CTA - Simpler Style */}
              <motion.button
                onClick={handleLearnMore}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(16, 182, 198, 0.4)', y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'linear-gradient(135deg, #10B6C6, #0EA5B8)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '1.2rem 3rem',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(16, 182, 198, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  margin: '0 auto',
                  transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden'
                }}
              >
                Learn More About Us
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
                  }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* ========================================
            VALUES SECTION
            ======================================== */}
        <section style={{
          position: 'relative',
          zIndex: 2,
          padding: '4rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                textAlign: 'center',
                marginBottom: '3rem'
              }}
            >
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '3rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.02em',
                cursor: 'default'
              }}>
                What Drives Us
              </h2>
              
              <div style={{
                width: '150px',
                height: '6px',
                background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                margin: '0 auto',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
              }} />
            </motion.div>


            {/* Ultra-Fast Values Flow */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '0 2rem'
            }}>
              {/* Values Content - GRID LAYOUT */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '0',
                maxWidth: '1200px',
                margin: '0 auto',
              }}>
                {[
                  { 
                    icon: HeartHandshake, 
                    title: 'Love in Action', 
                    description: 'Kindness is at the heart of everything we do, turning everyday moments into lasting memories that inspire connection.',
                    color: '#FF6A4A',
                    gradient: 'linear-gradient(135deg, rgba(255, 106, 74, 0.15), rgba(255, 106, 74, 0.08))'
                  },
                  { 
                    icon: Users2, 
                    title: 'Community Over Everything', 
                    description: 'We bring people together through adventure, connection, and shared pride in our Treasure Coast community',
                    color: '#10B6C6',
                    gradient: 'linear-gradient(135deg, rgba(16, 182, 198, 0.15), rgba(16, 182, 198, 0.08))'
                  },
                  { 
                    icon: Sparkles, 
                    title: 'Joy in the Journey', 
                    description: 'Every adventure is an opportunity to laugh, explore, and celebrate the joy we find together.',
                    color: '#FDBA2D',
                    gradient: 'linear-gradient(135deg, rgba(253, 186, 45, 0.15), rgba(253, 186, 45, 0.08))'
                  },
                  { 
                    icon: MapPin, 
                    title: 'Local Roots, Lasting Impact', 
                    description: 'Our events celebrate the people and places that make the Treasure Coast shine, creating a lasting legacy of connection and care.',
                    color: '#E67E22',
                    gradient: 'linear-gradient(135deg, rgba(230, 126, 34, 0.15), rgba(230, 126, 34, 0.08))'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.05,
                      ease: "easeOut"
                    }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                      background: value.gradient,
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      textAlign: 'center'
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      background: value.gradient.replace('0.15', '0.2').replace('0.08', '0.12'),
                      borderColor: 'rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    {/* Professional Icon */}
                    <div style={{
                      minWidth: '60px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${value.color}20, ${value.color}10)`,
                      border: `2px solid ${value.color}30`
                    }}>
                      <value.icon size={28} color={value.color} />
                    </div>
                    
                    <div style={{
                      flex: 1,
                      textAlign: 'center'
                    }}>
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '0.5rem',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        cursor: 'default'
                      }}>
                        {value.title}
                      </h3>
                      
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.5,
                        fontSize: '0.95rem',
                  margin: 0,
                  cursor: 'default'
                }}>
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            ADVENTURE SECTION
            ======================================== */}
        <section style={{
          position: 'relative',
          zIndex: 2,
          padding: '4rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                textAlign: 'center',
                marginBottom: '3rem'
              }}
            >
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '3rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.02em',
                cursor: 'default'
              }}>
                Our Adventures
              </h2>
              
              <div style={{
                width: '150px',
                height: '6px',
                background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                margin: '0 auto',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
              }} />
            </motion.div>

            {/* Adventure Teaser Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
                marginBottom: '3rem',
                maxWidth: '100%',
                justifyContent: 'center'
              }}
            >
              {/* Adventure Teaser Card 1 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 182, 198, 0.15), rgba(16, 182, 198, 0.05))',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(16, 182, 198, 0.3)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(16, 182, 198, 0.2)',
                  width: '320px',
                  minWidth: '320px'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #10B6C6, #0EA5B8)',
                  borderRadius: '50%',
                  opacity: 0.2
                }} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.8rem',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  cursor: 'default'
                }}>
                  Beach Adventures
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.5,
                  fontSize: '0.95rem',
                  cursor: 'default'
                }}>
                  Discover what treasures await along our beautiful coastline
                </p>
              </motion.div>

              {/* Adventure Teaser Card 2 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 106, 74, 0.15), rgba(255, 106, 74, 0.05))',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 106, 74, 0.3)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(255, 106, 74, 0.2)',
                  width: '320px',
                  minWidth: '320px'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '-30px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D)',
                  borderRadius: '50%',
                  opacity: 0.2
                }} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.8rem',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  cursor: 'default'
                }}>
                  Downtown Mysteries
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.5,
                  fontSize: '0.95rem',
                  cursor: 'default'
                }}>
                  Uncover the secrets hidden in our historic downtown streets
                </p>
              </motion.div>

              {/* Adventure Teaser Card 3 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  background: 'linear-gradient(135deg, rgba(253, 186, 45, 0.15), rgba(253, 186, 45, 0.05))',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(253, 186, 45, 0.3)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(253, 186, 45, 0.2)',
                  width: '320px',
                  minWidth: '320px'
                }}
              >
                {/* Top Left Half Circle */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '-30px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #FDBA2D, #FF6A4A)',
                  borderRadius: '50%',
                  opacity: 0.2
                }} />
                {/* Top Right Half Circle */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #FDBA2D, #FF6A4A)',
                  borderRadius: '50%',
                  opacity: 0.2
                }} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.8rem',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  cursor: 'default'
                }}>
                  Special Moments
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.5,
                  fontSize: '0.95rem',
                  cursor: 'default'
                }}>
                  Join us for milestone celebrations and community highlights
                </p>
              </motion.div>
            </motion.div>

            <motion.button
              onClick={() => window.location.href = '/events'}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(16, 182, 198, 0.4)', y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'linear-gradient(135deg, #10B6C6, #0EA5B8)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '1.2rem 3rem',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(16, 182, 198, 0.3)',
                transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                margin: '0 auto'
              }}
            >
              View Our Events
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
                }}
                animate={{ left: '100%' }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </section>

        {/* ========================================
            FINAL CTA SECTION
            ======================================== */}
        <section style={{
          position: 'relative',
          zIndex: 2,
          padding: '4rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                textAlign: 'center',
                marginBottom: '3rem'
              }}
            >
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '3rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.02em',
                cursor: 'default'
              }}>
                Fuel the Adventure
              </h2>
              
              <div style={{
                width: '150px',
                height: '6px',
                background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                margin: '0 auto',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
              }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '24px',
                padding: 'clamp(2rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)',
                textAlign: 'center',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                maxWidth: '900px',
                margin: '0 auto',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative background elements */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, #10B6C6, #0EA5B8)',
                borderRadius: '50%',
                opacity: 0.1
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D)',
                borderRadius: '50%',
                opacity: 0.1
              }} />

              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '3rem',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                cursor: 'default'
              }}>
                Every smile, every discovery, every act of kindness starts with people like you.
              </h3>

              <div style={{
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                <p style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '3rem',
                  lineHeight: 1.6,
                  cursor: 'default'
                }}>
                  Join us as we spread love, adventure, and connection throughout Florida's Treasure Coast.
                </p>

                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '3rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  cursor: 'default'
                }}>
                  Together, we're building a community where every adventure creates lasting memories and meaningful connections.
                </p>
              </div>

              <motion.button
                onClick={() => window.location.href = '/donate'}
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: '0 25px 50px rgba(16, 182, 198, 0.5)',
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, #10B6C6, #FF6A4A, #FDBA2D)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  padding: '1.5rem 4rem',
                  borderRadius: '16px',
                  fontSize: '1.3rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  boxShadow: '0 20px 45px rgba(16, 182, 198, 0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  margin: '0 auto',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  minWidth: '280px',
                  justifyContent: 'center'
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)'
                  }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
                  }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                />
                SUPPORT OUR MISSION
                <motion.span
                  animate={{ x: [0, 8, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ fontSize: '1.2em' }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* ========================================
            LEGAL INFORMATION SECTION
            ======================================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '3rem 0',
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
            padding: '2rem 3rem',
            maxWidth: '900px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.875rem',
              margin: '0 0 0.5rem 0',
              lineHeight: 1.4,
              fontWeight: '500',
              cursor: 'default'
            }}>
              Treasure Coast Scavengers Inc. is a 501(c)(3) nonprofit organization.
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
        </motion.section>
      </div>
    </div>
  );
}
