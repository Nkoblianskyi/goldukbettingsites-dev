import { Header } from "@/components/header"
import { PageLayout, ContentBlock } from "@/components/page-layout"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="Privacy Policy"
        subtitle="Last updated: 2026 - goldukbettingsites.com"
      >

        {[
          {
            title: "Introduction",
            content:
              "goldukbettingsites.com is committed to protecting the privacy of our visitors. This policy explains how we collect, use and protect your personal information in accordance with UK GDPR and the Data Protection Act 2018.",
          },
          {
            title: "Information We Collect",
            list: [
              "IP address and approximate location",
              "Browser type and operating system",
              "Pages visited and time spent on site",
              "Cookie preferences and interaction data",
            ],
          },
          {
            title: "How We Use Your Data",
            list: [
              "To personalise content and recommendations",
              "To analyse browsing patterns and improve the site",
              "To respond to contact requests",
              "To comply with legal obligations under UK GDPR",
            ],
          },
          {
            title: "Data Protection",
            content:
              "We implement appropriate technical and organisational security measures to protect your data against unauthorised access, loss or alteration, including SSL/TLS encryption and firewalls.",
          },
          {
            title: "Your Rights",
            content:
              "Under UK GDPR you have the right to access your data, request rectification, erasure or portability, object to processing, and restrict processing. To exercise any right, contact us at the address below.",
          },
          {
            title: "Cookies",
            content:
              "We use cookies to improve your experience. For full details please see our Cookie Policy. You can manage your preferences via the cookie banner or your browser settings.",
          },
          {
            title: "Contact",
            content: "For privacy enquiries: privacy@goldukbettingsites.com",
          },
        ].map((section, i) => (
          <ContentBlock key={i} title={section.title}>
            {section.content && (
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">{section.content}</p>
            )}
            {section.list && (
              <ul className="space-y-2" role="list">
                {section.list.map((item, j) => (
                  <li key={j} className="font-sans text-sm text-muted-foreground flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-[7px]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </ContentBlock>
        ))}

      </PageLayout>
    </div>
  )
}
