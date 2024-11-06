import { OptionType, PollType } from "../types";

export const fetchPoll = async (pollId: number): Promise<PollType> => {
    const response = await fetch(`http://localhost:3000/polls/${pollId}`)

    if (!response.ok) {
        throw new Error("Failed to fetch poll")
    }

    return response.json()
}

export const handleSubmitVote = async (pollId: number, selectedOptions: number[]): Promise<OptionType[]> => {

    const poll = await fetchPoll(pollId)
    const updatedOptions = poll.options.map(option => {
        if (selectedOptions?.includes(option.id)) {
            return { ...option, votes: option.votes + 1 }
        }
        return option
    })

    const totalCount = updatedOptions.reduce((all, option) => all + option.votes, 0)

    await fetch(`http://localhost:3000/polls/${pollId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ options: updatedOptions, totalCount })
    })

    return updatedOptions
}

export const handleRemoveVote = async (pollId: number, selectedOptions: number[]): Promise<OptionType[]> => {
    const poll = await fetchPoll(pollId)
    const updatedOptions = poll.options.map(option => {
        if (selectedOptions?.includes(option.id)) {
            return { ...option, votes: option.votes > 0 ? option.votes - 1 : 0 }
        }
        return option
    })

    const totalCount = updatedOptions.reduce((all, option) => all + option.votes, 0)

    await fetch(`http://localhost:3000/polls/${pollId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ options: updatedOptions, totalCount })
    })

    return updatedOptions
}