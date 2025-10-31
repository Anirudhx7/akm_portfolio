import Link from "next/link"
import Image from "next/image"
import { Shield, Terminal, Code, Server, Lock, Globe, ChevronRight, Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/contact-form"
import { BlogPreview } from "@/components/blog-preview"
import { ProjectCard } from "@/components/project-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { CertificationCard } from "@/components/certification-card"
import { TerminalText } from "@/components/terminal-text"
import { SectionHeading } from "@/components/section-heading"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <section
        id="hero"
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background via-background/95 to-background relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <span className="text-primary">Anirudh Mehandru</span>
                  <br />
                  <TerminalText text="Cybersecurity Professional" typingSpeed={70} className="text-foreground" />
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Protecting digital assets and securing networks with over 8 years of experience in penetration
                  testing, vulnerability assessment, and security architecture.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Get in Touch
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-pulse-glow">
                <div className="absolute inset-1 rounded-full bg-background">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Anirudh Mehandru, Cybersecurity Professional"
                      width={300}
                      height={300}
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            tag="About Me"
            title="Security is my passion"
            description="I'm a dedicated cybersecurity professional with expertise in offensive security, threat intelligence, and security architecture. My mission is to help organizations build robust security postures and protect their critical assets from evolving threats."
          />
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Offensive Security Expert</h3>
                    <p className="text-muted-foreground">
                      Specialized in penetration testing, red teaming, and vulnerability assessments to identify and
                      remediate security weaknesses.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Security Architecture</h3>
                    <p className="text-muted-foreground">
                      Designing and implementing secure infrastructure and systems that protect against modern threats.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Incident Response</h3>
                    <p className="text-muted-foreground">
                      Experienced in handling security incidents, from detection to containment and recovery.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-border/40">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Cybersecurity professional at work"
                  width={600}
                  height={400}
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <SectionHeading
            tag="Skills"
            title="Technical Expertise"
            description="My diverse skill set spans across various cybersecurity domains, enabling me to tackle complex security challenges."
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Lock className="mr-2 h-5 w-5 text-primary" />
                  Penetration Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Web application testing, network penetration, API security assessment, and social engineering.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">Burp Suite</Badge>
                  <Badge variant="secondary">Metasploit</Badge>
                  <Badge variant="secondary">OWASP ZAP</Badge>
                </div>
              </CardFooter>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5 text-primary" />
                  Security Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Designing secure systems, zero trust architecture, cloud security, and secure SDLC implementation.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Azure</Badge>
                  <Badge variant="secondary">Zero Trust</Badge>
                </div>
              </CardFooter>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Terminal className="mr-2 h-5 w-5 text-primary" />
                  Security Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Developing security tools, automating security testing, and building CI/CD security pipelines.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Bash</Badge>
                  <Badge variant="secondary">Jenkins</Badge>
                </div>
              </CardFooter>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-primary" />
                  Threat Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analyzing threat actors, tracking emerging threats, and implementing proactive defenses.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">MITRE ATT&CK</Badge>
                  <Badge variant="secondary">OSINT</Badge>
                  <Badge variant="secondary">Threat Hunting</Badge>
                </div>
              </CardFooter>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-primary" />
                  Incident Response
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Developing IR plans, leading response teams, and conducting forensic investigations.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">Digital Forensics</Badge>
                  <Badge variant="secondary">Malware Analysis</Badge>
                  <Badge variant="secondary">SIEM</Badge>
                </div>
              </CardFooter>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5 text-primary" />
                  Secure Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Code review, secure coding practices, and application security testing.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">SAST/DAST</Badge>
                  <Badge variant="secondary">DevSecOps</Badge>
                  <Badge variant="secondary">Secure SDLC</Badge>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            tag="Projects"
            title="Featured Work"
            description="A selection of my recent cybersecurity projects and contributions."
          />
          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="pentest">Penetration Testing</TabsTrigger>
                <TabsTrigger value="architecture">Security Architecture</TabsTrigger>
                <TabsTrigger value="automation">Security Automation</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Enterprise Zero Trust Architecture"
                  description="Designed and implemented a zero-trust security architecture for a Fortune 500 company"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["Zero Trust", "Cloud Security"]}
                  link="#"
                  category="architecture"
                  caseStudy={{
                    challenge:
                      "The client, a Fortune 500 financial services company, was facing increasing security threats and compliance requirements. Their traditional perimeter-based security model was no longer sufficient to protect against sophisticated attacks and insider threats.",
                    approach:
                      "I conducted a comprehensive assessment of the existing security architecture and developed a phased implementation plan for transitioning to a zero-trust model. This included identity verification, device validation, network segmentation, and least-privilege access controls.",
                    solution:
                      "Implemented a comprehensive zero-trust architecture that included strong identity management with MFA, microsegmentation of the network, continuous monitoring and validation, and just-in-time access provisioning. Integrated with existing cloud infrastructure and on-premises systems.",
                    outcome:
                      "The implementation resulted in a 75% reduction in security incidents, improved compliance posture, and enhanced visibility into network traffic and access patterns. The client was able to meet regulatory requirements while improving operational efficiency.",
                    tools: ["Azure AD", "Palo Alto Networks", "Okta", "Cisco ISE", "Splunk SIEM"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
                <ProjectCard
                  title="Security Automation Framework"
                  description="Developed an open-source security automation framework for continuous security testing"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["Python", "DevSecOps"]}
                  link="#"
                  category="automation"
                  caseStudy={{
                    challenge:
                      "Development teams were struggling to integrate security testing into their CI/CD pipelines, resulting in vulnerabilities being discovered late in the development lifecycle when they were costly to fix.",
                    approach:
                      "I designed a modular, extensible framework that could integrate with popular CI/CD tools and orchestrate various security testing tools. The framework was built with a focus on developer experience and actionable results.",
                    solution:
                      "Created an open-source automation framework in Python that orchestrates security tools like SAST, DAST, SCA, and container scanning. The framework provides unified reporting, prioritization of findings, and integration with issue tracking systems.",
                    outcome:
                      "The framework has been adopted by multiple organizations and has contributed to a shift-left approach to security. Teams using the framework have reported finding vulnerabilities 3x earlier in the development process and a 60% reduction in security issues reaching production.",
                    tools: ["Python", "Docker", "Jenkins", "GitLab CI", "OWASP ZAP", "Trivy", "SonarQube"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
                <ProjectCard
                  title="Critical Infrastructure Protection"
                  description="Led a red team assessment of critical infrastructure for a government agency"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["ICS Security", "Red Team"]}
                  link="#"
                  category="pentest"
                  caseStudy={{
                    challenge:
                      "A government agency responsible for critical infrastructure needed to assess the security of their industrial control systems (ICS) and operational technology (OT) networks against sophisticated threat actors.",
                    approach:
                      "I led a red team that developed a comprehensive assessment methodology specifically for ICS/OT environments. We combined traditional penetration testing techniques with specialized knowledge of industrial protocols and systems.",
                    solution:
                      "Conducted a multi-phase assessment that included network architecture review, passive reconnaissance, controlled exploitation, and physical security testing. Developed custom tools to safely test industrial systems without disrupting operations.",
                    outcome:
                      "Identified critical vulnerabilities in both IT and OT systems that could have led to operational disruption. Provided detailed remediation guidance that helped the agency implement defense-in-depth strategies and improve their security posture.",
                    tools: ["Kali Linux", "Wireshark", "Nmap", "Modbus Scanner", "Custom ICS Testing Tools"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
                <ProjectCard
                  title="Financial Services API Security"
                  description="Conducted comprehensive API security assessment for a major financial institution"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["API Security", "OWASP Top 10"]}
                  link="#"
                  category="pentest"
                  caseStudy={{
                    challenge:
                      "A major financial institution was rapidly expanding their API ecosystem to support mobile and partner applications. They needed to ensure these APIs were secure against common attacks and complied with financial regulations.",
                    approach:
                      "I developed a custom API security testing methodology based on the OWASP API Security Top 10 and financial industry requirements. This included automated scanning, manual testing, and business logic analysis.",
                    solution:
                      "Performed comprehensive security testing of REST and GraphQL APIs, including authentication, authorization, data validation, rate limiting, and encryption. Developed custom scripts to test for business logic flaws and data leakage.",
                    outcome:
                      "Discovered several critical vulnerabilities including broken object-level authorization, excessive data exposure, and insufficient rate limiting. All issues were remediated before the APIs were released to production, preventing potential data breaches.",
                    tools: ["Burp Suite", "Postman", "OWASP ZAP", "Custom Python Scripts", "JWT Tool"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
                <ProjectCard
                  title="Cloud Security Posture Management"
                  description="Implemented automated cloud security posture management for multi-cloud environment"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["AWS", "Azure", "GCP"]}
                  link="#"
                  category="architecture"
                  caseStudy={{
                    challenge:
                      "A rapidly growing technology company was using multiple cloud providers (AWS, Azure, and GCP) with inconsistent security controls and limited visibility into their cloud security posture.",
                    approach:
                      "I designed a comprehensive cloud security strategy that included automated compliance monitoring, security posture management, and remediation workflows across all cloud environments.",
                    solution:
                      "Implemented a multi-cloud security posture management platform that continuously monitored cloud resources for compliance violations and security risks. Developed custom policies and automated remediation for high-priority issues.",
                    outcome:
                      "Achieved a 90% reduction in cloud security misconfigurations within three months. Improved compliance with industry standards (CIS, NIST, PCI) and enabled the security team to focus on strategic initiatives rather than manual compliance checks.",
                    tools: ["Terraform", "AWS Config", "Azure Policy", "GCP Security Command Center", "CloudCustodian"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
                <ProjectCard
                  title="Threat Hunting Platform"
                  description="Built a custom threat hunting platform integrating multiple data sources"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["Python", "ELK Stack", "MITRE ATT&CK"]}
                  link="#"
                  category="automation"
                  caseStudy={{
                    challenge:
                      "A large enterprise security operations center (SOC) was struggling to proactively identify threats due to data silos and manual threat hunting processes.",
                    approach:
                      "I designed a threat hunting platform that integrated data from multiple sources and provided analysts with tools to create, share, and automate hunting hypotheses based on the MITRE ATT&CK framework.",
                    solution:
                      "Developed a custom platform using Python, Elasticsearch, and Kibana that ingested data from SIEM, EDR, network monitoring, and threat intelligence feeds. Created a library of hunting playbooks mapped to MITRE ATT&CK techniques.",
                    outcome:
                      "The platform enabled the SOC to discover several previously undetected compromises and significantly reduced the time to detect threats. Hunting efficiency improved by 70%, allowing the team to conduct more frequent and thorough hunts.",
                    tools: ["Python", "Elasticsearch", "Kibana", "Jupyter Notebooks", "MITRE ATT&CK Framework"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
              </TabsContent>
              <TabsContent value="pentest" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Critical Infrastructure Protection"
                  description="Led a red team assessment of critical infrastructure for a government agency"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["ICS Security", "Red Team"]}
                  link="#"
                  category="pentest"
                  caseStudy={{
                    challenge:
                      "A government agency responsible for critical infrastructure needed to assess the security of their industrial control systems (ICS) and operational technology (OT) networks against sophisticated threat actors.",
                    approach:
                      "I led a red team that developed a comprehensive assessment methodology specifically for ICS/OT environments. We combined traditional penetration testing techniques with specialized knowledge of industrial protocols and systems.",
                    solution:
                      "Conducted a multi-phase assessment that included network architecture review, passive reconnaissance, controlled exploitation, and physical security testing. Developed custom tools to safely test industrial systems without disrupting operations.",
                    outcome:
                      "Identified critical vulnerabilities in both IT and OT systems that could have led to operational disruption. Provided detailed remediation guidance that helped the agency implement defense-in-depth strategies and improve their security posture.",
                    tools: ["Kali Linux", "Wireshark", "Nmap", "Modbus Scanner", "Custom ICS Testing Tools"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
                <ProjectCard
                  title="Financial Services API Security"
                  description="Conducted comprehensive API security assessment for a major financial institution"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["API Security", "OWASP Top 10"]}
                  link="#"
                  category="pentest"
                  caseStudy={{
                    challenge:
                      "A major financial institution was rapidly expanding their API ecosystem to support mobile and partner applications. They needed to ensure these APIs were secure against common attacks and complied with financial regulations.",
                    approach:
                      "I developed a custom API security testing methodology based on the OWASP API Security Top 10 and financial industry requirements. This included automated scanning, manual testing, and business logic analysis.",
                    solution:
                      "Performed comprehensive security testing of REST and GraphQL APIs, including authentication, authorization, data validation, rate limiting, and encryption. Developed custom scripts to test for business logic flaws and data leakage.",
                    outcome:
                      "Discovered several critical vulnerabilities including broken object-level authorization, excessive data exposure, and insufficient rate limiting. All issues were remediated before the APIs were released to production, preventing potential data breaches.",
                    tools: ["Burp Suite", "Postman", "OWASP ZAP", "Custom Python Scripts", "JWT Tool"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
              </TabsContent>
              <TabsContent value="architecture" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Enterprise Zero Trust Architecture"
                  description="Designed and implemented a zero-trust security architecture for a Fortune 500 company"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["Zero Trust", "Cloud Security"]}
                  link="#"
                  category="architecture"
                  caseStudy={{
                    challenge:
                      "The client, a Fortune 500 financial services company, was facing increasing security threats and compliance requirements. Their traditional perimeter-based security model was no longer sufficient to protect against sophisticated attacks and insider threats.",
                    approach:
                      "I conducted a comprehensive assessment of the existing security architecture and developed a phased implementation plan for transitioning to a zero-trust model. This included identity verification, device validation, network segmentation, and least-privilege access controls.",
                    solution:
                      "Implemented a comprehensive zero-trust architecture that included strong identity management with MFA, microsegmentation of the network, continuous monitoring and validation, and just-in-time access provisioning. Integrated with existing cloud infrastructure and on-premises systems.",
                    outcome:
                      "The implementation resulted in a 75% reduction in security incidents, improved compliance posture, and enhanced visibility into network traffic and access patterns. The client was able to meet regulatory requirements while improving operational efficiency.",
                    tools: ["Azure AD", "Palo Alto Networks", "Okta", "Cisco ISE", "Splunk SIEM"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
                <ProjectCard
                  title="Cloud Security Posture Management"
                  description="Implemented automated cloud security posture management for multi-cloud environment"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["AWS", "Azure", "GCP"]}
                  link="#"
                  category="architecture"
                  caseStudy={{
                    challenge:
                      "A rapidly growing technology company was using multiple cloud providers (AWS, Azure, and GCP) with inconsistent security controls and limited visibility into their cloud security posture.",
                    approach:
                      "I designed a comprehensive cloud security strategy that included automated compliance monitoring, security posture management, and remediation workflows across all cloud environments.",
                    solution:
                      "Implemented a multi-cloud security posture management platform that continuously monitored cloud resources for compliance violations and security risks. Developed custom policies and automated remediation for high-priority issues.",
                    outcome:
                      "Achieved a 90% reduction in cloud security misconfigurations within three months. Improved compliance with industry standards (CIS, NIST, PCI) and enabled the security team to focus on strategic initiatives rather than manual compliance checks.",
                    tools: ["Terraform", "AWS Config", "Azure Policy", "GCP Security Command Center", "CloudCustodian"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
              </TabsContent>
              <TabsContent value="automation" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Security Automation Framework"
                  description="Developed an open-source security automation framework for continuous security testing"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["Python", "DevSecOps"]}
                  link="#"
                  category="automation"
                  caseStudy={{
                    challenge:
                      "Development teams were struggling to integrate security testing into their CI/CD pipelines, resulting in vulnerabilities being discovered late in the development lifecycle when they were costly to fix.",
                    approach:
                      "I designed a modular, extensible framework that could integrate with popular CI/CD tools and orchestrate various security testing tools. The framework was built with a focus on developer experience and actionable results.",
                    solution:
                      "Created an open-source automation framework in Python that orchestrates security tools like SAST, DAST, SCA, and container scanning. The framework provides unified reporting, prioritization of findings, and integration with issue tracking systems.",
                    outcome:
                      "The framework has been adopted by multiple organizations and has contributed to a shift-left approach to security. Teams using the framework have reported finding vulnerabilities 3x earlier in the development process and a 60% reduction in security issues reaching production.",
                    tools: ["Python", "Docker", "Jenkins", "GitLab CI", "OWASP ZAP", "Trivy", "SonarQube"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
                <ProjectCard
                  title="Threat Hunting Platform"
                  description="Built a custom threat hunting platform integrating multiple data sources"
                  image="/placeholder.svg?height=200&width=300"
                  tags={["Python", "ELK Stack", "MITRE ATT&CK"]}
                  link="#"
                  category="automation"
                  caseStudy={{
                    challenge:
                      "A large enterprise security operations center (SOC) was struggling to proactively identify threats due to data silos and manual threat hunting processes.",
                    approach:
                      "I designed a threat hunting platform that integrated data from multiple sources and provided analysts with tools to create, share, and automate hunting hypotheses based on the MITRE ATT&CK framework.",
                    solution:
                      "Developed a custom platform using Python, Elasticsearch, and Kibana that ingested data from SIEM, EDR, network monitoring, and threat intelligence feeds. Created a library of hunting playbooks mapped to MITRE ATT&CK techniques.",
                    outcome:
                      "The platform enabled the SOC to discover several previously undetected compromises and significantly reduced the time to detect threats. Hunting efficiency improved by 70%, allowing the team to conduct more frequent and thorough hunts.",
                    tools: ["Python", "Elasticsearch", "Kibana", "Jupyter Notebooks", "MITRE ATT&CK Framework"],
                    images: ["/placeholder.svg?height=150&width=300", "/placeholder.svg?height=150&width=300"],
                  }}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <SectionHeading
            tag="Certifications"
            title="Professional Credentials"
            description="Industry-recognized certifications that validate my expertise in cybersecurity."
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <CertificationCard
              title="OSCP"
              fullName="Offensive Security Certified Professional"
              issuer="Offensive Security"
              date="2019"
              description="Hands-on penetration testing certification requiring candidates to successfully attack and compromise various systems."
              verificationLink="https://www.credential.net"
              icon={<Shield className="h-12 w-12 text-primary" />}
              details={{
                overview:
                  "The OSCP is a hands-on penetration testing certification that requires candidates to pass a 24-hour practical exam where they must successfully compromise multiple systems in a lab environment.",
                skills: [
                  "Network penetration testing",
                  "Web application security assessment",
                  "Client-side attacks",
                  "Privilege escalation techniques",
                  "Exploit development and modification",
                ],
                significance:
                  "The OSCP is highly respected in the industry for its practical, hands-on approach. It demonstrates real-world offensive security skills and the ability to identify and exploit vulnerabilities in various systems.",
                validityPeriod: "Lifetime certification with no renewal requirements",
              }}
            />
            <CertificationCard
              title="CISSP"
              fullName="Certified Information Systems Security Professional"
              issuer="(ISC)²"
              date="2020"
              description="Globally recognized certification demonstrating expertise across eight security domains."
              verificationLink="https://www.isc2.org/Certifications/CISSP/CISSP-Verification"
              icon={<Shield className="h-12 w-12 text-primary" />}
              details={{
                overview:
                  "The CISSP is a vendor-neutral certification that validates expertise across eight domains of information security, from security and risk management to security operations.",
                skills: [
                  "Security and risk management",
                  "Asset security",
                  "Security architecture and engineering",
                  "Communication and network security",
                  "Identity and access management",
                  "Security assessment and testing",
                  "Security operations",
                  "Software development security",
                ],
                significance:
                  "The CISSP is one of the most prestigious security certifications and is often required for senior security positions. It demonstrates a broad understanding of information security principles and practices.",
                validityPeriod: "3-year certification cycle requiring 120 CPE credits for renewal",
              }}
            />
            <CertificationCard
              title="CEH"
              fullName="Certified Ethical Hacker"
              issuer="EC-Council"
              date="2018"
              description="Certification focused on attack vectors, vulnerability detection, and ethical hacking methodologies."
              verificationLink="https://aspen.eccouncil.org/Verify"
              icon={<Shield className="h-12 w-12 text-primary" />}
              details={{
                overview:
                  "The CEH certification focuses on ethical hacking techniques, tools, and methodologies used to identify and address security vulnerabilities from an attacker's perspective.",
                skills: [
                  "Footprinting and reconnaissance",
                  "Scanning networks",
                  "Enumeration techniques",
                  "System hacking",
                  "Malware threats",
                  "Sniffing and social engineering",
                  "Denial of service attacks",
                  "Session hijacking",
                ],
                significance:
                  "The CEH is widely recognized in the industry and demonstrates knowledge of attack vectors and vulnerability detection. It's often a starting point for professionals entering the offensive security field.",
                validityPeriod: "3-year certification cycle requiring ECE credits or retesting for renewal",
              }}
            />
            <CertificationCard
              title="AWS Security"
              fullName="AWS Certified Security - Specialty"
              issuer="Amazon Web Services"
              date="2021"
              description="Validates expertise in AWS security services, securing workloads, and implementing security controls."
              verificationLink="https://aws.amazon.com/verification"
              icon={<Shield className="h-12 w-12 text-primary" />}
              details={{
                overview:
                  "The AWS Security Specialty certification validates expertise in securing AWS workloads and implementing AWS security services according to best practices.",
                skills: [
                  "Incident response in AWS",
                  "Logging and monitoring",
                  "Infrastructure security",
                  "Identity and access management",
                  "Data protection mechanisms",
                  "Automation of security controls",
                ],
                significance:
                  "As organizations increasingly move to the cloud, this certification demonstrates specialized knowledge in securing cloud environments, specifically on the AWS platform. It's valuable for security professionals working with cloud infrastructure.",
                validityPeriod: "3-year certification cycle requiring recertification",
              }}
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            tag="Testimonials"
            title="What Clients Say"
            description="Feedback from clients and colleagues about my work and expertise."
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Alex's penetration testing uncovered critical vulnerabilities that our internal team missed. His detailed reports and remediation guidance were invaluable for strengthening our security posture."
              name="Sarah Chen"
              title="CISO"
              company="FinTech Solutions Inc."
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="The zero trust architecture Alex designed has transformed our security posture. We've seen a 70% reduction in security incidents since implementation and our compliance audits have never been smoother."
              name="Michael Rodriguez"
              title="CTO"
              company="Enterprise Systems"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Alex's security automation framework has streamlined our DevSecOps pipeline. What used to take days now happens automatically with each code commit, allowing us to release secure code faster than ever."
              name="Jennifer Park"
              title="DevOps Lead"
              company="SaaS Platform"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <SectionHeading
            tag="Blog"
            title="Security Insights"
            description="Sharing knowledge, tutorials, and analysis on the latest cybersecurity trends and vulnerabilities."
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <BlogPreview
              title="Understanding Log4j Vulnerabilities"
              excerpt="A deep dive into the Log4j vulnerability, how it works, and steps to mitigate the risk in your environment. This critical vulnerability affects millions of systems worldwide and requires immediate attention."
              date="March 15, 2023"
              readTime="8 min"
              category="Vulnerability Analysis"
              image="/placeholder.svg?height=200&width=300"
              slug="/blog/log4j-vulnerability"
              author={{
                name: "Anirudh Mehandru",
                avatar: "/placeholder.svg?height=100&width=100",
              }}
            />
            <BlogPreview
              title="Implementing Zero Trust: A Practical Guide"
              excerpt="Step-by-step guidance on implementing a zero trust architecture in your organization, from assessment to deployment. Learn how to move beyond perimeter-based security to a model that continuously validates every access request."
              date="February 2, 2023"
              readTime="12 min"
              category="Security Architecture"
              image="/placeholder.svg?height=200&width=300"
              slug="/blog/zero-trust-guide"
              author={{
                name: "Anirudh Mehandru",
                avatar: "/placeholder.svg?height=100&width=100",
              }}
            />
            <BlogPreview
              title="API Security Best Practices"
              excerpt="Essential security practices for protecting your APIs from common attacks and vulnerabilities. This comprehensive guide covers authentication, authorization, rate limiting, input validation, and more to help you secure your API endpoints."
              date="January 10, 2023"
              readTime="10 min"
              category="Web Security"
              image="/placeholder.svg?height=200&width=300"
              slug="/blog/api-security"
              author={{
                name: "Anirudh Mehandru",
                avatar: "/placeholder.svg?height=100&width=100",
              }}
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/blog">
              <Button variant="outline">
                View All Articles
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            tag="Contact"
            title="Get in Touch"
            description="Interested in working together? Let's discuss how I can help secure your organization."
          />
          <div className="mx-auto grid max-w-3xl gap-6 py-12 lg:grid-cols-2">
            <ContactForm />
            <div className="flex flex-col gap-4">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Alternative ways to reach me.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div className="text-sm">anirudh.mehandru@example.com</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div className="text-sm">linkedin.com/in/anirudhmehandru</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <div className="text-sm">github.com/anirudhmehandru-security</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                  <CardDescription>Currently available for:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Security consulting projects
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Security architecture design
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Penetration testing engagements
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Security training and workshops
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
