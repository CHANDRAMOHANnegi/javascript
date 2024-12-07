import { useEffect, useState } from 'react';
import { PollWidget } from './components/poll';
import { PollType } from './types';
import { fetchPoll, handleRemoveVote, handleSubmitVote } from './db/api';

function PollApp() {
    const [pollData, setPollData] = useState<PollType | null>(null)

    useEffect(() => {
        const loadPoll = async () => {
            try {
                const data = await fetchPoll(41)
                setPollData(data)
                // console.log('data', data);
            } catch (error) {
                console.log(error);
            }
        }
        loadPoll()
    }, [])


    if (!pollData)
        return <div>
            ...loading
        </div>

    return (
        <div className="min-h-screen flex items-start pt-20 justify-center bg-gray-100">
            <PollWidget
                pollId={pollData.id}
                title={pollData.question}
                options={pollData.options}
                onVote={handleSubmitVote}
                onVoteRemove={handleRemoveVote}
                styles={{}}
                isMultiple
            />
        </div>
    );
}

export default PollApp;
