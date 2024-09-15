import { Wrapper } from "@app-components"
import { useVerificationForm } from "@app-hooks"
import {
  GroupTextInput,
  GroupRadioInput,
  CheckboxInput,
  TextAreaInput,
  SubmitButton,
} from "./components"
import React, { useEffect } from "react"
import _ from "lodash"

type Props = {
  handleVerification: (value: boolean | null) => void
}

export default function Form(props: Props) {
  const {
    errors,
    verificationPassed,
    verifyForm
  } = useVerificationForm()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries()) as unknown as FormState
    verifyForm(data)
  }

  useEffect(() => {
    if (verificationPassed) {
      props.handleVerification(verificationPassed)
    }

  }, [verificationPassed])

  return (
    <form onSubmit={handleSubmit} className="max-w-[736px] w-full bg-white p-6 sm:p-10 flex flex-col gap-10 rounded-2xl">

      <Wrapper className="flex flex-col gap-8">
        <h1 className="body-m-bold sm:heading text-green-900">Contact Us</h1>

        <Wrapper className="flex flex-col gap-6">
          <Wrapper className="flex flex-wrap gap-6">
            <GroupTextInput
              title="First Name"
              name="firstName"
              verification={errors.firstName}
            />

            <GroupTextInput
              title="Last Name"
              name="lastName"
              verification={errors.lastName}
            />
          </Wrapper>

          <GroupTextInput
            title="Email"
            name="email"
            verification={errors.email}
          />

          <GroupRadioInput
            title="Query Type"
            verification={errors.queryType}
          />

          <TextAreaInput
            title='Message'
            name='message'
            verification={errors.message}
          />
        </Wrapper>
      </Wrapper>

      <CheckboxInput verification={errors.consent} />

      <SubmitButton />
    </form>
  )
}
