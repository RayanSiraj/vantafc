import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pt-24">
      <Container>
        <p className="eyebrow text-gold">404</p>
        <h1 className="mt-6 font-display text-7xl sm:text-9xl">Out of bounds.</h1>
        <p className="mt-6 text-lg text-mist">That page doesn&rsquo;t exist.</p>
        <ButtonLink href="/" className="mt-10">Back to home</ButtonLink>
      </Container>
    </section>
  );
}
