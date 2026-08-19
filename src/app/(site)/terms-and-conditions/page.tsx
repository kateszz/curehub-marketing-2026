import type { Metadata } from "next";
import { LegalHeader, LegalBody, LegalSection, LegalList } from "@/components/sections/legal/LegalLayout";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions of Curehub",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <LegalHeader title="Terms and Conditions" />
      <LegalBody>
        <LegalSection heading="1. Acceptance of Terms">
          <p className="text-body text-snow/80">
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the
            Curehub website located at https://curehublab.com and any related platforms or
            services provided by Curehub (together, the &ldquo;Services&rdquo;). By accessing or
            using the Services, you acknowledge that you have read, understood and agree to be
            bound by these Terms. A &ldquo;User&rdquo; is any visitor or registrant of the
            Services. If you do not agree to these Terms, you must immediately discontinue use of
            the Services. Similar to other websites, continued use of our Services constitutes
            acceptance of these Terms.
          </p>
          <p className="text-body text-snow/80">
            We reserve the right to modify, alter or update these Terms at any time. If material
            changes are made, we will post a notice on the website. Your continued use of the
            Services following the posting of changes constitutes your acceptance of such
            changes. We recommend reviewing this page regularly to stay informed of the current
            Terms.
          </p>
        </LegalSection>

        <LegalSection heading="2. About Curehub">
          <p className="text-body text-snow/80">
            Curehub provides wellness-oriented genetic and methylation reporting services. Our
            Services transform complex genetic and methylation data into personalized wellness
            insights. These insights are intended to support general wellbeing and are not
            medical advice. Curehub does not provide medical diagnosis or treatment. The content
            and reports we provide are for informational and educational purposes only, designed
            to help you better understand how your body may respond to nutrition, stress and
            lifestyle factors. Our reports do not consider all possible factors affecting your
            health and should never replace consultation with a qualified healthcare
            professional.
          </p>
          <p className="text-body text-snow/80">
            Your access to the Services is limited to personal, non‑commercial use. You may not
            copy, modify, distribute, sell or lease any part of the Services or their content
            without our written consent. All text, graphics, logos and other materials contained
            on the Services are protected by copyright, trademark or other intellectual‑property
            laws. You obtain a limited license to use the content only for personal,
            non‑commercial purposes.
          </p>
        </LegalSection>

        <LegalSection heading="3. Eligibility and User Obligations">
          <p className="text-body text-snow/80">
            You must be at least 18 years old to use our Services or, if you are providing a
            sample or information on behalf of another individual (such as a minor), you
            represent that you have legal authority to do so. By uploading genetic data or other
            information, you confirm that the sample and data are yours or that you have
            authorization to provide the sample and data. You agree that all information you
            provide will be truthful and accurate.
          </p>
          <p className="text-body text-snow/80">
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activities that occur under your account. If you suspect unauthorized use
            of your account, please notify us immediately. You agree not to use the Services for
            any unlawful purpose or in any way that could damage, disable, overburden or impair
            the operation of the Services or interfere with any other party&rsquo;s use of the
            Services.
          </p>
        </LegalSection>

        <LegalSection heading="4. Not Medical Advice">
          <p className="text-body text-snow/80">
            Curehub is a wellness platform, not a healthcare provider. We do not provide medical,
            diagnostic or treatment services. The information and insights presented in our
            reports are not a substitute for medical advice, diagnosis or treatment from a
            licensed physician or other healthcare professional. Curehub&rsquo;s reports should
            not be interpreted as specific professional medical advice.
          </p>
          <p className="text-body text-snow/80">
            If you have questions about your health or require medical advice, consult a
            qualified healthcare professional. Reliance on any information provided by Curehub is
            solely at your own risk. No advice or information obtained from Curehub shall create
            any warranty beyond those expressly stated in these Terms.
          </p>
        </LegalSection>

        <LegalSection heading="5. Privacy and Data Protection">
          <p className="text-body text-snow/80">
            We take your privacy seriously. Curehub complies with the applicable data protection
            regulations. By using our Services, you acknowledge that such laws regarding the
            collection, use, processing and storage of your information govern our handling of
            your data. Genetic data and reports are treated as your property and will not be
            disclosed or shared with third parties without your explicit consent.
          </p>
          <p className="text-body text-snow/80">
            While we implement and regularly review physical and technical safeguards to protect
            your data, no system can be completely secure. We cannot guarantee that unauthorized
            access, disclosure, misuse or loss of information will never occur. You are
            responsible for maintaining the confidentiality of your login credentials and for
            restricting access to your account.
          </p>
          <p className="text-body text-snow/80">
            For more information on how we handle personal data, please see our Privacy Policy.
          </p>
        </LegalSection>

        <LegalSection heading="6. Third‑Party Links and Content">
          <p className="text-body text-snow/80">
            Our Services may contain links to third‑party websites or resources. These links are
            provided for your convenience only. Curehub does not control and is not responsible
            for the content, products or services available on those websites. The inclusion of a
            link does not imply endorsement by Curehub. You acknowledge and agree that we are not
            liable for any loss or damage that may arise from your use of third‑party websites. We
            encourage you to review the terms and policies of any third‑party websites you visit.
          </p>
        </LegalSection>

        <LegalSection heading="7. Disclaimers">
          <p className="text-body text-snow/80">
            Your use of the Services is at your own risk. The Services and any information
            provided are offered on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis,
            without warranties of any kind, express or implied. Curehub makes no representations
            or warranties regarding the accuracy, completeness, reliability or availability of the
            Services. We do not warrant that the Services will meet your requirements, be
            uninterrupted, timely, secure or error‑free, or that any errors will be corrected.
          </p>
          <p className="text-body text-snow/80">
            Any material downloaded or otherwise obtained through the Services is obtained at your
            own discretion and risk; Curehub is not responsible for any damage to your device or
            loss of data resulting from such downloads. No advice or information obtained from
            Curehub or through the Services shall create any warranty not expressly stated in
            these Terms.
          </p>
        </LegalSection>

        <LegalSection heading="8. Limitation of Liability">
          <p className="text-body text-snow/80">
            To the fullest extent permitted by law, Curehub, its affiliates, and their respective
            employees, officers, directors, agents, contractors and suppliers shall not be liable
            for any direct, indirect, incidental, special, consequential or punitive damages, or
            any loss of profits or revenues, whether incurred directly or indirectly, or any loss
            of data, use or goodwill, arising from your access to or use of the Services, even if
            we have been advised of the possibility of such damages.
          </p>
          <p className="text-body text-snow/80">
            We are not responsible for any personal injury or property damage, of any nature
            whatsoever, resulting from your access to or use of our Services. We do not assume
            responsibility for errors, mistakes or inaccuracies of content, any unauthorized
            access to or use of our servers, or any interruption or cessation of transmission to
            or from our Services.
          </p>
          <p className="text-body text-snow/80">
            Some jurisdictions do not allow the exclusion of implied warranties or limitation of
            liability for consequential or incidental damages, so the above limitations may not
            apply to you. In such jurisdictions, our liability shall be limited to the fullest
            extent permitted by law.
          </p>
        </LegalSection>

        <LegalSection heading="9. Indemnification">
          <p className="text-body text-snow/80">
            You agree to defend, indemnify and hold harmless Curehub, its affiliates and their
            respective directors, officers, employees, agents, contractors and suppliers from and
            against any and all claims, damages, obligations, losses, liabilities, costs or debt,
            and expenses (including attorneys&rsquo; fees) arising from: (a) your use of and
            access to the Services; (b) your violation of any term of these Terms; (c) your
            violation of any third‑party right, including any intellectual property, privacy or
            proprietary right; or (d) your violation of any applicable law.
          </p>
        </LegalSection>

        <LegalSection heading="Partner Indemnification" level="h5">
          <p className="text-body text-snow/80">
            If you are a partner, reseller, corporate wellness provider, laboratory, clinic, or
            other organisation integrating or distributing Curehub Services, you are responsible
            for ensuring that all marketing, sales materials and representations of the Services
            are truthful, non‑misleading and remain within the wellness‑only positioning described
            in these Terms. You agree to indemnify Curehub against any claims, losses,
            liabilities, costs or expenses arising from your misrepresentation of the Services,
            including portraying Curehub as providing diagnostic or clinical outcomes or making
            unsubstantiated medical claims. Misrepresentations by partners can expose both the
            partner and Curehub to significant liability. For example, indemnification clauses can
            require a supplier to compensate a purchasing company for losses caused by
            misrepresentation of an ingredient&rsquo;s properties. In the same way, partners must
            compensate Curehub for any losses, legal fees or damages resulting from their
            misrepresentations or unauthorized rebranding of the Services.
          </p>
        </LegalSection>

        <LegalSection heading="10. Termination">
          <p className="text-body text-snow/80">
            We may terminate or suspend your access to the Services, without prior notice or
            liability, for any reason, including if you breach these Terms. Upon termination, your
            right to use the Services will immediately cease. Sections of these Terms which by
            their nature should survive termination shall survive, including ownership provisions,
            warranty disclaimers, indemnity and limitations of liability.
          </p>
          <p className="text-body text-snow/80">
            You may stop using the Services at any time. If you wish to delete your account or
            request destruction of your genetic sample or data, please contact us. Subject to
            applicable law, we may retain certain information for compliance purposes and internal
            record-keeping.
          </p>
        </LegalSection>

        <LegalSection heading="11. Governing Law and Dispute Resolution">
          <p className="text-body text-snow/80">
            Choice of law clauses exist in contracts to reduce uncertainty and ensure both parties
            know which law applies. In the absence of an agreed governing law, multiple legal
            systems could potentially apply to an international service, creating conflicting
            obligations. To provide clarity while respecting local consumer protections, the
            following rules apply:
          </p>
          <LegalList
            items={[
              <>
                <strong className="text-snow">Governing law.</strong> To the extent permitted by
                applicable law, these Terms shall be governed by and construed in accordance with
                the law of the jurisdiction that has the most significant connection to the
                Services and your use of them, without regard to conflict‑of‑laws principles. If
                your country of residence has mandatory laws that require contracts with residents
                to be governed by its local law, those mandatory provisions will apply.
              </>,
              <>
                <strong className="text-snow">Dispute resolution.</strong> You agree that any
                dispute arising out of or relating to these Terms or your use of the Services
                shall first be addressed through good‑faith negotiations. If a dispute cannot be
                resolved informally, it may be submitted to binding arbitration or, where required
                by law, to a court with jurisdiction as determined by applicable law. Nothing in
                this section restricts either party&rsquo;s right to seek injunctive or other
                equitable relief in any competent jurisdiction. The prevailing party in any such
                proceeding shall be entitled to recover its reasonable legal fees and costs, to
                the extent permitted by law.
              </>,
            ]}
          />
        </LegalSection>

        <LegalSection heading="12. Changes to the Services">
          <p className="text-body text-snow/80">
            Curehub reserves the right to modify or discontinue, temporarily or permanently, the
            Services (or any part thereof) with or without notice. We will not be liable to you or
            any third party for any modification, suspension or discontinuance of the Services.
          </p>
        </LegalSection>

        <LegalSection heading="13. Severability">
          <p className="text-body text-snow/80">
            If any provision of these Terms is determined to be invalid or unenforceable under
            applicable law, that provision shall be enforced to the maximum extent possible and
            the remaining provisions shall continue in full force and effect. Our failure to
            enforce any right or provision of these Terms shall not constitute a waiver of such
            right or provision.
          </p>
        </LegalSection>

        <LegalSection heading="14. Entire Agreement">
          <p className="text-body text-snow/80">
            These Terms, along with our Privacy Policy and any other legal notices published by
            Curehub on the Services, constitute the entire agreement between you and Curehub
            regarding the Services and supersede all prior agreements or understandings, whether
            written or oral, relating to the subject matter herein.
          </p>
        </LegalSection>

        <LegalSection heading="15. Contact Information">
          <p className="text-body text-snow/80">
            If you have any questions about these Terms or wish to exercise your rights regarding
            your data or account, please contact us via the contact details provided on our
            website&rsquo;s contact page.
          </p>
        </LegalSection>

        <LegalSection heading="16. Limitations of These Terms and Additional Documents">
          <p className="text-body text-snow/80">
            These Terms govern your general use of the Services and outline your responsibilities.
            However, they cannot shield Curehub from liability arising from false or misleading
            advertising claims or misrepresentations by you or our partners. For example, the
            Federal Trade Commission has noted that a fine‑print disclosure in a website&rsquo;s
            terms is inadequate to correct a false scientific proof claim. If partners rebrand
            Curehub as a diagnostic tool, such misrepresentations may expose the person or the
            partner making the claim to legal risk.
          </p>
        </LegalSection>
      </LegalBody>
      <ContactSection />
    </>
  );
}
