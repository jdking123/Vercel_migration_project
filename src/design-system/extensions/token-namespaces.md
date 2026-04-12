# Domain-Specific Token Namespaces

## Purpose
Allow domain modules to define tokens without polluting the core.

## Namespace Rules
- Must use prefix: `--domain-[name]-[token]`
- Must not override core tokens
- Must follow OKLCH color rules
- Must follow spacing scale
- Must include documentation

## Examples
--domain-training-accent
--domain-certification-highlight
