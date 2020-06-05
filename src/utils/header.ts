const header = (header: string) => {
  const equalsTo = (value: string): IRequestHandler => (req, _, next) => req.headers[header.toLowerCase()] === value ? next() : next('route')
  const isBlank = () => equalsTo(undefined) || equalsTo(null) || equalsTo('')

  return {
    equalsTo,
    isBlank
  }
}

export default header
