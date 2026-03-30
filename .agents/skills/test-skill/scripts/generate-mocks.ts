#!/usr/bin/env node

/**
 * Mock Data Generator
 *
 * This script generates realistic test fixtures for use in tests.
 *
 * Usage: bun scripts/generate-mocks.ts
 */

interface MockUser {
	id: string;
	email: string;
	name: string;
	avatar?: string;
	emailVerified: boolean;
	twoFactorEnabled: boolean;
	createdAt: Date;
	updatedAt: Date;
}

interface MockSession {
	id: string;
	userId: string;
	expiresAt: Date;
	createdAt: Date;
}

function generateId(): string {
	return Math.random().toString(36).substr(2, 9);
}

function generateMockUser(overrides?: Partial<MockUser>): MockUser {
	const id = generateId();
	const now = new Date();

	return {
		id,
		email: `test-${id}@example.com`,
		name: `Test User ${id}`,
		avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${id}`,
		emailVerified: true,
		twoFactorEnabled: false,
		createdAt: new Date(
			now.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000,
		),
		updatedAt: now,
		...overrides,
	};
}

function generateMockSession(
	userId: string,
	overrides?: Partial<MockSession>,
): MockSession {
	const now = new Date();
	return {
		id: generateId(),
		userId,
		expiresAt: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
		createdAt: now,
		...overrides,
	};
}

function generateMockUsers(count: number = 5): MockUser[] {
	return Array.from({ length: count }, (_, i) =>
		generateMockUser({
			email: `test${i}@example.com`,
			name: `Test User ${i}`,
		}),
	);
}

// Export as JSON for use in tests
async function generateAndExport() {
	console.log("🔨 Generating mock data...\n");

	const mockUsers = generateMockUsers(10);
	const mockSessions = mockUsers.map((user) => generateMockSession(user.id));

	const output = {
		users: mockUsers,
		sessions: mockSessions,
		metadata: {
			generatedAt: new Date().toISOString(),
			count: {
				users: mockUsers.length,
				sessions: mockSessions.length,
			},
		},
	};

	console.log("📊 Generated data:");
	console.log(`  Users:    ${mockUsers.length}`);
	console.log(`  Sessions: ${mockSessions.length}`);
	console.log("\n✅ Mock data generated successfully!");
	console.log("\nUsage in tests:");
	console.log('  import { users, sessions } from "./mocks/generated.json"');

	// In a real scenario, write to file:
	// fs.writeFileSync('./src/lib/test/mocks/generated.json', JSON.stringify(output, null, 2));

	return output;
}

// Helper functions for common mock scenarios
export const mockScenarios = {
	/**
	 * Create a user verified user who is ready to log in
	 */
	verifiedUser: () =>
		generateMockUser({
			emailVerified: true,
			twoFactorEnabled: false,
		}),

	/**
	 * Create a user with 2FA enabled
	 */
	userWith2FA: () =>
		generateMockUser({
			emailVerified: true,
			twoFactorEnabled: true,
		}),

	/**
	 * Create an unverified user
	 */
	unverifiedUser: () =>
		generateMockUser({
			emailVerified: false,
			twoFactorEnabled: false,
		}),

	/**
	 * Create a user with a specific email
	 */
	userWithEmail: (email: string) =>
		generateMockUser({ email, emailVerified: true }),

	/**
	 * Create multiple users with different states
	 */
	multipleUsers: () => ({
		verified: generateMockUser({ emailVerified: true }),
		unverified: generateMockUser({ emailVerified: false }),
		with2fa: generateMockUser({ emailVerified: true, twoFactorEnabled: true }),
	}),
};

generateAndExport().catch(console.error);
