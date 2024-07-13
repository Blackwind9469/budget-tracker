export function addCommas(x: number):string{
    return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
}