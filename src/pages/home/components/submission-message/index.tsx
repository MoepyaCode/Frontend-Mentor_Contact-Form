import { Wrapper } from '@app-components'
import successfulSubmission from '@app-assets/successful-submission.svg'

type Props = {
  verification: boolean | null
}

export default function SubmissionMessage(props: Props) {
  return (
    <Wrapper className={`fixed ${props.verification ? 'top-[2rem] animate-fadeIn' : 'top-[-100%] animate-fadeOut'} flex flex-col gap-2 bg-green-900 min-h-[107px] p-6 rounded-xl`}>
        <Wrapper className='flex gap-2'>
            <img src={successfulSubmission} alt="" />
            <span className='body-m-bold text-white'>Message Sent!</span>
        </Wrapper>
        <p className='body-s text-green-200'>Thanks for completing the form. We’ll be in touch soon!</p>
    </Wrapper>
  )
}
