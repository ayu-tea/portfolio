"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Code, BarChart3, Database, Brain } from "lucide-react"

export default function AboutPage() {
  const academics = [
    {
      degree: "B.Tech (Data Science)",
      school: "Usha Mittal Institute of Technology",
      period: "2022 – Present",
      details: "CGPA (avg): 7.446",
    },
    {
      degree: "HSC",
      school: "Reliance Foundation School",
      period: "2022",
      details: "Final Exam: 76%",
    },
    {
      degree: "SSC",
      school: "Reliance Foundation School",
      period: "2020",
      details: "Final Exam: 90.2%",
    },
  ]

  const projectsList = [
    { name: "Estimation Of Loan Status", href: "/projects#estimation-of-loan-status" },
    { name: "Amazon Top 100 Books – NLP & Genre Classification", href: "/projects#amazon-top-100-books-nlp-genre-classification" },
    { name: "Supply Chain Risk Analysis", href: "/projects#supply-chain-risk-analysis" },
    { name: "Hotel Reservation Analysis Dashboard", href: "/projects#hotel-reservation-analysis-dashboard" },
    { name: "Employee Wellness & Mental Health Analysis", href: "/projects#employee-wellness-mental-health-analysis" },
    { name: "Sales and Customer Insights", href: "/projects#sales-and-customer-insights" },
    { name: "The Book Chamber (On-going)", href: "/projects#the-book-chamber-book-recommendation-web-app-on-going" },
    { name: "Fraud Detection in Financial Transactions (On-going)", href: "/projects#fraud-detection-in-financial-transactions" },
  ]

  const professionalExperience = [
    {
      title: "Data Analytics Intern",
      company: "Reliance Industries Limited",
      period: "Feb 2026 – Present",
      location: "Nagothane Manufacturing Division",
      bullets: [
        "Developed interactive Power BI dashboards for operational reporting, workflow monitoring, and performance analysis.","Connected and integrated data from Microsoft SQL Server, Oracle Database, SAP HANA, AspenTech (ODBC), and Excel-based data sources.",
        "Designed KPI-driven dashboards to track request volumes, approval status, process aging, turnaround times, pending actions, and operational bottlenecks.", 
        "Built data models, custom DAX measures, drill-through reports, trend analyses, and dynamic visualizations to support business decision-making.", 
        "Analyzed process performance by identifying delays, monitoring workflow progression, and highlighting areas requiring attention through actionable insights.","Collaborated with stakeholders to gather reporting requirements, validate business logic, ensure data accuracy, and deliver leadership-ready dashboards.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Imarticus Learning",
      period: "April 2025",
      location: "Andheri, Mumbai",
      bullets: [
        "Collected, cleaned, and analyzed datasets using Python to extract meaningful insights.",
        "Performed exploratory data analysis (EDA) to understand trends and anomalies.",
        "Created visualizations using Matplotlib, Seaborn, and Power BI.",
        "Collaborated on real-world business problem solving using data-driven approaches.",
        "Presented insights and findings in a structured, stakeholder-facing manner.",
      ],
    },
  ]

  const coCurricularExperience = [
    {
      title: "Vice-Chief Editor",
      company: "UMIT Writers' Club",
      period: "Aug 2024 – Present",
      location: "UMIT",
      bullets: [
        "Planned and organized content for the annual college magazine.",
        "Edited and reviewed student submissions for clarity and quality.",
        "Coordinated with writers and designers to maintain consistency.",
        "Mentored junior members in writing and editing workflows.",
      ],
    },
    {
      title: "Graphics Member",
      company: "UMIT Writers' Club",
      period: "2022 – 2024",
      location: "UMIT",
      bullets: [
        "Designed posters, banners, and promotional material.",
        "Worked on magazine layouts and college brochure visuals.",
      ],
    },
    {
      title: "Class Representative",
      company: "UMIT Student Council",
      period: "2022 – 2024",
      location: "UMIT",
      bullets: [
        "Acted as liaison between students and faculty.",
        "Coordinated academic and cultural activities.",
      ],
    },
  ]

  const skills = [
    {
      title: "Core Data Skills",
      icon: Brain,
      color: "text-purple-400",
      items: ["Data Cleaning & EDA", "Feature Engineering", "Statistical Analysis", "Model Evaluation"],
    },
    {
      title: "Machine Learning & NLP",
      icon: Code,
      color: "text-purple-400",
      items: ["Classification & Clustering", "TF-IDF & Text Vectorization", "Sentiment Analysis", "Model Interpretability"],
    },
    {
      title: "Data Analysis & BI",
      icon: BarChart3,
      color: "text-purple-400",
      items: ["SQL (Joins, Aggregations)", "Power BI Dashboards", "Business Insights"],
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "text-purple-400",
      items: ["MySQL", "MongoDB", "Python (Pandas, NumPy, Scikit-learn)"],
    },
  ]

  const achievements = [
    "Wrote a paper on 'AI Driven Climate Smart Agriculture' for the International Conference on Climate Change.",
    "Maharashtra Talent Search Exam 2018 – Taluka Prize.",
    "Silverzone Olympiads & NSTSE medalist.",
    "Participation in PRMO, NTSE, Scholarship & Homi Bhabha Science Exams.",
  ]

  const certifications = [
    "Introduction to Career Skills in Data Analytics – LinkedIn.",
    "Learning Data Analytics – NASBA & LinkedIn.",
    "Learning Data Science: Understanding the Basics – LinkedIn.",
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
                <img src="/images/ayutee-profile.jpg" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                Final-year Data Science student with a strong foundation in machine learning, NLP, and applied analytics.
              </p>
              <p className="text-muted-foreground">
                Hands-on experience building end-to-end ML and NLP projects, SQL-driven analysis, and business-facing dashboards.
                Actively seeking entry-level Data Scientist roles while remaining open to analytical roles requiring depth.
              </p>

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
          <h2 className="text-2xl font-semibold mb-8 text-blue-400">Education</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {academics.map((edu, i) => (
              <Card key={i} className="bg-blue-400/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.details}</p>
                  <p className="text-xs text-muted-foreground mt-2">{edu.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ---------- Projects ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-emerald-400">Projects</h2>
          <Card className="bg-emerald-400/5 mb-16">
            <CardContent className="p-6 flex flex-wrap gap-3">
              {projectsList.map((p) => (
                <Button key={p.name} asChild variant="outline" size="sm">
                  <Link href={p.href}>{p.name}</Link>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* ---------- Skills ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-purple-400">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skills.map((group) => {
              const Icon = group.icon

              return (
                <Card key={group.title} className="bg-purple-400/5">
                  <CardHeader>
                    <CardTitle className={`flex items-center gap-3 ${group.color}`}>
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
          <h2 className="text-2xl font-semibold mb-8 text-amber-400">
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
                  <ul className="list-disc list-inside mt-3 text-muted-foreground">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ---------- Co-Curricular Experience ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-orange-400">
            Co-Curricular Experience
          </h2>
          <div className="space-y-6 mb-16">
            {coCurricularExperience.map((job, i) => (
              <Card key={i} className="bg-orange-400/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {job.company} · {job.period}
                  </p>
                  <ul className="list-disc list-inside mt-3 text-muted-foreground">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ---------- Achievements ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-pink-400">Achievements</h2>
          <Card className="bg-pink-400/5 mb-12">
            <CardContent className="p-6 flex flex-wrap gap-3">
              {achievements.map((a, i) => (
                <Badge key={i} variant="secondary">
                  {a}
                </Badge>
              ))}
            </CardContent>
          </Card>

          {/* ---------- Certifications ---------- */}
          <h2 className="text-2xl font-semibold mb-8 text-cyan-400">Certifications</h2>
          <Card className="bg-cyan-400/5">
            <CardContent className="p-6 flex flex-wrap gap-3">
              {certifications.map((c, i) => (
                <Badge key={i} variant="secondary">
                  {c}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}