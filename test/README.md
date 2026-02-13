# Tests

This directory contains end-to-end tests for the portfolio website using Vitest and Playwright.

## Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

## Test Coverage

### Homepage Tests (`basic.test.ts`)

Tests for the Czech (`/cs`) version of the homepage:

- ✅ Renders the page title meta tag
- ✅ Renders JumbotronCenter component with heading "Šimon má web a ty ho můžeš mít taky" and contact button
- ✅ Renders ProjectTeaser component (section #projects)
- ✅ Renders TestimonialGrid component (section #testimonials)
- ✅ Renders Faq component (section #faq)

## CI Integration

Tests run automatically on:
- Pushes to `main` branch
- Pull requests to `main` branch
- Pushes to `claude/**` branches (for Renovate bot PRs)

See `.github/workflows/test.yml` for the CI configuration.

## Purpose

These tests serve as smoke tests to verify that:
1. The homepage renders correctly after package upgrades
2. Key components are present and visible
3. No critical rendering errors occur

This is particularly useful for automatically validating Renovate bot dependency updates.
