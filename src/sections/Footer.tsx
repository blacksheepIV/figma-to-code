import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-600">
          © {new Date().getFullYear()} Your Brand
        </p>
        <div className="flex gap-4 text-sm">
          <a className="hover:underline" href="/privacy">
            Privacy
          </a>
          <a className="hover:underline" href="/terms">
            Terms
          </a>
        </div>
      </Container>
    </footer>
  )
}
