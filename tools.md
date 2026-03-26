# Gemini CLI Project Extensibility Tools

Beyond Skills and the root `GEMINI.md` file, Gemini CLI offers several powerful ways to extend its capabilities and customize its behavior for this specific project.

## 1. Custom Commands
Custom commands allow you to define reusable prompts that can execute shell commands and inject file contents. They are defined as `.toml` files in `.gemini/commands/`.

- **Capabilities:** Automate complex workflows by combining instructions with real-time environment data.
- **Example:** A `/git:commit` command that executes `git diff --staged` to grab staged changes and generates a Conventional Commit message.

## 2. Hooks
Hooks are scripts or programs executed at specific points in the CLI's "agentic loop." They are configured in `.gemini/settings.json`.

- **Capabilities:** Intercept tool calls, validate arguments, inject dynamic context, or block dangerous operations based on project-specific policies.
- **Example:** A `BeforeTool` hook for `write_file` that runs a linter or security scanner and blocks the turn if violations are found.

## 3. Hierarchical Context Files (GEMINI.md)
You can place `GEMINI.md` files in specific subdirectories to provide localized instructions.

- **Capabilities:** Define folder-specific architecture rules or coding styles that the model follows when working within that directory.
- **Example:** A `src/app/(auth)/GEMINI.md` file instructing the model to always use specific auth utilities for any code generated in that folder.

## 4. Custom Tools (via MCP)
The **Model Context Protocol (MCP)** allows you to connect Gemini CLI to external tool servers, configured in `.gemini/settings.json`.

- **Capabilities:** Expose project-specific databases, APIs, or specialized local services as tools the model can call.
- **Example:** Connecting to a local MCP server that provides a `query_database` tool, allowing the model to inspect your local development database.

## 5. Project-Level Settings & Overrides
The `.gemini/settings.json` file allows for fine-grained control over the CLI's behavior for a specific project.

- **Capabilities:** Set tool allowlists (to bypass confirmation for trusted commands), configure model aliases, or set custom token budgets.
- **Example:** Setting `tools.allowed` to `["run_shell_command(bun run lint)"]` so the model can run your linter automatically without asking for permission.