
export default function SubmitButton() {
  return (
    <button className='relative flex justify-center items-center overflow-hidden min-h-[59px] bg-green-600 body-m-bold text-white rounded-lg before:absolute before:w-full before:h-full before:bg-transparent hover:before:bg-[rgba(0,0,0,.5)] before:transition-colors before:ease-in cursor-pointer' type="submit">
        <span className='z-[1]'>Submit</span>
    </button>
  )
}
