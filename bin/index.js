#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Parse arguments
const args = process.argv.slice(2);
const projectName = args[0];

if (!projectName) {
  console.error("Please specify a project name:");
  console.error("  pnpm dlx ultimate-vite-starter my-app");
  process.exit(1);
}

const currentDir = process.cwd();
const projectDir = path.join(currentDir, projectName);

// Create project directory
if (fs.existsSync(projectDir)) {
  console.error(`The directory ${projectName} already exists.`);
  process.exit(1);
}

// Function to copy template files
function copyTemplateFiles(templateDir, targetDir) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const files = fs.readdirSync(templateDir);

  for (const file of files) {
    const filePath = path.join(templateDir, file);
    const targetPath = path.join(targetDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      copyTemplateFiles(filePath, targetPath);
    } else {
      fs.copyFileSync(filePath, targetPath);
    }
  }
}

// Create project
console.log(`Creating a new project in ${projectDir}...`);
fs.mkdirSync(projectDir, { recursive: true });

// Get template directory
const templateDir = path.resolve(__dirname, "../template");
copyTemplateFiles(templateDir, projectDir);

// Process package.json
const templatePkgPath = path.join(templateDir, "package.json");
if (fs.existsSync(templatePkgPath)) {
  const templatePkg = JSON.parse(fs.readFileSync(templatePkgPath, "utf8"));
  templatePkg.name = projectName;
  templatePkg.version = "0.1.0";
  fs.writeFileSync(
    path.join(projectDir, "package.json"),
    JSON.stringify(templatePkg, null, 2)
  );
}

// Process git files
const gitignorePath = path.join(templateDir, ".gitignore");
if (fs.existsSync(gitignorePath)) {
  fs.copyFileSync(gitignorePath, path.join(projectDir, ".gitignore"));
}

console.log("Installing dependencies...");
try {
  // Change directory to the project
  process.chdir(projectDir);

  // Detect package manager preference (fallback to npm)
  let packageManager = "npm";
  if (process.env.npm_config_user_agent) {
    if (process.env.npm_config_user_agent.includes("pnpm")) {
      packageManager = "pnpm";
    } else if (process.env.npm_config_user_agent.includes("yarn")) {
      packageManager = "yarn";
    }
  }

  // Install dependencies
  if (packageManager === "yarn") {
    execSync("yarn install", { stdio: "inherit" });
  } else if (packageManager === "pnpm") {
    execSync("pnpm install", { stdio: "inherit" });
  } else {
    execSync("npm install", { stdio: "inherit" });
  }

  console.log("");
  console.log("Dependencies installed successfully!");
  console.log("");
  console.log(`Your project is ready at ${projectDir}`);
  console.log("");
  console.log("Next steps:");
  console.log("");
  console.log(`  cd ${projectName}`);
  console.log(
    `  ${
      packageManager === "yarn"
        ? "yarn dev"
        : packageManager === "pnpm"
        ? "pnpm dev"
        : "npm run dev"
    }`
  );
  console.log("");
} catch (error) {
  console.error("Error installing dependencies:", error);
}
