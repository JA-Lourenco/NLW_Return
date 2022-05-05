import { FormEvent, useState } from "react"

import { CloseButton } from "../../CloseButton"


import { FeedbackType, feedbackTypes } from ".."
import { ArrowLeft } from "phosphor-react"
import { ScreenshotButton } from "../ScreenshotButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({ 
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent
 } : FeedbackContentStepProps) {

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    function handleSubmitFeedback(event : FormEvent) {
        event.preventDefault()

        console.log({
            screenshot,
            comment
        })

        onFeedbackSent()
    }

    return (
        <>
            <header>
                <button 
                    onClick={onFeedbackRestartRequested}
                    type='button' 
                    className='top-5 left-5 absolute text-zinc-500 hover:text-zinc-100'
                >
                    <ArrowLeft weight='bold' className='w-4 h-4'/>
                </button>

                <span className='text-xl leading-6 flex items-center gap-2 px-8'>
                    <img 
                        src={feedbackTypeInfo.image.source} 
                        alt={feedbackTypeInfo.image.alt} 
                        className='w-6 h-6'
                    />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>

            <form onSubmit={handleSubmitFeedback} className='my-4 w-full'>
                <textarea 
                    onChange={event => setComment(event.target.value)}
                    placeholder='Conte com detalhes o que está acontecendo...'
                    className='
                        min-w=[304px] 
                        w-full 
                        min-h-[112px] 
                        text-sm 
                        placeholder-zinc-400 
                        text-zinc-100 
                        border-zinc-600
                        bg-transparent
                        rounded-md
                        focus:border-brand-500
                        focus:ring-brand-500
                        focus:ring-1
                        focus:outline-none
                        resize-none
                        scrollbar-thin
                        scrollbar-thumb-zinc-700
                        scrollbar-track-transparent
                    '
                />

                <footer className='flex gap-2 mt-2'>
                    <ScreenshotButton 
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />

                    <button 
                        disabled={comment.length === 0}
                        type='submit'
                        className='
                            p-2 
                            bg-brand-500 
                            rounded-md 
                            border-transparent 
                            flex-1 
                            flex 
                            justify-center 
                            items-center
                            text-sm
                            hover:bg-brand-300
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-offset-zinc-900
                            focus:ring-brand-500
                            transition-colors
                            disabled:opacity-50
                            disabled:hover:bg-brand-500
                        '
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}