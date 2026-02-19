import { motion } from "framer-motion";
import { Database, Cloud, GitBranch, Activity } from "lucide-react";

const focuses = [
  { icon: Cloud, label: "AWS Data Engineering", desc: "Designing data lakes, warehouses & ETL on AWS" },
  { icon: Activity, label: "Observability & Monitoring", desc: "Building monitoring platforms & alerting systems" },
  { icon: GitBranch, label: "CI/CD & Infrastructure", desc: "Automating deployments & infrastructure as code" },
  { icon: Database, label: "Data Pipelines", desc: "Orchestrating scalable batch & streaming pipelines" },
];

const techStack = [
  "AWS", "Python", "SQL", "Terraform", "Docker", "Spark", "Airflow", "Kafka"
];

const About = () => (
  <section id="about" className="py-32 px-6 gradient-section relative">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm mb-2">// about</p>
        <h2 className="text-4xl font-bold mb-8">
          Who I <span className="text-primary">Am</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mb-16">
          A passionate Data Engineer with expertise in building production-grade data platforms,
          monitoring systems, and cloud-native infrastructure. I thrive on transforming raw data
          into reliable, observable, and scalable systems that drive business decisions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {focuses.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover p-6 group"
          >
            <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={28} />
            <h3 className="font-semibold mb-2">{item.label}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {techStack.map((tech) => (
          <span key={tech} className="tag-glow">{tech}</span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
