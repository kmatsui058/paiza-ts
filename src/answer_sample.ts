export default function main(lines: string[], debug = false): string {
    const numbers: number[] = lines.map(line => Number(line))
    let result = numbers[0]
    numbers.forEach(number => {
        if (number < result)
            result = number
    })
    if(debug) console.log('hoge')
    return result.toFixed()
}
