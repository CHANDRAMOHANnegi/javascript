import { OptionType, PollType } from "../types";

export const fetchPoll = async (pollId: number): Promise<PollType> => {
    const response = await fetch(`https://localhost:3000/polls/${pollId}`)
    if (!response.ok) {
        throw new Error("Failed to fetch poll")
    }

    return response.json()
}

export const submitVote = async (pollId: number, selectedOptions: number[]): Promise<OptionType> => {


}

export const removeVote = async (pollId: number, selectedOptions: number[]): Promise<OptionType> => {


}