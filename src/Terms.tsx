import ReactMarkdown from "react-markdown";

export default function TermsOfService() {
  const markdown = `
# Terms of Use

**Effective Date:** 12/28/24

Welcome to Tovadock("we," "our," or "us"). By accessing or using our website, tovadock.com (the "Site"), you agree to comply with and be bound by these Terms of Use ("Terms"). If you do not agree, please do not use the Site.

---

## 1. **Acceptance of Terms**

These Terms govern your use of the Site. By accessing or using the Site, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.

---

## 2. **Eligibility**

You must be at least 18 years old or have the permission of a parent or guardian to use this Site. By using the Site, you affirm that you meet this requirement.

---

## 3. **Use of the Site**

You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:

- Use the Site in a way that violates any applicable law or regulation.
- Engage in unauthorized access, hacking, or tampering with the Site.
- Transmit viruses or malicious software.
- Copy, distribute, or reproduce any part of the Site without our written consent.

---

## 4. **Intellectual Property**

All content on the Site, including text, graphics, logos, images, and software, is the property of [Your Business Name] or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without prior written permission.

---

## 5. **Third-Party Links**

The Site may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of these third parties. Access them at your own risk.

---

## 6. **User Content**

If you submit content to the Site (e.g., reviews, comments, or uploads), you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and display your content. You are solely responsible for your submissions and must ensure they do not violate any laws or infringe on third-party rights.

---

## 7. **Disclaimer of Warranties**

The Site is provided "as is" and "as available." We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Site will be error-free, secure, or uninterrupted.

---

## 8. **Limitation of Liability**

To the fullest extent permitted by law, [Your Business Name] and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site.

---

## 9. **Indemnification**

You agree to indemnify and hold harmless Tovadock, its officers, employees, and affiliates from any claims, losses, damages, liabilities, costs, or expenses arising from your use of the Site or breach of these Terms.

---

## 10. **Governing Law**

These Terms are governed by the laws of California, without regard to conflict of law principles. Any disputes arising under these Terms will be resolved exclusively in the courts located in Alameda County.

---

## 11. **Changes to the Terms**

We reserve the right to update or modify these Terms at any time. Changes will be effective upon posting on the Site. Your continued use of the Site constitutes your acceptance of the revised Terms.

---

## 12. **Contact Us**

If you have any questions about these Terms, please contact us at:

Tovadock\
[tovadockllc@gmail.com](mailto\:tovadockllc@gmail.com)
`;
  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
