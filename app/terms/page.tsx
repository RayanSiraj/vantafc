import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Terms", description: "Vanta FC website terms of use.", path: "/terms" });

export default function TermsPage() {
  return (
    <LegalPage title="Terms">
      <h2>Website use</h2>
      <p>This website provides information about Vanta FC. Program details, schedules, and availability are subject to change until officially announced.</p>
      <h2>Interest list</h2>
      <p>Joining the interest list does not register a player for a program or guarantee a place. Registration terms will be provided when programs open.</p>
    </LegalPage>
  );
}
