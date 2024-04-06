import { describe, test, expect } from 'vitest'
import { setup, $fetch, createPage, url } from "@nuxt/test-utils/e2e";

describe("homepage/cs", async() => {
  await setup();

  // fetch variant
  test("renders the homepage heading", async () => {
    const html = await $fetch("/cs");

    expect(html).toContain("Zářit online");
  });

  // playwright variant
  test('playwright - homepage heading', async () => {
    const page = await createPage();
    await page.goto(url("/cs"), { waitUntil: 'hydration' });

    const text = await page.textContent('h1');
    expect(text).toContain('Zářit online')
  })
});
