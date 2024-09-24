import { Main } from "@app-components"
import Form from "./components/form"
import { useState } from "react"
import SubmissionMessage from "./components/submission-message"

export default function Home() {
  const [verificationPassed, setVerificationPassed] = useState<boolean | null>(false)

  function handleVerificationPassed(value: boolean | null) {
    setVerificationPassed(value)
  }

  return (
    <Main className="relative bg-green-200 grid place-items-center px-4 py-8 xl:py-[128px]">
      {verificationPassed && <SubmissionMessage verification={verificationPassed} />}
      <Form handleVerification={handleVerificationPassed} />
    </Main>
  )
}