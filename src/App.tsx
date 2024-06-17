import "./App.css";
import { useForm, useFormState } from "react-hook-form";
import Heading from "./components/typography/Heading";
import LabeledField from "./components/LabeledField";
import BodyM from "./components/typography/BodyM";
import RadioButton from "./components/RadioButton";
import Checkbox from "./components/Checkbox";
import Toast from "./components/Toast";
import Body from "./components/typography/BodyS";
import checkImg from "./assets/images/icon-success-check.svg";
import { useEffect, useState } from "react";
import WithErrorMessages from "./components/WithErrorMessages";

const REQUIRED_FIELD_MSG = "This field is required";
const REQUIRED_CHECKBOX_MSG =
  "To submit this form, please consent to being contacted";
const REQUIRED_RADIO_MSG = "Please select a query type";
const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

export default function App() {
  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      givenName: "",
      lastName: "",
      email: "",
      message: "",
      consent: false,
      query: undefined
    }
  });
  const { isSubmitSuccessful } = useFormState({ control })
  const [toastVisible, setToastVisible] = useState(false)
  const onSubmit = () => {
    setToastVisible(true)
  }
  useEffect(() => {
    reset()
  }, [isSubmitSuccessful, reset])
  return (
    <>
      <div
        className={`absolute flex justify-center w-full z-10 top-[0] left-[0] p-300 ${
          toastVisible ? "visible" : "invisible"
        }`}
      >
        <Toast
          headerSlot={() => (
            <div className="flex flex-row gap-100 items-center">
              <img className="size-[19.5px]" src={checkImg} alt="" />
              <BodyM className="text-white" bold>
                Message Sent!
              </BodyM>
            </div>
          )}
          contentSlot={() => (
            <Body className="text-green-200">
              Thanks for completing the form. We’ll be in touch soon!
            </Body>
          )}
        ></Toast>
      </div>
      <form
        className="flex flex-col gap-500 z-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading><h1 className="-mb-100">Contact Us</h1></Heading>
        <fieldset className="flex flex-row gap-300 items-start max-w-full flex-wrap">
          <WithErrorMessages
            className="items-stretch flex-grow"
            error={errors.givenName}
          >
            <LabeledField
              required
              label="First Name"
              inputFunctions={[
                (classes, key) => (
                  <input
                    key={key}
                    className={classes}
                    type="text"
                    autoComplete="given-name"
                    aria-invalid={errors.givenName ? "true" : undefined}
                    {...register("givenName", { required: REQUIRED_FIELD_MSG })}
                  />
                ),
              ]}
            ></LabeledField>
          </WithErrorMessages>
          <WithErrorMessages
            className="items-stretch flex-grow"
            error={errors.lastName}
          >
            <LabeledField
              required
              label="Last Name"
              inputFunctions={[
                (classes, key) => (
                  <input
                    key={key}
                    className={classes}
                    type="text"
                    autoComplete="family-name"
                    aria-invalid={errors.lastName ? "true" : undefined}
                    {...register("lastName", { required: REQUIRED_FIELD_MSG })}
                  />
                ),
              ]}
            ></LabeledField>
          </WithErrorMessages>
          <WithErrorMessages
            className="items-stretch flex-grow"
            error={errors.email}
          >
            <LabeledField
              className="items-stretch flex-grow flex-shrink-0"
              required
              label="Email Address"
              inputFunctions={[
                (classes, key) => (
                  <input
                    key={key}
                    className={classes}
                    type="email"
                    autoComplete="email"
                    aria-invalid={errors.email ? "true" : undefined}
                    aria-errormessage={errors.email ? `${errors.email.message}` : undefined}
                    {...register("email", { required: REQUIRED_FIELD_MSG, pattern: {
                      value: EMAIL_PATTERN,
                      message: "Please enter a valid email address"
                    } })}
                  />
                ),
              ]}
            ></LabeledField>
          </WithErrorMessages>
          <WithErrorMessages
            className="items-stretch flex-grow"
            error={errors.query}
          >
            <LabeledField
              className="items-stretch flex-grow flex-shrink-0"
              required
              label="Query Type"
              legend="Select your query type"
              inputFunctions={["General Enquery", "Support Request"].map(
                (field) => (classes, key) =>
                  (
                    <RadioButton
                      className={classes}
                      key={key}
                      value={field}
                      register={register("query", {
                        required: REQUIRED_RADIO_MSG,
                      })}
                    ></RadioButton>
                  )
              )}
            ></LabeledField>
          </WithErrorMessages>
          <WithErrorMessages
            className="items-stretch flex-grow"
            error={errors.message}
          >
            <LabeledField
              className="items-stretch flex-grow flex-shrink-0"
              required
              label="Message"
              inputFunctions={[
                (classes, key) => (
                  <textarea
                    key={key}
                    aria-invalid={errors.message ? "true" : undefined}
                    className={`${classes} min-h-[240px] tablet:min-h-[132px] desktop:min-h-[105px]`}
                    {...register("message", { required: REQUIRED_FIELD_MSG })}
                  />
                ),
              ]}
            ></LabeledField>
          </WithErrorMessages>
        </fieldset>
        <WithErrorMessages
          className="items-stretch flex-grow"
          error={errors.consent}
        >
          <Checkbox
            register={register("consent", { required: REQUIRED_CHECKBOX_MSG })}
            label="I consent to being contacted by the team"
            required
          ></Checkbox>
        </WithErrorMessages>

        <button
          className="bg-green-600 px-500 py-200 rounded-lg hover:bg-green-600-darker outline-grey-900"
          aria-label="Submit form"
          type="submit"
        >
          <BodyM className="text-white" bold>
            Submit
          </BodyM>
        </button>
      </form>
    </>
  );
}
