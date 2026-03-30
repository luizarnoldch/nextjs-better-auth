#!/usr/bin/env node

/**
 * Seed Test Database Script
 *
 * This script populates the test database with fixtures
 * for running integration and E2E tests.
 *
 * Usage: bun scripts/seed-test-db.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: process.env.DATABASE_URL_TEST,
		},
	},
});

async function main() {
	console.log("🌱 Seeding test database...");

	try {
		// Clear existing data
		console.log("🗑️  Clearing existing data...");
		await prisma.session.deleteMany();
		await prisma.user.deleteMany();

		// Create test users
		console.log("👤 Creating test users...");
		const users = await Promise.all([
			prisma.user.create({
				data: {
					email: "test@example.com",
					name: "Test User",
					emailVerified: true,
				},
			}),
			prisma.user.create({
				data: {
					email: "unverified@example.com",
					name: "Unverified User",
					emailVerified: false,
				},
			}),
			prisma.user.create({
				data: {
					email: "premium@example.com",
					name: "Premium User",
					emailVerified: true,
				},
			}),
		]);

		// Create test sessions
		console.log("🔐 Creating test sessions...");
		await prisma.session.create({
			data: {
				userId: users[0].id,
				expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
			},
		});

		console.log("✅ Test database seeded successfully!");
		console.log(`\nCreated ${users.length} test users:`);
		users.forEach((user) => {
			console.log(`  - ${user.email} (ID: ${user.id})`);
		});
	} catch (error) {
		console.error("❌ Error seeding database:", error);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
}

main();
