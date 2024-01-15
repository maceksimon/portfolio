import { describe, test, expect } from 'vitest'
import { setup, createPage } from "@nuxt/test-utils";

describe("homepage", () => {
  setup({ server: true, browser: true });

  test("renders the homepage heading", async () => {
    const page = await createPage("/");
    const html = await page.innerHTML("body");

    expect(html).toContain("Ožijte");
    expect(html).toContain("online");
  });
});
