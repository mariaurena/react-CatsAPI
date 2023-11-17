// NTN test
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  // el texto tenga un tamaño mayor a 0
  await expect(textContent?.length).toBeGreaterThan(0)

  // la url empieza con 'https://cataas.com'
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
