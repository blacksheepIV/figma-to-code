import Container from '@/components/ui/Container'
import Link from 'next/link'
export default function Header() {
  return (
    <header className="w-full bg-white shadow-header sticky top-0 z-50">
      
      <div className="max-w-[1440px] mx-auto px-5 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L11.5 6.5H17L12.5 10L14.5 16L9 12.5L3.5 16L5.5 10L1 6.5H6.5L9 1Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold text-[17px] text-foreground tracking-tight">StudioVerse</span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/signin"
            className="inline-flex items-center justify-center w-[150px] py-2 px-5 rounded-[68px] bg-[#F0F2FF] text-black font-semibold text-sm leading-6 hover:bg-[#E4E7FF] transition-colors duration-200"
          >
            Sign in
          </Link>
        </div>
        </div>
      
    </header>
    
       
  )
}
