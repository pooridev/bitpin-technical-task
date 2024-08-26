import { ComponentProps, ComponentType, ReactNode, Suspense, lazy } from 'react'

interface LoadableOptions {
  fallback?: ReactNode
}

export const loadable = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  { fallback }: LoadableOptions = { fallback: null }
) => {
  const LazyComponent = lazy(importFunc)

  const Component = (props: ComponentProps<T>) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )

  return Component
}
