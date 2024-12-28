import ReactMarkdown from "react-markdown";

export default function PrivacyPolicy() {
  const markdown = `
  # Privacy Policy

  Effective Date: 12/28/24
  
  ## Introduction
  
  Tovadock ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website tovadock.com (the "Website"). Please read this policy carefully to understand our views and practices regarding your personal data.
  
  ## Information We Collect
  
  We may collect the following types of information:
  
  ### 1. Personal Information
  
  - Name
  - Email address
  - Phone number
  - Billing and shipping address
  - Payment information (if applicable)
  
  ### 2. Non-Personal Information
  
  - IP address
  - Browser type
  - Device information
  - Pages visited and time spent on the Website
  - Cookies and tracking technologies
  
  ### 3. Information You Provide
  
  - Information submitted through contact forms or account creation
  - Feedback or inquiries
  
  ## How We Use Your Information
  
  We use the information we collect to:
  
  - Provide and manage our services
  - Process payments and transactions
  - Respond to inquiries and customer support requests
  - Send promotional materials (with your consent)
  - Improve Website functionality and user experience
  - Comply with legal obligations
  
  ## Sharing Your Information
  
  We do not sell your personal information. However, we may share your information with:
  
  - Service providers assisting in Website operations (e.g., hosting, payment processing)
  - Legal authorities, if required by law
  - Other third parties with your explicit consent
  
  ## Cookies and Tracking Technologies
  
  Our Website uses cookies and similar tracking technologies to enhance user experience. You can manage your cookie preferences through your browser settings.&#x20;
  
  ## Data Security
  
  We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.
  
  ## Your Rights
  
  Depending on your location, you may have the following rights:
  
  - Access your personal information
  - Request correction of inaccurate data
  - Request deletion of your data
  - Opt out of data processing or marketing communications
  
  To exercise these rights, please contact us at [tovadockllc@gmail.com](mailto\:tovadockllc@gmail.com).
  
  ## Third-Party Links
  
  Our Website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
  
  ## Updates to This Privacy Policy
  
  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
  
  ## Contact Us
  
  If you have questions or concerns about this Privacy Policy, please contact us at:
  
  Tovadock\
  tovadockllc\@gmail.com
  
  Thank you for trusting us with your information.  
`;
  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
