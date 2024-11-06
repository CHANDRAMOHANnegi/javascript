export type PollType = {
    id: number
    question: string
    totalCount: number
    options: OptionType[]
}

export type OptionType = {
    id: number
    title: string
    votes: number
}