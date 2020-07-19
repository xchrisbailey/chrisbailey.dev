import Typography from 'typography'
import obTheme from 'typography-theme-ocean-beach'

obTheme.overrideStyles = ({ rhythm }, options) => ({
  'pre, code': {
    fontSize: '16px',
    lineHeight: '1.5',
  },
})

const typography = new Typography(obTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
