'use client'

import { useState, useEffect, ReactNode } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSearch, FiCopy, FiSend, FiMoreVertical } from 'react-icons/fi'
import { FaFire } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import EmailWarmupDashboard from './email'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

interface AnimatedSectionProps {
  children: ReactNode;
}

function AnimatedSection({ children }: AnimatedSectionProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  )
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [accounts] = useState([
    { email: "m@coldemaily.com", sent: "6523", received: "4029", rate: "86%" },
    { email: "m@positivreplieslabs.com", sent: "4562", received: "3260", rate: "92%" }
  ])

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <span className="text-xl font-bold text-black">Your Company Name</span>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/pricing" className="text-black hover:text-gray-600 transition-colors">
              Pricing
            </Link>
            <button className="inline-flex items-center justify-center rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-8 py-2">
              SIGN UP NOW
            </button>
            <button className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-black hover:bg-gray-300 h-10 px-8 py-2">
              SEE DEMO
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/pricing" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
                Pricing
              </Link>
              <button className="text-white hover:bg-blue-700 block px-3 py-2 rounded-full text-base font-bold w-full text-left bg-blue-600">
                SIGN UP NOW
              </button>
              <button className="text-black hover:bg-gray-100 block px-3 py-2 rounded-full text-base font-medium w-full text-left bg-white">
                SEE DEMO
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-black">
            Find, Contact & Close
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Your Ideal Clients.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Instantly turns leads into clients with Automated Outreach, Deliverability
            Network, Sales Engagement, B2B Lead Database & AI-Powered CRM
          </p>

          <button className="inline-flex items-center justify-center rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 py-4 text-lg">
            GET STARTED NOW
          </button>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-8 text-gray-600">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">Free leads included</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Email Interface */}
        <AnimatedSection>
          <div className="mt-20 w-full p-4 md:p-8 lg:p-12">
            <div className="mx-auto max-w-6xl">
              <div className="overflow-hidden rounded-xl bg-white">
                <div className="grid gap-8 p-2 md:grid-cols-2 md:p-4 lg:gap-12">
                  {/* Left Side - Email Interface */}
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-300 via-blue-200 to-green-200 p-4">
                    <div className="overflow-hidden rounded-lg bg-white">
                      <div className="p-4 space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-black">Email Account</h3>
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                              <FiSearch className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                              <FiCopy className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Total Emails */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="rounded-lg bg-blue-500 p-2">
                              <FiSend className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm text-black">TOTAL EMAIL SENT</div>
                              <div className="text-xl font-bold text-black">10065</div>
                            </div>
                          </div>
                          <button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-medium">
                            + Add Email
                          </button>
                        </div>

                        {/* Email Accounts */}
                        {accounts.map((account, index) => (
                          <div key={index} className="p-4 bg-white rounded-lg">
                            <div className="flex items-center justify-between mb-3">
                              <span className="font-medium text-black">{account.email}</span>
                              <div className="flex gap-2">
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                  <FiMoreVertical className="w-4 h-4" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-full text-green-500">
                                  <FaFire className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="flex items-center gap-1 text-black">
                                <FiSend className="w-4 h-4 text-blue-500" />
                                <span>{account.sent}</span>
                              </div>
                              <div className="flex items-center gap-1 text-black">
                                <FiSend className="w-4 h-4 transform rotate-180 text-green-500" />
                                <span>{account.received}</span>
                              </div>
                              <div className="flex items-center gap-1 text-black">
                                <span className="text-purple-500">●</span>
                                <span>{account.rate}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Marketing Copy */}
                  <div className="flex flex-col justify-center space-y-8 p-4">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                        <span className="block">Infinitely</span>
                        <span className="block">Scale Your</span>
                        <span className="block">Outreach with</span>
                        <span className="block bg-gradient-to-r from-blue-500 via-purple-400 to-purple-300 bg-clip-text text-transparent">
                          Unlimited Accounts
                        </span>
                      </h2>
                      <button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-sm font-bold">
                        START FOR FREE
                      </button>
                    </div>
                    <button className="h-8 w-8 rounded-full border-2 border-blue-500 text-blue-500 flex items-center justify-center">
                      <IoMdAdd className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Updated Unibox Section */}
        <AnimatedSection>
          <div className="mt-20 w-full p-4 md:p-8 lg:p-12">
            <div className="min-h-screen flex items-center justify-center p-4">
              <div className="bg-white rounded-lg overflow-hidden max-w-6xl w-full">
                <div className="p-8 text-center">
                  <h1 className="mb-6 text-4xl font-bold tracking-tight text-black md:text-6xl">
                    Respond to Leads and Close Deals{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      with Unibox
                    </span>
                  </h1>
                  <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
                    Managing 1 inbox is easy - with Unibox you can manage tens or hundreds of inboxes simultaneously. 
                    Mark leads as positive or negative, forward or respond to them to book meetings and close deals from one simple inbox.
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                    START FOR FREE
                  </button>
                </div>

                {/* Unibox Interface Image */}
                <div className="bg-white p-4">
                  <Image
                    src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a6dde57859f7455bbc850_mmf.png"
                    alt="Unibox Interface"
                    width={800}
                    height={600}
                    className="rounded-lg mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* New Campaign Analytics Section */}
        <AnimatedSection>
          <div className="mt-20 w-full p-4 md:p-8 lg:p-12">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-black">
                    Optimize with{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                      Campaign Analytics
                    </span>
                  </h2>
                  <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    See exactly what's working with our advanced analytics dashboard. Pause the campaigns that need work and scale the ones that are performing well.
                  </p>
                  <button className="inline-flex items-center justify-center rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 py-4">
                    START FOR FREE
                  </button>
                </div>
                <div className="relative">
                  <Image
                    src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a7adc2a2fb86063ea5d1e_Group%2040736-min.png"
                    alt="Analytics Dashboard"
                    width={800}
                    height={600}
                    className="rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Community Section */}
        <AnimatedSection>
          <div className="mt-20 w-full p-4 md:p-8 lg:p-12">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-black">
                    Learn From The Best in{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                      Our Private Community
                    </span>
                  </h2>
                  <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get access to our Private Facebook Community where you can learn from other similar entrepreneurs. See what's working and not working for them. Ask questions and get answers from our experts.
                  </p>
                  <button className="inline-flex items-center justify-center rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 py-4">
                    START FOR FREE
                  </button>
                </div>
                <div className="relative">
                  <Image
                    src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a802c44a03f584a8e8c7e_Group%2040714-min-p-500.png"
                    alt="Private Facebook Community Interface"
                    width={800}
                    height={600}
                    className="rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Sales Accelerator Section */}
        <AnimatedSection>
          <div className="mt-20 w-full p-4 md:p-8 lg:p-12">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="relative">
                  <Image
                    src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a802c44a03f584a8e8c7e_Group%2040714-min-p-500.png"
                    alt="Instantly Sales Accelerator Interface"
                    width={800}
                    height={600}
                    className="rounded-lg"
                    priority
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-black">
                    Eliminate Guesswork with{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                      Instantly Sales Accelerator
                    </span>
                  </h2>
                  <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get access to 50+ docs and SOPs, 600+ email outreach templates, all our set-up guides and step-by-step instructions on exactly how we set up campaigns + our Sales Vault which includes 200+ Email outreach strategies and Tools we're using.
                  </p>
                  <button className="inline-flex items-center justify-center rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 py-4">
                    START FOR FREE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="mt-20 w-full p-4 md:p-8 lg:p-12 bg-gradient-to-b from-white via-blue-50 to-purple-50">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-black mb-4">
                Get started for free
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Send your first outreach campaign today.
              </p>
              <button className="inline-flex items-center justify-center rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 py-4">
                START FOR FREE
              </button>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}