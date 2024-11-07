"use client"

import { useState } from 'react'
import { FiSettings } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { BiMailSend } from 'react-icons/bi'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { RiSpamLine } from 'react-icons/ri'

export default function EmailWarmupDashboard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-100 to-green-100 p-6 rounded-3xl shadow-xl">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Warmup Emails</h2>
          <button 
            className="text-blue-500 hover:text-blue-600"
            aria-label="Settings"
          >
            <FiSettings className="w-5 h-5" />
          </button>
        </div>

        <div 
          className="bg-green-500 text-white p-4 rounded-xl mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center">
            <div className="mr-3">
              {isHovered ? (
                <HiOutlineMail className="w-8 h-8 animate-bounce" />
              ) : (
                <HiOutlineMail className="w-8 h-8" />
              )}
            </div>
            <div>
              <p className="font-bold text-lg">99% of your warmup emails</p>
              <p>landed in inbox</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <StatCard
            icon={<BiMailSend className="w-6 h-6 text-blue-500" />}
            label="WARMUP EMAIL SENT"
            value="10065"
            bgColor="bg-blue-50"
          />
          <StatCard
            icon={<MdOutlineMarkEmailUnread className="w-6 h-6 text-green-500" />}
            label="LANDED IN INBOX"
            value="9652"
            bgColor="bg-green-50"
          />
          <StatCard
            icon={<RiSpamLine className="w-6 h-6 text-purple-500" />}
            label="SAVED FROM SPAM"
            value="125"
            bgColor="bg-purple-50"
          />
          <StatCard
            icon={<BiMailSend className="w-6 h-6 text-red-500 transform rotate-180" />}
            label="WARMUP RECEIVED"
            value="6523"
            bgColor="bg-red-50"
          />
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  bgColor: string
}

function StatCard({ icon, label, value, bgColor }: StatCardProps) {
  return (
    <div className={`${bgColor} p-3 rounded-xl`}>
      <div className="flex items-center mb-2">
        {icon}
        <span className="ml-2 text-xs font-medium text-gray-500">{label}</span>
      </div>
      <p className="text-xl font-bold text-gray-800">{value}</p>
    </div>
  )
}