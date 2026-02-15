'use client'
import { useState } from 'react'
import Image from 'next/image'
import { companyConfig } from '@/config/company'

export default function ClientLogin() {
  const [showLost, setShowLost] = useState(false)
  const [showCreate, setShowCreate] = useState(false)

  const handleGoogleLogin = (e: React.MouseEvent) => {
    e.preventDefault()
    alert('Google authentication is not ready yet :)')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy">
      <div className="brand-card w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image
            src={companyConfig.branding.logo}
            alt="Bonneval Solutions"
            width={140}
            height={36}
            className="h-8 w-auto"
          />
        </div>
        <h1 className="text-2xl font-heading font-bold mb-6 text-center text-white">Client Login</h1>
        {!showLost && !showCreate && (
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-surface-2 border border-white/[0.06] text-white placeholder-white/30 rounded-input focus:ring-2 focus:ring-gold focus:border-transparent transition-colors" required />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/60 mb-2">Password</label>
              <input type="password" id="password" name="password" className="w-full px-4 py-3 bg-surface-2 border border-white/[0.06] text-white placeholder-white/30 rounded-input focus:ring-2 focus:ring-gold focus:border-transparent transition-colors" required />
            </div>
            <button type="submit" className="w-full btn-primary">Login</button>
            <button onClick={handleGoogleLogin} className="w-full btn-secondary mt-2">Login with Google</button>
            <div className="flex justify-between mt-4 text-sm">
              <button type="button" className="text-blue-light hover:underline" onClick={() => setShowLost(true)}>Lost password?</button>
              <button type="button" className="text-blue-light hover:underline" onClick={() => setShowCreate(true)}>Create account</button>
            </div>
          </form>
        )}
        {showLost && (
          <form className="space-y-6">
            <h2 className="text-lg font-heading font-semibold mb-2 text-white">Reset Password</h2>
            <div>
              <label htmlFor="lost-email" className="block text-sm font-medium text-white/60 mb-2">Email</label>
              <input type="email" id="lost-email" name="lost-email" className="w-full px-4 py-3 bg-surface-2 border border-white/[0.06] text-white placeholder-white/30 rounded-input focus:ring-2 focus:ring-gold focus:border-transparent transition-colors" required />
            </div>
            <button type="submit" className="w-full btn-primary">Send reset link</button>
            <button type="button" className="w-full btn-secondary mt-2" onClick={() => setShowLost(false)}>Back to login</button>
          </form>
        )}
        {showCreate && (
          <form className="space-y-6">
            <h2 className="text-lg font-heading font-semibold mb-2 text-white">Request Account Creation</h2>
            <div>
              <label htmlFor="create-email" className="block text-sm font-medium text-white/60 mb-2">Email</label>
              <input type="email" id="create-email" name="create-email" className="w-full px-4 py-3 bg-surface-2 border border-white/[0.06] text-white placeholder-white/30 rounded-input focus:ring-2 focus:ring-gold focus:border-transparent transition-colors" required />
            </div>
            <div>
              <label htmlFor="create-name" className="block text-sm font-medium text-white/60 mb-2">Full Name</label>
              <input type="text" id="create-name" name="create-name" className="w-full px-4 py-3 bg-surface-2 border border-white/[0.06] text-white placeholder-white/30 rounded-input focus:ring-2 focus:ring-gold focus:border-transparent transition-colors" required />
            </div>
            <button type="submit" className="w-full btn-primary">Request Account</button>
            <button type="button" className="w-full btn-secondary mt-2" onClick={() => setShowCreate(false)}>Back to login</button>
          </form>
        )}
      </div>
    </div>
  )
}
