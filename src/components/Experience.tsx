import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const timeline = [
  {
    role: "Data Engineer",
    company: "Go Digital Technology Consulting LLP",
    period: "2025 — Present",
    desc: "Leading the design and implementation of scalable data platforms, real-time pipelines, and monitoring infrastructure on AWS.",
    current: true,
  },
  {
    role: "Associate Data Engineer",
    company: "Go Digital Technology Consulting LLP",
    period: "2024-2025",
    desc: "Built and maintained ETL pipelines, optimized data warehouse queries, and implemented CI/CD workflows for data infrastructure.",
    current: false,
  },
  {
    role: "Data Engineer Intern",
    company: "Go Digital Technology Consulting LLP",
    period: "2024",
    desc: "Assisted in building data ingestion pipelines, writing SQL transformations, and setting up monitoring dashboards.",
    current: false,
  },
];

const Experience = () => (
  <section id="experience" className="py-32 px-6 relative">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-primary text-sm mb-2">// experience</p>
        <h2 className="text-4xl font-bold mb-16">
          Career <span className="text-primary">Timeline</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-14"
            >
              {/* Node */}
              <div className={`absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center border ${
                item.current
                  ? "border-primary bg-primary/20 shadow-[0_0_15px_-3px_hsl(var(--primary)/0.5)]"
                  : "border-border bg-muted"
              }`}>
                <Briefcase size={16} className={item.current ? "text-primary" : "text-muted-foreground"} />
              </div>

              <div className="glass-card-hover p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    {item.role}
                    {item.current && (
                      <span className="ml-3 px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/30 font-mono">
                        current
                      </span>
                    )}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-sm text-secondary mb-3">{item.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
