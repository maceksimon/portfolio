import { describe, test, expect } from 'vitest'
import { setup, $fetch, createPage, url } from "@nuxt/test-utils/e2e";

describe("homepage/cs", async() => {
  await setup();

  test('renders the page title meta tag', async () => {
    const html = await $fetch("/cs");
    expect(html).toContain('<title>Šimon Jasný - Webový vývojář</title>');
  });

  test('renders JumbotronCenter component', async () => {
    const page = await createPage();
    await page.goto(url("/cs"), { waitUntil: 'hydration' });

    // Check for the main heading in JumbotronCenter
    const heading = await page.locator('h1').textContent();
    expect(heading).toContain('Šimon má web a ty ho můžeš mít taky');

    // Check for contact button
    const contactButton = await page.locator('text=Kontaktovat').first();
    expect(await contactButton.isVisible()).toBe(true);
  });

  test('renders ProjectTeaser component', async () => {
    const page = await createPage();
    await page.goto(url("/cs"), { waitUntil: 'hydration' });

    // Check for the projects section by id
    const projectsSection = await page.locator('#projects');
    expect(await projectsSection.isVisible()).toBe(true);
  });

  test('renders TestimonialGrid component', async () => {
    const page = await createPage();
    await page.goto(url("/cs"), { waitUntil: 'hydration' });

    // Check for the testimonials section by id
    const testimonialsSection = await page.locator('#testimonials');
    expect(await testimonialsSection.isVisible()).toBe(true);
  });

  test('renders Faq component', async () => {
    const page = await createPage();
    await page.goto(url("/cs"), { waitUntil: 'hydration' });

    // Check for the FAQ section by id
    const faqSection = await page.locator('#faq');
    expect(await faqSection.isVisible()).toBe(true);
  });
});
