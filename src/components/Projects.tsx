import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-Time Data Pipeline",
    desc: "Built a real-time streaming pipeline processing millions of events per day using Kafka, Spark Streaming, and AWS services.",
    tags: ["Kafka", "Spark", "AWS", "Python"],
    gradient: "from-primary/20 to-secondary/10",
  },
  {
    title: "Cloud Monitoring Platform",
    desc: "Designed an end-to-end observability platform with custom dashboards, alerting, and anomaly detection for microservices.",
    tags: ["Grafana", "Prometheus", "Docker", "Terraform"],
    gradient: "from-secondary/20 to-accent/10",
  },
  {
    title: "Data Lake Architecture",
    desc: "Architected a multi-layer data lake on AWS with automated ETL pipelines, data quality checks, and cost optimization.",
    tags: ["S3", "Glue", "Athena", "dbt"],
    gradient: "from-accent/20 to-primary/10",
  },
  {
    title: "ML Feature Store",
    desc: "Developed a centralized feature store enabling data scientists to discover, share, and serve ML features at scale.",
    tags: ["Python", "SageMaker", "Airflow", "Redis"],
    gradient: "from-primary/15 to-accent/15",
  },
];

const Projects = () => (
  <section id="projects" className="py-32 px-6 gradient-section relative">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-primary text-sm mb-2">// projects</p>
        <h2 className="text-4xl font-bold mb-16">
          Featured <span className="text-primary">Work</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="glass-card-hover group overflow-hidden"
          >
            {/* Gradient header */}
            <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
              <div className="grid-bg absolute inset-0 opacity-30" />
              <span className="font-mono text-sm text-muted-foreground relative z-10">
                // {project.title.toLowerCase().replace(/\s/g, "_")}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-glow">{tag}</span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-muted text-muted-foreground hover:text-primary hover:border-primary/40 font-mono text-xs">
                  <Github size={14} className="mr-1.5" /> GitHub
                </Button>
                <Button size="sm" variant="outline" className="border-muted text-muted-foreground hover:text-primary hover:border-primary/40 font-mono text-xs">
                  <ExternalLink size={14} className="mr-1.5" /> Details
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
