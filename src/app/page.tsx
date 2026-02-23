import Header from '@/sections/Header'
import Footer from '@/sections/Footer'
import Container from '@/components/ui/Container'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16">
          <Container>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Landing Starter
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-600">
              Paste Builder-generated sections into <code>src/sections</code>{' '}
              and compose them here.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
