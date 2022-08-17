import { __ } from '~/helpers'

const sizes = {
  mobile: '800px',
  tablet: '1300px',
} as const

function toBreakpoint(
  breakpoint: ValueOf<typeof sizes>,
  type: 'min' | 'max' = 'max',
) {
  return `(${type}-width: ${breakpoint})`
}

function toMinOrMax(type: 'min' | 'max') {
  return __.entries(sizes).reduce(
    (accumulator, [breakpointName, breakpointValue]) => {
      accumulator[breakpointName] = toBreakpoint(breakpointValue, type)
      return accumulator
    },
    {} as Record<keyof typeof sizes, string>,
  )
}

export const breaks = {
  max: toMinOrMax('max'),
  min: toMinOrMax('min'),
}
