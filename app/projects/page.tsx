"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const toId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

const sectionStyles = {
  ds: {
    header: "text-blue-400",
    title: "text-blue-300",
    accordion: "bg-blue-500/5",
  },
  da: {
    header: "text-emerald-400",
    title: "text-emerald-300",
    accordion: "bg-emerald-500/5",
  },
  as: {
    header: "text-amber-400",
    title: "text-amber-300",
    accordion: "bg-amber-500/5",
  },
} as const

type SectionKey = keyof typeof sectionStyles

export default function ProjectsPage() {
  const projects = [
    {
      title: "Estimation Of Loan Status",
      description:
        "Predicting loan approval using applicant data through preprocessing, feature engineering, and ML modeling.",
      longDescription:
        "This project focuses on predicting whether a loan applicant will be approved (Loan_Status) based on various financial and demographic factors. The project involves data preprocessing, feature engineering, model training, and hyperparameter tuning to achieve high prediction accuracy.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/ayu-tea/loan-approval-prediction-ml",
      demo:
        "https://colab.research.google.com/drive/1QBkQzjSDpd9kRbKM_UcLEw39C088JXyo?usp=sharing",
      category: "Machine Learning",
      section: "ds",
      highlights: [
        "Built a predictive model to estimate loan approval status based on applicant information.",
        "Performed data preprocessing, including handling missing values and label encoding",
        "Conducted exploratory data analysis (EDA) to uncover trends related to income, credit history, and loan amount.",
        "Applied classification algorithms such as Decision Trees, Gaussian NB, and SVM.",
        "Evaluated model performance using accuracy, confusion matrix, precision.",
        "Performed hyperparameter tuning to optimize model performance and reduce overfitting.",
      ],
    },
    {
      title: "Amazon Top 100 Books – NLP & Genre Classification",
      description:
        "NLP-based analysis of Amazon Top-100 books and reviews to extract insights and build an automatic genre classification model.",
      longDescription:
        "This project analyzes Amazon Top-100 trending books along with customer reviews to uncover rating trends, sentiment patterns, and genre-wise insights. It further builds a practical NLP-based genre tagging model using TF-IDF and LinearSVC, demonstrating how review text can be leveraged for automatic metadata enrichment in book platforms.",
      techStack: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "NLTK",
        "TF-IDF",
        "Matplotlib",
        "Seaborn",
      ],
      github: "https://github.com/ayu-tea/amazon-top-100-books-nlp-analysis",
      demo:
        "https://colab.research.google.com/drive/1e-2H9CjntpVPy2zFibnXa0QzSY6HLzb1?usp=sharing",
      category: "Natural Language Processing",
      section: "ds",
      highlights: [
        "Merged and cleaned book metadata with thousands of customer reviews.",
        "Performed detailed EDA on ratings, review trends, and verified reviews.",
        "Applied VADER sentiment analysis to classify reviews as positive, neutral, or negative.",
        "Implemented rule-based genre normalization to handle noisy and multi-genre labels.",
        "Built a TF-IDF + LinearSVC model for automatic genre classification.",
        "Evaluated performance using accuracy, macro & weighted F1-score, and confusion matrix.",
        "Extracted top TF-IDF terms per genre to improve model interpretability.",
        "Designed reusable genre prediction functions suitable for backend integration.",
      ],
    },
    {
      title: "Hybrid Book Recommendation System",
      description:
        "Hybrid content-based recommendation system using NLP, similarity scoring, and rating-weighted ranking.",
      longDescription:
        "This project implements a hybrid content-based book recommendation system using Natural Language Processing (NLP) and similarity scoring techniques. The system allows users to search by title, author, or genre and receive intelligent recommendations based on textual similarity and normalized rating scores. The recommendation engine combines TF-IDF text vectorization, cosine similarity scoring, genre overlap logic, author-based filtering, rating-weighted ranking, and CLI-based pagination for scalable result display. Designed as a modular, explainable recommendation engine suitable for backend integration into larger reading or book-management platforms.",
      techStack: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "TF-IDF",
        "Cosine Similarity",
        "MinMaxScaler",
        "JSON Processing",
      ],
      github: "https://github.com/ayu-tea/book_recommendation_system",
      demo: "https://github.com/ayu-tea/book_recommendation_system#readme",
      category: "Machine Learning",
      section: "ds",
      highlights: [
        "Implemented TF-IDF vectorization with weighted text soup (description ×2).",
        "Applied cosine similarity with 90th percentile threshold filtering.",
        "Balanced similarity and quality using weighted scoring (0.7 similarity + 0.3 normalized rating).",
        "Integrated genre overlap logic and author-based filtering.",
        "Normalized ratings using MinMaxScaler.",
        "Designed CLI-based pagination for scalable result viewing.",
        "Built explainable, cold-start resistant recommendation logic.",
      ],
    },
    {
      title: "Hotel Reservation Analysis Dashboard",
      description:
        "Interactive Power BI dashboard analyzing hotel reservations to reveal booking trends and guest behavior.",
      longDescription:
        "This project features an interactive Power BI dashboard built to analyze hotel reservation data. It focuses on uncovering patterns in bookings, cancellations, guest behavior, and service preferences to support data-driven decision-making in the hospitality industry.",
      techStack: ["Power BI", "Excel"],
      github:
        "https://github.com/ayu-tea/hotel-reservation-analysis-dashboard-power-bi",
      demo:
        "https://github.com/ayu-tea/Hotel-Reservation-Analysis-Dashboard-Power-BI-/blob/main/Hotel_Reservation_Analysis.pdf",
      category: "Business Intelligence",
      section: "da",
      highlights: [
        "Explored booking trends, guest demographics, stay durations, and cancellation patterns.",
        "Identified key factors influencing cancellations and special requests.",
        "Analyzed market segments, meal plan preferences, and parking space usage.",
        "Focused on translating raw data into actionable business insights for the hospitality sector.",
      ],
    },
    {
      title: "Employee Wellness & Mental Health Analysis",
      description:
        "Analyzed tech workplace mental health data to explore how different factors impact employee wellness.",
      longDescription:
        "This project is focused on mental health in the workplace, particularly in a tech company. Cleaned and explored a real-world dataset to uncover patterns related to treatment needs, and to understand how factors like gender, age, country, and company support affect employee wellness.",
      techStack: ["Python", "Statistical Analysis", "Data Visualization"],
      github: "https://github.com/ayu-tea/employee-wellness-analysis",
      demo:
        "https://colab.research.google.com/drive/1lDVO9GfF8SGbr2BB0a3w-7cCoXazGjza?usp=sharing",
      category: "Exploratory Data Analysis",
      section: "da",
      highlights: [
        "Analyzed a real-world dataset focused on mental health in the workplace.",
        "Cleaned and preprocessed data to handle inconsistencies.",
        "Explored patterns in mental health treatment needs based on gender, age, and country.",
        "Analyzed the role of company support systems in employee mental wellness.",
        "Visualized key insights.",
      ],
    },
    {
      title: "Sales and Customer Insights",
      description:
        "Explored customer, agent, and order data using SQL to extract actionable business insights.",
      longDescription:
        "This project focuses on analyzing relational data using SQL to answer questions related to agents, customers, and orders. Wrote queries to retrieve, and aggregate data, uncovering trends and performance patterns that were valuable for decision-making in a sales.",
      techStack: ["SQL", "MySQL", "Relational Databases"],
      github: "https://github.com/ayu-tea/Sales-and-Customer-Insights",
      demo: "https://github.com/ayu-tea/Sales-and-Customer-Insights#readme",
      category: "Data Analysis",
      section: "da",
      highlights: [
        "Used SQL to query relational tables for customers, agents, and orders.",
        "Joined multiple tables to retrieve complete customer-agent-order relationships.",
        "Filtered customer orders based on criteria like status, date, and region.",
        "Calculated total and average sales values using aggregate functions.",
        "Identified top-performing agents and customers using GROUP BY and HAVING.",
        "Wrote nested and subqueries to answer complex business questions.",
        "Enhanced business understanding through clean and readable SQL queries.",
      ],
    },
    {
      title: "Supply Chain Risk Analysis",
      description:
        "Analysis of supply data to identify high-risk suppliers and recommend control strategies.",
      longDescription:
        "This project analyzes supply chain data to evaluate supplier performance, identify operational risks, and generate actionable recommendations. It includes feature engineering, clustering (KMeans), and custom scoring to assess risks based on delivery efficiency, defect rates, and cost performance.",
      techStack: ["Python", "Pandas", "Seaborn", "Matplotlib", "Scikit-learn"],
      github: "https://github.com/ayu-tea/Supply-Chain-Risk-Analysis",
      demo:
        "https://colab.research.google.com/drive/1FSZEKpm178h66H8mpd4Zs_H_2A01Cyx4?usp=sharing",
      category: "Data Analysis",
      section: "ds",
      highlights: [
        "Cleaned and analyzed supply chain data.",
        "Visualized key metrics like lead time and defect rates.",
        "Created a supplier risk score.",
        "Grouped suppliers using KMeans clustering.",
        "Identified high-risk suppliers through visualization.",
        "Recommended simple actions to reduce supply chain risks.",
      ],
    },
  ]

  const ongoingProjects = [
    {
      title: "The Book Chamber – Book Recommendation Web App (On-going)",
      description:
        "Book recommendation with filtering, custom dataset, and full-stack integration.",
      longDescription:
        "Built a book recommendation system web app with datasets cleaned in Colab. Backend powered by Prisma + MySQL (in phase 1), frontend in Next.js with authentication and dashboards. Implements popularity-based, location-specific, and author-similarity recommendations. Soon will be shifting to MongoDB as the database for scalability.",
      techStack: ["Next.js", "Prisma", "MySQL", "MongoDB", "Python"],
      highlights: [
        "Cleaned and prepared book datasets for backend integration.",
        "Built Prisma + MySQL backend and Next.js frontend with authentication and dashboard.(Phase 1)",
        "Worked on recommendation engine: popularity-based, location-specific, and author similarity in Python Notebook.",
      ],
    },
    {
      title: "Fraud Detection in Financial Transactions",
      description:
        "Identifying fradulant transactions using anomaly detection and ML models.",
      longDescription:
        "Developing a fraud detection system to identify unusual financial transactions. Focuses on preprocessing transaction logs, applying anomaly detection algorithms, and training ML classification models to flag fraudulent activities.",
      techStack: ["Python", "Scikit-learn", "Pandas"],
    },
  ]

  const renderProject = (project: any, index: number, sectionKey: SectionKey) => {
    const style = sectionStyles[sectionKey]
    const anchorId = toId(project.title)

    return (
      <div key={index} id={anchorId} className="scroll-mt-24">
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className={style.title}>{project.title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="details" className="border-none">
                <AccordionTrigger
                  className={`p-4 rounded-md text-left text-sm font-medium ${style.accordion}`}
                >
                  {project.description}
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4 text-muted-foreground">
                  <div>{project.longDescription}</div>
                  {project.highlights && (
                    <ul className="space-y-1">
                      {project.highlights.map((hl: string, i: number) => (
                        <li key={i}>• {hl}</li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            {project.github && (
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
            Projects
          </h1>

          <h2 className={`text-2xl font-semibold mb-8 ${sectionStyles.ds.header}`}>
            Data Science & NLP
          </h2>
          {projects
            .filter((p) => p.section === "ds")
            .map((p, i) => renderProject(p, i, "ds"))}

          <h2 className={`text-2xl font-semibold mt-16 mb-8 ${sectionStyles.da.header}`}>
            Data Analysis & Business Intelligence
          </h2>
          {projects
            .filter((p) => p.section === "da")
            .map((p, i) => renderProject(p, i, "da"))}

          <h2 className={`text-2xl font-semibold mt-16 mb-8 ${sectionStyles.as.header}`}>
            Applied Systems & Ongoing Work
          </h2>
          {ongoingProjects.map((p, i) => renderProject(p, i, "as"))}
        </div>
      </section>
    </div>
  )
}
