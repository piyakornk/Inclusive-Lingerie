import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import './ContactForm.css'

function ContactForm() {
  const form = useFormState({
      values: { name: "", email: "", message: "" },
      onValidate: (values) => {
          if (!values.name) {
              const errors = {
                  name: "How can we be friends without knowing your name?",
              };
              throw errors;
          }
          if (!values.email) {
              const errors = {
                  email: "Pretty please. So we can contact you back.",
              };
              throw errors;
          }
          if (!values.message) {
              const errors = {
                  message: "I thought you wanted to say something.",
              };
              throw errors;
          }
      },
      onSubmit: (values) => {
          <div> </div>
          alert("Thank you for your message. We will contact you back soon.");
      },
  });
  return (
      <div
          className='TalkToUs'
          role="form"
          aria-labelledby="message">
          <Form {...form}
              id="message">
              <FormLabel {...form} name="name" className='FormLabel' htmlFor="name_field" >Name</FormLabel>
              <FormInput {...form} name="name" className='form' id="name_field" placeholder="Love Me" autoComplete="name" />
              <FormMessage {...form} name="name" role="alert" className='promptmessage' />

              <FormLabel {...form} name="email" className='FormLabel' htmlFor="email_field">Email</FormLabel>
              <FormInput {...form} name="email" className='form' id="email_field" placeholder="LoveMe@gmail.com" autoComplete="email" />
              <FormMessage {...form} name="email" role="alert" className='promptmessage' />

              <FormLabel {...form} name="message" className='FormLabel' htmlFor="message_field">Message</FormLabel>
              <FormInput {...form} name="message" className='form' id="message_field" placeholder="What's on your mind?" as="textarea" />
              <FormMessage {...form} name="message" role="alert" className='promptmessage' />

              <FormSubmitButton {...form} className='btn' aria-controls="message" id="message_send">Send</FormSubmitButton>
          </Form>
      </div>
  );
}

export default ContactForm;