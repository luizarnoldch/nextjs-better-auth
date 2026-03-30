// #!/usr/bin/env node

// /**
//  * Test Report Analyzer
//  *
//  * This script parses test results and generates a summary report.
//  *
//  * Usage: bun scripts/analyze-reports.ts
//  */

// import * as fs from "fs";
// import * as path from "path";

// interface TestResult {
//   name: string;
//   status: "passed" | "failed" | "skipped";
//   duration: number;
//   error?: string;
// }

// interface CoverageReport {
//   statements: number;
//   branches: number;
//   functions: number;
//   lines: number;
// }

// async function analyzeTestResults() {
//   const resultsDir = "./test-results";
//   const coverageDir = "./coverage";

//   console.log("📊 Analyzing Test Results\n");
//   console.log("═".repeat(50));

//   try {
//     // Read test results
//     if (fs.existsSync(resultsDir)) {
//       const files = fs.readdirSync(resultsDir);
//       let totalPassed = 0;
//       let totalFailed = 0;
//       let totalSkipped = 0;
//       let totalDuration = 0;

//       for (const file of files) {
//         if (file.endsWith(".json")) {
//           const content = fs.readFileSync(path.join(resultsDir, file), "utf-8");
//           const data = JSON.parse(content);

//           if (data.testResults) {
//             for (const suite of data.testResults) {
//               totalPassed += suite.numPassingTests || 0;
//               totalFailed += suite.numFailingTests || 0;
//               totalSkipped += suite.numPendingTests || 0;
//               totalDuration += suite.perfStats?.end || 0;
//             }
//           }
//         }
//       }

//       console.log(`✅ Passed:  ${totalPassed}`);
//       console.log(`❌ Failed:  ${totalFailed}`);
//       console.log(`⏭️  Skipped: ${totalSkipped}`);
//       console.log(`⏱️  Duration: ${(totalDuration / 1000).toFixed(2)}s`);
//     }

//     // Read coverage report
//     if (fs.existsSync(path.join(coverageDir, "coverage-summary.json"))) {
//       const coverageContent = fs.readFileSync(
//         path.join(coverageDir, "coverage-summary.json"),
//         "utf-8",
//       );
//       const coverage: {
//         total: CoverageReport;
//       } = JSON.parse(coverageContent);

//       console.log("\n📈 Code Coverage");
//       console.log("─".repeat(50));
//       console.log(
//         `Statements: ${coverage.total.statements.pct}% (target: 80%)`,
//       );
//       console.log(`Branches:   ${coverage.total.branches.pct}% (target: 75%)`);
//       console.log(`Functions:  ${coverage.total.functions.pct}% (target: 80%)`);
//       console.log(`Lines:      ${coverage.total.lines.pct}% (target: 80%)`);

//       const allMet = [
//         coverage.total.statements.pct >= 80,
//         coverage.total.branches.pct >= 75,
//         coverage.total.functions.pct >= 80,
//         coverage.total.lines.pct >= 80,
//       ].every(Boolean);

//       console.log(
//         `\n${allMet ? "✅ All coverage targets met!" : "⚠️  Coverage below targets"}`,
//       );
//     }

//     console.log("\n" + "═".repeat(50));
//   } catch (error) {
//     console.error("❌ Error analyzing reports:", error);
//     process.exit(1);
//   }
// }

// analyzeTestResults();
