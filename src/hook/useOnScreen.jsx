import { useState, useEffect, useMemo } from 'react';
export function useOnScreen(ref) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => {
    return new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
  }, [])

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [observer, ref])

  return isIntersecting
}