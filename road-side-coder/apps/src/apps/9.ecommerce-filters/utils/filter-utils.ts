export const filterItemsByKey = <T>(items: T[], key: string, asc: boolean) => {
    if (!items || !key)
        return null
    return items?.sort((a, b) => {
        if (asc) {
            return a[key] - b[key]
        } else {
            return b[key] - a[key]
        }
    })
}