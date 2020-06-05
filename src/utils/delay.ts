const delay = (time?: number): IRequestHandler =>
  (_, __, next) => setTimeout(() => next(), time || 1000)

export default delay
