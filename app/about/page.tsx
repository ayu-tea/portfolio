"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Code, BarChart3, Database, Brain, ExternalLink } from "lucide-react"

export default function AboutPage() {
  const academics = [
    {
      degree: "B.Tech (Data Science)",
      school: "Usha Mittal Institute of Technology",
      period: "2022 – 2026",
      details: "CGPA: 7.446",
    },
    {
      degree: "HSC",
      school: "Reliance Foundation School EM, Nagothane",
      period: "2022",
      details: "Final Exam: 76%",
    },
    {
      degree: "SSC",
      school: "Reliance Foundation School EM, Nagothane",
      period: "2020",
      details: "Final Exam: 90.2%",
    },
  ]

  const skills = [
    {
      title: "Programming",
      icon: Code,
      color: "text-purple-400",
      items: ["Python", "SQL"],
    },
    {
      title: "Business Intelligence",
      icon: BarChart3,
      color: "text-purple-400",
      items: ["Power BI", "DAX", "Excel", "Dashboard Development"],
    },
    {
      title: "Data Sources",
      icon: Database,
      color: "text-purple-400",
      items: ["Microsoft SQL Server", "Oracle", "SAP HANA", "ASPEN ODBC"],
    },
    {
      title: "Data Science",
      icon: Brain,
      color: "text-purple-400",
      items: ["Machine Learning", "NLP", "TF-IDF", "Recommendation Systems", "Data Visualization"],
    },
  ]

  const professionalExperience = [
    {
      title: "Summer Intern – Analytics",
      company: "Reliance Industries Limited",
      period: "Feb 2026 – May 2026",
      location: "Nagothane Manufacturing Division",
      bullets: [
        "Worked on Power BI-based analytics and reporting projects for operational monitoring, approval tracking, job monitoring, and process performance review.",
        "Connected and transformed data from SQL Server, Oracle, SAP HANA, ASPEN ODBC, and Excel to build structured dashboard views and reporting models.",
        "Created DAX measures, KPIs, slicers, aging buckets, and visual summaries to analyze pending requests, approval delays, aging trends, bottlenecks, and responsible stages.",
        "Improved dashboard clarity to help stakeholders review approval flows, identify pending stages, and understand process delays.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Imarticus Learning",
      period: "April 2025",
      location: "Andheri, Mumbai",
      bullets: [
        "Collected, cleaned, and analyzed datasets using Python to extract meaningful insights.",
        "Performed exploratory data analysis to understand trends and anomalies.",
        "Created visualizations using Matplotlib, Seaborn, and Power BI.",
        "Presented insights and findings in a structured, stakeholder-facing manner.",
      ],
    },
  ]

  const projectsList = [
    { name: "The Book Chamber", href: "/projects#the-book-chamber-book-recommendation-web-app-on-going" },
    { name: "Amazon Books NLP", href: "/projects#amazon-top-100-books-nlp-genre-classification" },
    { name: "Loan Status Prediction", href: "/projects#estimation-of-loan-status" },
    { name: "Supply Chain Risk Analysis", href: "/projects#supply-chain-risk-analysis" },
    { name: "Hotel Reservation Analysis Dashboard", href: "/projects#hotel-reservation-analysis-dashboard" },
    { name: "Employee Wellness & Mental Health Analysis", href: "/projects#employee-wellness-mental-health-analysis" },
    { name: "Sales and Customer Insights", href: "/projects#sales-and-customer-insights" },
    { name: "Fraud Detection in Financial Transactions", href: "/projects#fraud-detection-in-financial-transactions" },
  ]

  const publications = [
    {
      title: "Human-Centered and Accountable AI for Digital Knowledge Platforms: A Case Study of TBC",
      type: "Publication",
      details:
        "Published in IJIRT, Volume 12, Issue 10, March 2026; focused on responsible, human-centered AI for digital knowledge platforms.",
      link: "https://ijirt.org/article?manuscript=194570",
    },
    {
      title: "AI-Driven Climate-Smart Agriculture",
      type: "Conference Paper",
      details:
        "Presented at the International Conference on Climate Change; explored the use of AI, machine learning, and digital twins for sustainable and climate-resilient agriculture.",
      link: "https://lnkd.in/dK7_mxXt",
    },
  ]

  const certifications = [
    {
      title: "Winter Internship Technical Training Program",
      organization: "India Space Lab",
      details:
        "Completed training across drone technology, CanSat & CubeSat systems, Remote Sensing & GIS, Rocketry, and Disaster Management.",
    },
  ]

  const coCurricularExperience = [
    {
      title: "UMIT Writers' Club",
      company: "Vice Editor-in-Chief",
      period: "Dec 2022 – Jul 2025",
      location: "UMIT",
      bullets: [
        "Worked as a Graphics Team Member before serving as Vice Editor-in-Chief.",
        "Helped organize literary fests and contributed to 3 college magazines and 2 college brochures.",
      ],
    },
    {
      title: "UMIT Student Council",
      company: "Junior Council Member",
      period: "Nov 2022 – Aug 2024",
      location: "UMIT",
      bullets: [
        "Served as Class Representative in the first year and later as Student Representative.",
        "Helped organize annual college fests, celebrations, and other college-related activities.",
      ],
    },
  ]

    return (
    <div className="pt-16 bg-background">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>

          {/* ---------- Intro ---------- */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/ayutee-profile.jpg"
                  alt="Ayutee Parange"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                Final-year B.Tech Data Science student with experience in
                machine learning, NLP, business intelligence, and data
                analytics.
              </p>

              <p className="text-muted-foreground">
                I enjoy building data-driven solutions ranging from predictive
                models and recommendation systems to interactive dashboards for
                business decision-making.
              </p>
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg">
                <a
                  href="https://drive.google.com/drive/folders/1A0hkt8csQawy47rgtmL3Bg3RlE5KFGQi?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* ---------- Education ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-blue-400 text-center">
            Education
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {academics.map((edu, i) => (
              <Card key={i} className="bg-blue-400/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.details}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {edu.period}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ---------- Technical Skills ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-purple-400 text-center">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skills.map((group) => {
              const Icon = group.icon

              return (
                <Card key={group.title} className="bg-purple-400/5">
                  <CardHeader>
                    <CardTitle
                      className={`flex items-center gap-3 ${group.color}`}
                    >
                      <Icon className="h-5 w-5" />
                      {group.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* ---------- Professional Experience ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-amber-400 text-center">
            Professional Experience
          </h2>

          <div className="space-y-6 mb-16">
            {professionalExperience.map((job, i) => (
              <Card key={i} className="bg-amber-400/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{job.title}</h3>

                  <p className="text-sm text-muted-foreground">
                    {job.company} · {job.period}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    {job.location}
                  </p>

                  <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-1">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ---------- Projects ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-emerald-400 text-center">
            Projects
          </h2>

          <Card className="bg-emerald-400/5 mb-16">
            <CardContent className="p-6 flex flex-wrap gap-3">
              {projectsList.map((p) => (
                <Button key={p.name} asChild variant="outline" size="sm">
                  <Link href={p.href}>{p.name}</Link>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* ---------- Publications ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-cyan-400 text-center">
            Publications
          </h2>

          <div className="space-y-6 mb-16">
            {publications.map((paper, i) => (
              <Card key={i} className="bg-cyan-400/5">
                <CardContent className="p-6">
                  <Badge className="mb-4">{paper.type}</Badge>

                  <h3 className="text-lg font-semibold mb-3">
                    {paper.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {paper.details}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(paper.link, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Publication
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ---------- Certifications ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-sky-400 text-center">
            Certifications
          </h2>

          <div className="space-y-6 mb-16">
            {certifications.map((cert, i) => (
              <Card key={i} className="bg-sky-400/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{cert.title}</h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {cert.organization}
                  </p>

                  <p className="text-sm text-muted-foreground mt-3">
                    {cert.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ---------- Leadership & Co-Curricular ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-orange-400 text-center">
            Leadership & Co-Curricular
          </h2>

          <div className="space-y-6">
            {coCurricularExperience.map((item, i) => (
              <Card key={i} className="bg-orange-400/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="text-sm text-muted-foreground">
                    {item.company} · {item.period}
                  </p>

                  <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-1">
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
