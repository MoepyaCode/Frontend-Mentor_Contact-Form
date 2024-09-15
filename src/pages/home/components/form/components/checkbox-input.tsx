
type Props = {
    verification: ErrorState
    className?: string
}

export default function CheckboxInput(props: Props) {
    const error = props.verification.error
    const hasError = props.verification.hasError
    return (
        <label htmlFor="" className='flex flex-col gap-2'>
            <div className='flex flex-nowrap gap-4'>
                <input className='border-green-500 accent-green-600 min-w-[18px] aspect-square' type="checkbox" name="consent" id="consent" />
                <div className='body-s'>
                    <span className='text-green-900'>I consent to being contacted by the team</span> <span className='text-green-600'>*</span>
                </div>
            </div>
            {hasError && <span className='body-s text-red'>{error}</span>}
        </label>
    )
}
