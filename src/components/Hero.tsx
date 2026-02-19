import { motion } from "framer-motion";
import { ArrowDown, FileDown, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="gradient-hero absolute inset-0" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary/5 blur-[80px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-accent/5 blur-[60px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            &gt; initializing portfolio_
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-foreground">Jay </span>
          <span className="text-primary glow-text">Shah</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-light text-secondary mb-6"
        >
          Data Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable data platforms, monitoring systems, and cloud-native solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-3px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_-3px_hsl(var(--primary)/0.7)] transition-all duration-300 font-mono"
          >
            <a href="#projects">
              <FolderOpen size={18} className="mr-2" />
              View Projects
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-secondary/40 text-secondary hover:bg-secondary/10 hover:border-secondary/60 transition-all duration-300 font-mono"
          >
            <a href="#">
              <FileDown size={18} className="mr-2" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={20} className="animate-float" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
