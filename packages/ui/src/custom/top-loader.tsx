"use client"

import * as React from "react"
import NextTopLoader from "nextjs-toploader"

// nextjs-toploader is a CommonJS module whose default export type resolution 
// conflicts with NodeNext module resolution in TS. We cast it to a React component.
const TopLoaderComponent = ((NextTopLoader as any).default || NextTopLoader) as React.ComponentType<{
  color?: string
  initialPosition?: number
  crawlSpeed?: number
  height?: number
  crawl?: boolean
  showSpinner?: boolean
  easing?: string
  speed?: number
  shadow?: string
}>

export function TopLoader() {
  return (
    <TopLoaderComponent
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

