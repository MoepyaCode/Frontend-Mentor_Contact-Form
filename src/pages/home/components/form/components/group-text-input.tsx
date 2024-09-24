import { Wrapper } from '@app-components'

type Props = {
    name: string
    title: string
    verification: ErrorState
    className?: string
}

export default function GroupTextInput(props: Props) {
    const error = props.verification.error
    const hasError = props.verification.hasError

    return (
        <Wrapper className='flex-grow flex flex-col gap-2'>
            <Wrapper className='flex flex-col  gap-2'>
                <Wrapper className='flex gap-2'>
                    <h2 className='body-s text-green-900'>{props.title}</h2>
                    <span className='text-green-600'>*</span>
                </Wrapper>

                <input type="text" name={props.name} className={`min-h-[51px] outline-none border ${hasError ? 'border-red' : 'border-green-500 hover:border-green-600'} body-m text-green-900 rounded-lg pl-6  transition-colors ease-in`} />
            </Wrapper>
            {hasError && <span className='body-s text-red'>{error}</span>}
        </Wrapper>
    )
}
