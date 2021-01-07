import React from "react";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormSubmitButton as FormSubmitButton,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
} from "reakit/Form";
import './ContactForm.css'

function ContactForm() {
  const form = useFormState({
    values: {
      people: [{ name: "", email: "", message: "" }],
    },
    onValidate: (values) => {
      const errors = {};
      values.people.forEach((value, i) => {
        if (!value.message) {
          if (!errors.people) {
            errors.people = [];
          }
          if (!errors.people[i]) {
            errors.people[i] = {};
          }

          errors.people[i].message =
            "Don't you want to send us a message?";
        
        }
      });
      if (Object.keys(errors).length) {
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert("Thank you for your message. We are now friends!");
    },
  });
  return (
    <div className='TalkToUs'>
      
    <Form {...form}>
      {form.values.people.map((_, i) => (
        <React.Fragment key={i}>
          <FormLabel {...form} className = 'FormLabel' name={["people", i, "name"]} for="name_field">
            Name
          </FormLabel>
          <FormInput {...form} className ='form' name={["people", i, "name"]} id="name_field"/>
          <FormMessage {...form} name={["people", i, "name"]} />

          <FormLabel {...form} className = 'FormLabel' name={["people", i, "email"]} for="email_field">
            Email
          </FormLabel>
          <FormInput {...form} className ='form' type="email" name={["people", i, "email"]} id="email_field"/>
          <FormMessage {...form} name={["people", i, "email"]} />
          
          <FormLabel {...form}  className = 'FormLabel' name={["people", i, "message"]} for="message_field">
            Message
          </FormLabel>
          
          <FormInput {...form} className ='form'  type="email" name={["people", i, "message"]} id="message_field"/>
          
          <FormMessage {...form} className= 'promptmessage' name={["people", i, "message"]} />
          
        </React.Fragment>
      ))}
      
      <FormSubmitButton {...form} className = 'btn'>Send</FormSubmitButton>
    </Form>
    </div>
  );
}



        
export default ContactForm;
