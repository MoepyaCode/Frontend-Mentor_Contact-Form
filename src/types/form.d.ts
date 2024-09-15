declare interface FormState {
    /**
     * @description User's name
     */
    firstName: string;
    /**
     * @description User's last name
     */
    lastName: string;
    /**
     * @description User's email
     */
    email: string;
    /**
     * @description User's query type
     */
    queryType: string;
    /**
     * @description User's message
     */
    message: string;
    /**
     * @description User's consent
     */
    consent: 'on' | 'off';
}

declare interface VerificationFormState {
    /**
     * @description Form input errors
     */
    errors: Record<keyof FormState, ErrorState>;
    /**
     * @description Form input verification status
     */
    verificationPassed: boolean | null;
}

declare interface ErrorState {
    /**
     * @description Error message
     */
    error: string | null
    /**
     * @description Error status
     */
    hasError: boolean
}