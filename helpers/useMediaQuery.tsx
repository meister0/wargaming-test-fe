import {
  useEffect,
  useState,
} from 'react'

export const useMediaQuery = (breakpoint: string) => {
  const [match, setMatch] = useState<Boolean>(false)

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(breakpoint)
      setMatch(matches)
    }
    changeMatch()
    window.addEventListener('resize', changeMatch)
    return () => {
      window.addEventListener('resize', changeMatch)
    }
  }, [breakpoint])

  return match
}
