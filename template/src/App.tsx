
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/mode-toggle";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 transition-colors duration-200">
      <header className="px-5 bg-white shadow dark:bg-neutral-800 dark:shadow-neutral-700/10">
        <div className="container-app py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-700 dark:text-primary-400">
            React Tailwind Starter
          </h1>
          <div className="flex items-center gap-4">
            <ModeToggle />
           
          </div>
        </div>
      </header>

      <main className="container-app py-12">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-50 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Complete Starter Template
          </motion.h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            With TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and more!
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button  onClick={() => setCount(count + 1)}>
              Count: {count}
            </Button>
            <Button variant="outline" >
              Get Started
            </Button>
          </div>
        </div>


        {isMobile && (
          <div className="mt-8 p-4 bg-warning-100 text-warning-900 dark:bg-warning-900/20 dark:text-warning-100 rounded-md">
            <p>You are viewing on a mobile device!</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
