import { CSSProperties, useEffect, useState } from "react";
import { OptionType } from "../types";
interface PollStyle {
  container?: CSSProperties
  title?: CSSProperties
  optionsContainer?: CSSProperties
  optionLabel?: CSSProperties
  optionInput?: CSSProperties
  progressBar?: CSSProperties
  progressBarFill?: CSSProperties
  removeButton?: CSSProperties
  optionVotes?: CSSProperties
}


type PollProps = {
  pollId: number;
  title: string;
  options: OptionType[];
  isMultiple?: boolean;
  onVote: (pollId: number, selectedOptions: number[]) => Promise<OptionType[]>
  onVoteRemove: (pollId: number, selectedOptions: number[]) => Promise<OptionType[]>
  styles?: PollStyle

}

export const PollWidget: React.FC<PollProps> = ({
  onVote,
  onVoteRemove,
  options,
  pollId,
  title,
  isMultiple,
  styles
}) => {

  const [selectedOptions, setSelectedOptions] = useState<number[]>([])
  const [currentOptions, setCurrentOptions] = useState<OptionType[]>(options)

  useEffect(() => {
    const storedVotes = localStorage.getItem(`poll-${pollId}`)
    if (storedVotes) {
      setSelectedOptions(JSON.parse(storedVotes))
    }
    return () => {
    }
  }, [pollId])


  const handleVote = async (optionId: number) => {
    let newSelectedOptions: number[]
    if (isMultiple) {
      if (selectedOptions.length > 0 && selectedOptions.includes(optionId)) {
        newSelectedOptions = selectedOptions.filter(id => id !== optionId)
        const updatedOptions = await onVoteRemove(pollId, [optionId])
        setCurrentOptions(updatedOptions)
      } else {
        newSelectedOptions = [...selectedOptions, optionId]
        /****
         * on vote i was adding newSelectedOptions to api,
         * but we have only add  one vote
         * **/
        const updatedOptions = await onVote(pollId, [optionId])
        setCurrentOptions(updatedOptions)
      }
    } else {
      if (selectedOptions.length > 0 && selectedOptions[0] !== optionId) {
        const updatedOptions = await onVoteRemove(pollId, selectedOptions)
        setCurrentOptions(updatedOptions)
      }
      newSelectedOptions = [optionId]
      const updatedOptions = await onVote(pollId, newSelectedOptions)
      setCurrentOptions(updatedOptions)
    }

    setSelectedOptions(newSelectedOptions)
    localStorage.setItem(`poll-${pollId}`, JSON.stringify(newSelectedOptions))
  }

  const handleRemoveVote = async () => {
    const updatedOptions = await onVoteRemove(pollId, selectedOptions)
    setSelectedOptions([])
    localStorage.removeItem(`poll-${pollId}`)
    setCurrentOptions(updatedOptions)
  }

  const totalVotes = currentOptions.reduce((all, ele) => all + ele.votes, 0)

  return (
    <fieldset
      className="p-4 border border-gray-300 rounded-lg max-w-md mx-auto"
      role="group"
      style={styles.container}
      aria-labelledby={`poll-${pollId}-title`}
    >
      <legend className="text-lg font-semibold" style={styles.title}
        id={`poll-${pollId}-title`}
      >
        {title}
      </legend>

      <div className="space-y-2 overflow-y-auto"
        style={{
          ...styles.optionsContainer,
          maxHeight: currentOptions.length > 4 ? "200px" : "auto"
        }}
      >
        {currentOptions.map(({ id, votes, title }) => {

          const percent = totalVotes > 0 ? (votes / totalVotes) * 100 : 0

          return (<div className="space-y-1" key={id}>
            <div className="flex items-center justify-between">
              <label
                htmlFor={`option-${id}`}
                style={styles.optionLabel}
                className="flex items-center space-x-2">
                <input
                  id={`option-${id}`}
                  type={isMultiple ? "checkbox" : "radio"}
                  checked={selectedOptions.includes(id)}
                  // aria-checked={selectedOptions.includes(id)}
                  aria-describedby={`option-${id}-info`}
                  onChange={() => handleVote(id)}
                  style={styles.optionInput}
                />
                <span id={`option-${id}-info`}>{title}</span>
              </label>
              {selectedOptions.length > 0 && (
                <span style={styles.optionVotes}>{votes} votes ({percent.toFixed(1)}%) </span>
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2" style={styles.progressBar}>
              {selectedOptions.length > 0 && <>
                <div className="bg-blue-500 h-full rounded-full transform origin-left"
                  style={{
                    ...styles.progressBarFill,
                    transform: `scaleX(${percent / 100}) `
                  }}
                ></div>
              </>}
            </div>
          </div>)
        })}
      </div>
      {selectedOptions.length > 0 && <><button
        onClick={handleRemoveVote}
        style={styles.removeButton}
        className="mt-4 bg-red-500 text-white py-1 px-3 rounded"
      >Remove vote</button></>}
    </fieldset>
  )
}
