import React from "react";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormRemoveButton as FormRemoveButton,
  unstable_FormPushButton as FormPushButton,
  unstable_FormSubmitButton as FormSubmitButton,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
} from "reakit/Form";

function ContactForm() {
  const form = useFormState({
    values: {
      people: [{ name: "", email: "", message: "" }],
    },
    onValidate: (values) => {
      const errors = {};
      values.people.forEach((value, i) => {
        if (!value.email) {
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
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form {...form}>
      {form.values.people.map((_, i) => (
        <React.Fragment key={i}>
          <FormLabel {...form} name={["people", i, "name"]}>
            Name
          </FormLabel>
          <FormInput {...form} name={["people", i, "name"]} />
          <FormMessage {...form} name={["people", i, "name"]} />

          <FormLabel {...form} name={["people", i, "email"]}>
            Email
          </FormLabel>
          <FormInput {...form} type="email" name={["people", i, "email"]} />
          <FormMessage {...form} name={["people", i, "email"]} />
          
          <FormLabel {...form} name={["people", i, "message"]}>
            Message
          </FormLabel>
          <FormInput {...form} type="email" name={["people", i, "message"]} />
          <FormMessage {...form} name={["people", i, "message"]} />
          
        </React.Fragment>
      ))}
      <br />
      <FormSubmitButton {...form}>Send</FormSubmitButton>
    </Form>
  );
}



        
export default ContactForm;
