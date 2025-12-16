import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    float: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const bounceVariants = {
    bounce: {
      y: [-10, 10, -10],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const spinVariants = {
    spin: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10 text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated 404 Number */}
        <div className="mb-8 flex justify-center gap-4">
          {["4", "0", "4"].map((digit, idx) => (
            <motion.div
              key={idx}
              className="text-9xl md:text-[150px] font-display font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
              variants={floatingVariants}
              animate="float"
              style={{
                animationDelay: `${idx * 0.3}s`,
              }}
            >
              {digit}
            </motion.div>
          ))}
        </div>

        {/* Lost character SVG */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <motion.svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            className="drop-shadow-lg"
            animate="bounce"
            variants={bounceVariants}
          >
            {/* Head */}
            <circle
              cx="60"
              cy="40"
              r="25"
              fill="currentColor"
              className="text-primary/80"
            />
            {/* Eyes - looking confused */}
            <circle cx="50" cy="35" r="4" fill="white" />
            <circle cx="70" cy="35" r="4" fill="white" />
            {/* Mouth - sad/confused */}
            <path
              d="M 50 45 Q 60 42 70 45"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Body */}
            <rect
              x="45"
              y="65"
              width="30"
              height="30"
              rx="5"
              className="fill-secondary/70"
            />
            {/* Arms */}
            <rect
              x="20"
              y="70"
              width="25"
              height="8"
              rx="4"
              className="fill-primary/60"
            />
            <rect
              x="75"
              y="70"
              width="25"
              height="8"
              rx="4"
              className="fill-primary/60"
            />
            {/* Legs */}
            <rect
              x="48"
              y="95"
              width="8"
              height="20"
              rx="4"
              className="fill-primary/70"
            />
            <rect
              x="64"
              y="95"
              width="8"
              height="20"
              rx="4"
              className="fill-primary/70"
            />
          </motion.svg>
        </motion.div>

        {/* Text Content */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
            Oops! Lost in Space
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            This page went on an adventure and didn't come back
          </p>
          <p className="text-sm text-muted-foreground">
            Error: Page not found (404)
          </p>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-32 left-8 text-4xl"
          animate="float"
          variants={floatingVariants}
        >
          ✈️
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-8 text-4xl"
          animate="float"
          variants={floatingVariants}
          style={{
            animationDelay: "0.5s",
          }}
        >
          🌍
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/4 text-3xl"
          animate="spin"
          variants={spinVariants}
        >
          🧭
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-orange-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Return Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>
        </motion.div>

        {/* Fun message */}
        <motion.p
          variants={itemVariants}
          className="mt-10 text-sm text-muted-foreground italic"
        >
          💡 Pro tip: Try not to get lost again!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default NotFound;
