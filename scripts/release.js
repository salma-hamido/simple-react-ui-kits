#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(__dirname, "..", "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

const currentVersion = packageJson.version;
const [major, minor, patch] = currentVersion.split(".").map(Number);

console.log(`Current version: ${currentVersion}`);

const releaseType = process.argv[2];
if (!releaseType || !["patch", "minor", "major"].includes(releaseType)) {
  console.error("Usage: node scripts/release.js <patch|minor|major>");
  process.exit(1);
}

let newVersion;
switch (releaseType) {
  case "patch":
    newVersion = `${major}.${minor}.${patch + 1}`;
    break;
  case "minor":
    newVersion = `${major}.${minor + 1}.0`;
    break;
  case "major":
    newVersion = `${major + 1}.0.0`;
    break;
}

console.log(`New version: ${newVersion}`);

// Update package.json
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

// Build the package
console.log("Building package...");
execSync("npm run build", { stdio: "inherit" });

// Create git tag
console.log("Creating git tag...");
execSync(`git add .`, { stdio: "inherit" });
execSync(`git commit -m "chore: release v${newVersion}"`, { stdio: "inherit" });
execSync(`git tag v${newVersion}`, { stdio: "inherit" });

console.log(`\n✅ Release v${newVersion} prepared!`);
console.log("\nTo publish:");
console.log(`1. git push origin main`);
console.log(`2. git push origin v${newVersion}`);
console.log("\nOr run: npm publish (if you want to publish manually)");
