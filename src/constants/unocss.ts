import { colors } from './getColors'
import type { UserShortcuts, ConfigBase } from 'unocss'

export const SHORTCUTS: UserShortcuts = [
  ['btn', 'inline-block px-2.5 py-1 rounded-sm b-1 b-solid b-transparent outline-none cursor-pointer disabled:cursor-not-allowed'],
  ['btn-link', 'transition b-white hover:(bg-white text-black)'],
  ['inverse', 'color-white bg-black b-black hover:(color-black bg-white b-white)'],
  ['absolute-full', 'absolute top-0 left-0 right-0 bottom-0'],
  ['position-x-center', 'absolute left-1/2 -translate-x-1/2'],
  ['position-y-center', 'absolute top-1/2 text-white -translate-y-1/2'],
  ['position-center', 'absolute left-1/2 top-1/2 text-white -translate-x-1/2 -translate-y-1/2'],
  ['flex-x-center', 'flex justify-center'],
  ['flex-y-center', 'flex items-center'],
  ['flex-center', 'flex items-center justify-center'],
]

export const RULES: ConfigBase['rules'] = [
  // 多行文本超出部分省略号 hidden-line-n (已内置 line-clamp-n)
  [/^hidden-line-(\d+)$/, ([, l]) => {
    if (~~l === 1) {
      return {
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
        'width': '100%',
      }
    }
    return {
      'overflow': 'hidden',
      'display': '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': l,
    }
  }],
]

export const THEME: ConfigBase['theme'] = {
  colors,
  container: {
    padding: {
      DEFAULT: '1rem',
      lg: '2rem',
      xl: '2rem',
      xxl: '2rem',
    },
    screens: {
      sm: '100%',
      md: '100%',
    }
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
}
