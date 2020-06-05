import requireDir from 'require-dir'

const files = requireDir('./', { extensions: ['.js'] })

export const fallback = files['fallback'].default
export const scenarios: IScenario[] = Object.keys(files).map(k => files[k].default)

export default {
  fallback,
  scenarios
}