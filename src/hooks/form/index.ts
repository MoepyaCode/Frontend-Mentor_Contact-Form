import _ from "lodash";
import { useState } from "react";

const ErrorState = {
    error: null,
    hasError: false
}

const ErrorsInitState: Record<keyof FormState, ErrorState> = {
    firstName: ErrorState,
    lastName: ErrorState,
    email: ErrorState,
    queryType: ErrorState,
    message: ErrorState,
    consent: ErrorState
}

export function useVerificationForm() {
    const [errors, setErrors] = useState<Record<keyof FormState, ErrorState>>(ErrorsInitState)
    const [verificationPassed, setVerificationPassed] = useState<boolean | null>(null)

    const verifyForm = (formState: FormState) => {
        let newVerificationPassed = true
        setErrors(() => {
            const newState = { ...ErrorsInitState }

            for (const key of Object.keys(errors) as Array<keyof FormState>) {
                if ((key === 'firstName' || key === 'lastName' || key === 'message') && emptyStringCheck(formState[key])) {
                    newState[key] = {
                        error: 'This field is required',
                        hasError: true
                    }
                    newVerificationPassed = false
                }

                if (key === 'email' && !emailCheck(formState[key])) {
                    newState[key] = {
                        error: 'Please enter a valid email address',
                        hasError: true
                    }
                    newVerificationPassed = false
                }

                if (key === 'queryType' && (formState[key] === undefined || emptyStringCheck(formState[key]))) {
                    newState[key] = {
                        error: 'Please select a query type',
                        hasError: true
                    }
                    newVerificationPassed = false
                }

                if (key === 'consent' && (formState[key] === undefined || formState[key] === 'off')) {
                    newState[key] = {
                        error: 'To submit this form, please consent to being contacted',
                        hasError: true
                    }
                    newVerificationPassed = false
                }
            }

            setVerificationPassed(newVerificationPassed)
            return newState
        })
    }

    return {
        errors,
        verificationPassed,
        verifyForm
    }
}

function emptyStringCheck(value: string) {
    return _.isEmpty(value);
}

function emailCheck(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}