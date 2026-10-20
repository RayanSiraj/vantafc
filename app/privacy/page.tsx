import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Privacy Policy", description: "Vanta FC privacy policy.", path: "/privacy" });

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>What we collect</h2>
      <p>When you join the interest list, we collect the details you provide: parent/guardian name, email, phone, player name and age, soccer experience, program interest, and any message.</p>
      <h2>How we use it</h2>
      <p>We use this information only to contact you about Vanta FC programs, registration, and events. We do not sell your information.</p>
      <p>Interest-list submissions are delivered to Vanta FC by email using FormSubmit, a third-party form delivery service.</p>
      <h2>Your choices</h2>
      <p>You can ask us to update or remove your information at any time by contacting Vanta FC.</p>
    </LegalPage>
  );
}
