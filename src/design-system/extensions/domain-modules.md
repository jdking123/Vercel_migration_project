# Domain Module Architecture

## Purpose
Allow domain-specific modules without polluting the core system.

## Examples
- Training module
- Certification module
- Research module
- Compliance module
- Partner module

## Requirements
- Must live in a namespaced folder
- Must use core tokens
- Must use core components
- Must pass extension validation
- Must include documentation

## Structure
/domain
  /training
  /certification
  /research
