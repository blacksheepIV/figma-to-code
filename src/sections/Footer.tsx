import Container from '@/components/ui/Container'
import Link from 'next/link'
export default function Footer() {
  return (
         <footer className="bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-6 pt-14 pb-8">
          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-10 border-b border-white/10">
            {/* Brand column */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L11.5 6.5H17L12.5 10L14.5 16L9 12.5L3.5 16L5.5 10L1 6.5H6.5L9 1Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-[17px] text-white tracking-tight">StudioVerse</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                <span className="font-bold text-white">StudioVerse</span> is an AI-powered platform that makes content creation effortless, delivering stunning, professional results.
              </p>
            </div>

            {/* Tools */}
            <div className="flex flex-col gap-4">
              <p className="font-bold text-sm text-white">Tools</p>
              <ul className="flex flex-col gap-3">
                {["AI Caption", "Text to Video", "Video to Reels", "Script Downloader", "Text to Speech"].map((item) => (
                  <li key={item}>
                    <Link to="/features" className="text-sm text-white/60 hover:text-white transition-colors duration-200">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div className="flex flex-col gap-4">
              <p className="font-bold text-sm text-white">Community</p>
              <ul className="flex flex-col gap-3">
                {["AI Gallery", "Feature Requests"].map((item) => (
                  <li key={item}>
                    <Link to="/features" className="text-sm text-white/60 hover:text-white transition-colors duration-200">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn */}
            <div className="flex flex-col gap-4">
              <p className="font-bold text-sm text-white">Learn</p>
              <ul className="flex flex-col gap-3">
                {["Blog", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors duration-200">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <p className="font-bold text-sm text-white">Company</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Pricing", to: "/pricing" },
                  { label: "Contact Us", to: "/about" },
                  { label: "Terms & Conditions", to: "/about" },
                  { label: "Privacy Policy", to: "/about" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.to} className="text-sm text-white/60 hover:text-white transition-colors duration-200">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
            <p className="text-xs text-white/40 order-2 sm:order-1">©2025 StudioVerse Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 order-1 sm:order-2">
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-white transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="text-white/60 hover:text-white transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="black"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="text-white/60 hover:text-white transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.12a4.85 4.85 0 01-1-.43z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}
