# Design System Lint Rules

## Purpose
Ensure consistent usage of tokens, components, and patterns.

## Rules
- Disallow raw hex colors
- Disallow arbitrary spacing values
- Enforce token usage for color, spacing, radius
- Enforce use of design-system components over HTML primitives
- Disallow inline styles except for dynamic values
- Enforce CVA for variants
- Enforce forwardRef for components

## Tooling
- ESLint custom rules
- Stylelint custom rules
- Prettier config alignment

## Enforcement
- All rules run in CI
- Violations block merges
