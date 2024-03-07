import {createHash} from 'node:crypto'

export const generateSHA256Hex = (data: string): string => {
    const hash = createHash('sha256')
    hash.update(data)
    return hash.digest('hex')
}