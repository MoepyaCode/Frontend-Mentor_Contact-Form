import { Wrapper } from '@app-components'
import RadioInput from './radio-input'

type Props = {
    title: string
    verification: ErrorState
}

export default function GroupRadioInput(props: Props) {
    const error = props.verification.error
    const hasError = props.verification.hasError

    return (
        <Wrapper className='flex flex-col gap-4'>
            <Wrapper className='flex gap-2'>
                <h2 className='body-s text-green-900'>{props.title}</h2>
                <span className='text-green-600'>*</span>
            </Wrapper>

            <Wrapper className='flex-grow flex flex-wrap gap-4'>
                <RadioInput
                    id='general-enquiry'
                    title='General Enquiry'
                    name='queryType'
                />

                <RadioInput
                    id='support-request'
                    title='Support Request'
                    name='queryType'
                />
            </Wrapper>

            {hasError && <span className='body-s text-red'>{error}</span>}
        </Wrapper>
    )
}
