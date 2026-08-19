import type { Metadata } from "next";
import { LegalHeader, LegalBody, LegalSection, LegalList } from "@/components/sections/legal/LegalLayout";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Curehub",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHeader title="Privacy Policy" />
      <LegalBody>
        <LegalSection heading="Introduction and Scope">
          <p className="text-body text-ink/80">
            Curehub (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) offers
            genetics‑based wellness insights by analyzing users&rsquo; DNA and methylation data.
            Our Service is designed for general well‑being and is not a medical diagnosis or
            treatment. This Privacy Policy explains how we collect, use, store, share and protect
            your personal information and genetic data when you visit the Curehub website or use
            our associated services (the &ldquo;Services&rdquo;). By using our Services, you
            acknowledge that you have read and agree to this policy.
            <br />
            If you do not agree with any part of this policy, discontinue use of the Services.
          </p>
          <p className="text-body text-ink/80">
            We take privacy seriously. Industry best‑practice guidance for direct‑to‑consumer
            genetic testing recommends that companies provide clear information about data
            collection, consent, use, onward transfer, access, security and retention/deletion
            practices, and we have drafted this policy with that standard in mind. Genetic and
            methylation data are inherently sensitive because they may reveal health risks or
            family information, so our policy reflects heightened protections.
          </p>
        </LegalSection>

        <LegalSection heading="Types of Information We Collect">
          <div className="flex flex-col gap-fluid-lg">
            <LegalSection heading="1. Registration and Account Information" level="h5">
              <p className="text-body text-ink/80">
                When you create an account, place an order or contact customer support, you
                provide details such as your name, date of birth, billing and shipping addresses,
                payment information, email address, phone number and account password. We also
                collect any information you submit through contact forms or surveys (for example,
                fitness goals or lifestyle information).
              </p>
            </LegalSection>

            <LegalSection heading="2. Genetic and Methylation Data" level="h5">
              <p className="text-body text-ink/80">
                If you purchase a Curehub kit or upload data, we receive your DNA or methylation
                sample and associated raw data. Your DNA sample and data remain your property;
                they are stored on secure, encrypted systems, may be destroyed at your request and
                will never be shared without your explicit consent. The laboratory processing your
                sample collects identifiers (sample number, date of birth and, in most cases, your
                name) needed to meet quality standards.
              </p>
            </LegalSection>

            <LegalSection heading="3. Self‑Reported and Lifestyle Information" level="h5">
              <p className="text-body text-ink/80">
                You may choose to provide additional information through questionnaires, such as
                nutrition goals, exercise preferences or other health‑related details.
                Participation in research surveys is optional and subject to separate informed
                consent.
              </p>
            </LegalSection>

            <LegalSection heading="4. Device and Usage Information" level="h5">
              <p className="text-body text-ink/80">
                We automatically collect technical data when you visit our website or use our
                mobile application. This includes IP addresses, device identifiers, browser type,
                operating system, pages visited and usage patterns. Cookies and similar
                technologies help us understand how users interact with the site, diagnose
                technical issues and improve the user experience. For example, we use analytics
                services like Google Analytics, but we do not share genetic or personal health
                information with advertisers.
              </p>
            </LegalSection>

            <LegalSection heading="5. Information from Third Parties" level="h5">
              <p className="text-body text-ink/80">
                Our laboratories and service providers may send us data necessary to provide the
                Services (e.g., sample barcodes or test results). We may also receive demographic
                or health information from authorized healthcare partners, but such data is
                treated as protected health information (PHI) and is processed under strict
                confidentiality.
              </p>
            </LegalSection>
          </div>
        </LegalSection>

        <LegalSection heading="How We Use Information">
          <p className="text-body text-ink/80">
            We use your personal information and genetic data to:
          </p>
          <LegalList
            ordered
            items={[
              <>
                <strong className="text-ink">Provide our Services.</strong> We use your data to
                process orders, ship kits, create accounts, authenticate log‑ins, analyze DNA and
                methylation samples, generate wellness reports and display results to you. Our
                analysis is limited to the markers we report; we do not test for diseases, and
                results cannot identify you or be used by insurers.
              </>,
              <>
                <strong className="text-ink">Improve and develop our products.</strong> We may use
                aggregated or anonymized data to enhance existing reports, develop new insights and
                improve the performance of our website and applications. De‑identified information
                is not subject to this policy.
              </>,
              <>
                <strong className="text-ink">Communicate with you.</strong> We send transactional
                messages (order confirmations, account notices) and may send marketing emails
                about new products or updates. You can unsubscribe from promotional communications
                at any time.
              </>,
              <>
                <strong className="text-ink">Conduct optional research.</strong> We may invite you
                to participate in research studies. Such studies require separate informed consent
                describing the purpose, risks, benefits and confidentiality provisions. You are
                not required to participate, and participation (or refusal) does not affect your
                access to our core Services.
              </>,
              <>
                <strong className="text-ink">Comply with legal obligations and enforce our
                rights.</strong> We may process data to meet legal requirements, protect against
                fraud, enforce our Terms and defend against claims.
              </>,
            ]}
          />
          <p className="text-body text-ink/80">
            We do not use personal information for automated decision‑making that produces legal
            or similarly significant effects. We also do not sell your individual-level genetic or
            health data, and we do not share it with insurers, employers or public databases.
          </p>
        </LegalSection>

        <LegalSection heading="Sharing and Disclosure of Information">
          <p className="text-body text-ink/80">
            We share personal and genetic data only as described below:
          </p>
          <LegalList
            ordered
            items={[
              <>
                <strong className="text-ink">Service providers and contractors.</strong> We use
                vetted laboratories, payment processors, cloud hosting providers and customer
                support vendors. They act under our instructions and are contractually bound to
                process data only to provide services to Curehub.
              </>,
              <>
                <strong className="text-ink">
                  Authorized third parties with your explicit consent.
                </strong>{" "}
                We will not transfer your individual‑level genetic or personal data to any third
                party (other than our service providers) unless you explicitly agree. Separate
                consent is required for research partnerships and other secondary uses.
              </>,
              <>
                <strong className="text-ink">Aggregated or de‑identified information.</strong> We
                may share summary statistics or anonymized insights that no longer identify
                individuals.
              </>,
              <>
                <strong className="text-ink">Legal compliance.</strong> We may disclose
                information when required to comply with a valid court order, subpoena or legal
                process. We will assess each request and challenge overbroad or inappropriate
                demands.
              </>,
              <>
                <strong className="text-ink">Business transitions.</strong> In the event of a
                merger, acquisition or sale of assets, your data will remain subject to this
                policy; material changes will not occur without notice and your consent.
              </>,
            ]}
          />
          <p className="text-body text-ink/80">
            Curehub will never sell, lease or rent your individual-level genetic data or personal
            information, and we do not share customer data with public databases or insurers.
          </p>
        </LegalSection>

        <LegalSection heading="Data Security">
          <p className="text-body text-ink/80">
            We employ administrative, technical and physical measures to protect personal and
            genetic data against unauthorized access, disclosure and destruction. These measures
            include:
          </p>
          <LegalList
            items={[
              <>
                <strong className="text-ink">
                  Anonymization, encryption and data segmentation:
                </strong>{" "}
                Identifiers (name, contact details) are stored separately from genetic and
                phenotypic data and are assigned random IDs to prevent re‑identification.
              </>,
              <>
                <strong className="text-ink">Access controls:</strong> Access to sensitive data is
                limited to authorized personnel based on job role.
              </>,
              <>
                <strong className="text-ink">Secure facilities and networks:</strong> Laboratories
                storing DNA samples follow international quality and access control standards, and
                we employ intrusion detection and prevention systems to detect threats.
              </>,
              <>
                <strong className="text-ink">Regular audits and assessments:</strong> We review our
                security practices and update them as technology evolves. De‑identification and
                aggregation methods are applied to reduce the risk of re‑identification.
              </>,
            ]}
          />
          <p className="text-body text-ink/80">
            No system is completely secure. However, we implement and regularly review safeguards
            designed to protect your data. If we become aware of a data breach, we will notify
            affected individuals as required by law.
          </p>
        </LegalSection>

        <LegalSection heading="Data Retention and Sample Destruction">
          <p className="text-body text-ink/80">
            We retain personal information only for as long as necessary to provide the Services
            and fulfill the purposes outlined in this policy, or as required by law. Your DNA
            sample and data can be destroyed at any time at your request. When you delete your
            Curehub account, we will delete or de‑identify your personal information unless
            retention is required for legal reasons (e.g., accounting or compliance).
          </p>
        </LegalSection>

        <LegalSection heading="Your Rights and Choices">
          <p className="text-body text-ink/80">
            Depending on your jurisdiction, you may have the following rights regarding your
            personal information:
          </p>
          <LegalList
            items={[
              <>
                <strong className="text-ink">Access:</strong> You can request a copy of the data
                we hold about you.
              </>,
              <>
                <strong className="text-ink">Rectification:</strong> You can correct inaccurate or
                incomplete information.
              </>,
              <>
                <strong className="text-ink">Deletion:</strong> You can request deletion of your
                account and data at any time.
              </>,
              <>
                <strong className="text-ink">Restriction and objection:</strong> You can restrict
                or object to certain processing activities, including marketing.
              </>,
              <>
                <strong className="text-ink">Data portability:</strong> You can request that we
                transfer your data to another organization (where technically feasible).
              </>,
              <>
                <strong className="text-ink">Complaint:</strong> You have the right to lodge a
                complaint with a data protection authority. EU residents can contact their local
                supervisory authority.
              </>,
            ]}
          />
          <p className="text-body text-ink/80">
            You also choose when and with whom to share your information (e.g., family members or
            healthcare professionals). You may update preferences, withdraw consent or delete your
            account through the Curehub account settings or by contacting us.
          </p>
        </LegalSection>

        <LegalSection heading="International Data Transfers">
          <p className="text-body text-ink/80">
            Curehub is based in the European Union but may use service providers located in other
            countries. When we transfer personal data outside the European Economic Area
            (&ldquo;EEA&rdquo;), we rely on adequate safeguards such as European Commission
            approved standard contractual clauses or the recipient&rsquo;s certification under an
            approved framework. We take steps to ensure that your data receives a level of
            protection equivalent to that afforded in your home jurisdiction.
          </p>
        </LegalSection>

        <LegalSection heading="Cookies and Tracking Technologies">
          <p className="text-body text-ink/80">
            We use cookies, pixels and similar technologies to collect usage data and improve our
            Services. Some cookies are necessary for the site to function, while others help us
            analyze traffic and personalize content. You can manage cookie preferences through
            your browser settings or by using cookie‑management tools on our website.
          </p>
        </LegalSection>

        <LegalSection heading="Third‑Party Links and Services">
          <p className="text-body text-ink/80">
            Our website may contain links to third‑party websites or services. We do not control
            and are not responsible for the privacy practices of those third parties. We encourage
            you to review the privacy policies of any external sites you visit.
          </p>
        </LegalSection>

        <LegalSection heading="Children’s Privacy">
          <p className="text-body text-ink/80">
            Our Services are intended for adults. You must be at least 18 years old to purchase a
            kit or create an account, or have legal authority to act on behalf of a minor. If we
            learn that we have collected personal information from a child without appropriate
            consent, we will delete the information.
          </p>
        </LegalSection>

        <LegalSection heading="Changes to This Privacy Policy">
          <p className="text-body text-ink/80">
            We may update this Privacy Policy from time to time. Material changes will not be made
            without first providing prominent notice and obtaining your consent if data will be
            used in any manner inconsistent with the terms initially provided. For example, we
            will post a notice on our website and, where appropriate, send email notifications
            before changes take effect. Continued use of the Services after the effective date of
            an updated policy constitutes acceptance of the changes.
          </p>
        </LegalSection>

        <LegalSection heading="Contact Us">
          <p className="text-body text-ink/80">
            If you have questions about this Privacy Policy, want to exercise your rights, or wish
            to request deletion of your genetic sample or data, please contact our Team:
          </p>
          <p className="text-body text-ink/80">
            Email: info@curehub.eu
            <br />
            Postal mail: Curehub Lab Kft., Alispán utca 8 C/D. Fsz. 5. ajtó 2030 Érd, Hungary
          </p>
        </LegalSection>

        <LegalSection heading="Governing Law">
          <p className="text-body text-ink/80">
            To the extent permitted by applicable law, this Privacy Policy is governed by the law
            of the jurisdiction that has the most significant connection to the Services and your
            use of them, without regard to conflict‑of‑laws principles. Mandatory local laws and
            consumer protections in your country of residence will take precedence where required.
            Any disputes arising under this Privacy Policy will be handled in accordance with the
            dispute resolution procedures described in our Terms and Conditions.
          </p>
        </LegalSection>
      </LegalBody>
      <ContactSection />
    </>
  );
}
