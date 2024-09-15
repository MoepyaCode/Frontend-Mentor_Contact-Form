import React from 'react'

type Props = {
    id: string
    name: string
    title: string
    className?: string
}

export default function RadioInput(props: Props) {
  return (
    <label className='flex-grow px-6 py-3 flex flex-nowrap gap-[14.25px] items-center border border-green-500 rounded-lg has-[:checked]:border-green-600 has-[:checked]:bg-green-200 hover:border-green-600 transition-colors ease-in cursor-pointer' htmlFor={props.id}>
        <input type="radio" name="queryType" id={props.id} className='appearance-none flex justify-center items-center min-w-[18.5px] aspect-square border border-green-500 rounded-full before:absolute before:w-[calc(18.5px/1.75)] before:aspect-square before:bg-transparent before:rounded-full checked:before:bg-green-600 checked:border-green-600 transition-colors ease-in' />
        <span className='body-m text-green-900'>{props.title}</span>
    </label>
  )
}
