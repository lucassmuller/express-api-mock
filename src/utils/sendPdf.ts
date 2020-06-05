import path from 'path'

const sendPdf = (_, res) => res.sendFile(path.join(__dirname, '../files/sample.pdf'))

module.exports = sendPdf
