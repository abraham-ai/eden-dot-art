export function formatAddress(address: string) {
  let formatAddress = ''

  typeof address === 'string'
    ? (formatAddress = `${address.slice(0, 6)}…${address.slice(38, 42)}`)
    : (formatAddress = address)

  return formatAddress
}
