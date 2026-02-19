import { motion } from "framer-motion";
import { Mail, Linkedin, Github, BookOpen, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socials = [
  { icon: Mail, label: "Email", value: "jay@example.com", href: "mailto:jay@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jayshah", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/jayshah", href: "#" },
  { icon: BookOpen, label: "Medium", value: "medium.com/@jayshah", href: "#" },
];

const Contact = () => (
  <section id="contact" className="py-32 px-6 gradient-section relative">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-primary text-sm mb-2">// contact</p>
        <h2 className="text-4xl font-bold mb-16">
          Get In <span className="text-primary">Touch</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="glass-card-hover p-5 flex items-center gap-4 group block"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className="text-sm font-mono">{s.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8"
        >
          <h3 className="text-lg font-semibold mb-6">Send a Message</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Name" className="bg-muted/50 border-border focus:border-primary/50" />
              <Input placeholder="Email" type="email" className="bg-muted/50 border-border focus:border-primary/50" />
            </div>
            <Input placeholder="Subject" className="bg-muted/50 border-border focus:border-primary/50" />
            <Textarea placeholder="Your message..." rows={5} className="bg-muted/50 border-border focus:border-primary/50 resize-none" />
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-3px_hsl(var(--primary)/0.4)] font-mono">
              <Send size={16} className="mr-2" /> Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>

    {/* Footer */}
    <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border">
      <p className="text-center text-sm text-muted-foreground font-mono">
        &copy; 2024 Jay Shah — Built with precision & passion
      </p>
    </div>
  </section>
);

export default Contact;
