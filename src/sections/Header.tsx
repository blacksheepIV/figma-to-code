import Container from '@/components/ui/Container'

export default function Header() {
  return (
    <header className="border-b">
      <Container className="flex h-16 items-center justify-between">
        <div className="font-semibold">Logo</div>
        <nav className="flex gap-4 text-sm">
          <a className="hover:underline" href="#features">
            Features
          </a>
          <a className="hover:underline" href="#pricing">
            Pricing
          </a>
          <a className="hover:underline" href="#faq">
            FAQ
          </a>
        </nav>
      </Container>
    </header>
  )
}
