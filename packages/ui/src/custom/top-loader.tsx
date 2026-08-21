"use client"

import NextTopLoader from "nextjs-toploader"

export function TopLoader() {
  return (
    <NextTopLoader
      color="var(--primary)"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="none"
    />
  )
}

export default TopLoader
