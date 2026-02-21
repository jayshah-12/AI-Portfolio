import { motion } from "framer-motion";
import { Database, Cloud, Server, Activity, Brain } from "lucide-react";
const categories = [
  {
    title: "Data Engineering",
    icon: Database,
    color: "primary",
    skills: [
      "Python",
      "SQL",
      "PySpark",
      "ETL Pipelines",
      "Data Modeling",
      "Apache Spark",
      "Data Warehousing",
      "Kafka"
    ],
  },
  {
    title: "Cloud (AWS)",
    icon: Cloud,
    color: "primary",
    skills: [
      "S3",
      "AWS Glue",
      "Lambda",
      "Step Functions",
      "Athena",
      "CloudWatch",
      "EventBridge"
    ],
  },
  {
    title: "CI/CD & DevOps",
    icon: Server,
    color: "secondary",
    skills: [
      "GitHub Actions",
      "Concourse CI",
      "Docker",
      "Terraform",
      "Infrastructure as Code",
      "Linux"
    ],
  },
  {
    title: "Data & Observability",
    icon: Activity,
    color: "accent",
    skills: [
      "Log Monitoring",
      "CloudWatch Logs",
      "System Monitoring",
      "Alerting Systems",
      "Performance Optimization"
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "secondary",
    skills: [
      "FastAPI",
      "RAG Systems",
      "Vector Databases",
      "Gemini API",
      "Prompt Engineering",
      "Pandas",
      "NumPy"
    ],
  },
];

const colorMap: Record<string, string> = {
  primary: "border-primary/30 text-primary bg-primary/5 hover:bg-primary/10",
  secondary: "border-secondary/30 text-secondary bg-secondary/5 hover:bg-secondary/10",
  accent: "border-accent/30 text-accent bg-accent/5 hover:bg-accent/10",
};

const Skills = () => (
  <section id="skills" className="py-32 px-6 relative">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-primary text-sm mb-2">// skills</p>
        <h2 className="text-4xl font-bold mb-16">
          Tech <span className="text-primary">Stack</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <cat.icon size={22} className={`text-${cat.color}`} />
              <h3 className="font-semibold text-lg">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors duration-300 ${colorMap[cat.color]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>  
    </div>
  </section>
);

export default Skills;
