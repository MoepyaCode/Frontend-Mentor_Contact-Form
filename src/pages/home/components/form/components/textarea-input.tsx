import { Wrapper } from '@app-components'
import React from 'react'

type Props = {
    name: string
    title: string
    className?: string
    verification: ErrorState
}

export default function TextAreaInput(props: Props) {
    const error = props.verification.error
    const hasError = props.verification.hasError

    return (
        <Wrapper className='flex-grow flex flex-col gap-2'>
            <Wrapper className='flex flex-col gap-2'>
                <Wrapper className='flex gap-2'>
                    <h2 className='body-s text-green-900'>{props.title}</h2>
                    <span className='text-green-600'>*</span>
                </Wrapper>

                <textarea name={props.name} className={`min-h-[240px] sm:min-h-[105px] outline-none border ${hasError ? 'border-red' : 'border-green-500 hover:border-green-600'} body-m text-green-900 rounded-lg px-6 py-3  transition-colors ease-in`} />
            </Wrapper>
            {hasError && <span className='body-s text-red'>{error}</span>}
        </Wrapper>
    )
}
