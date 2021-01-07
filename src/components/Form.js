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
        values: { name: "", email:"", message: "" },
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
            alert("Thank you for your message. We will contact you back soon.");
        },
    });
    return (
        <div className='TalkToUs'>
        <Form {...form}>
            <FormLabel {...form} name="name" className = 'FormLabel'>Name</FormLabel>
            <FormInput {...form} name="name" placeholder="Love Me" autocomplete="name" className ='form'/>
            <FormMessage {...form} name="name" />

            <FormLabel {...form} name="email" className = 'FormLabel'>Email</FormLabel>
            <FormInput {...form} name="email" placeholder="LoveMe@gmail.com" autocomplete="email" className ='form'/>
            <FormMessage {...form} name="email" />

            <FormLabel {...form} name="message" className = 'FormLabel'>Message</FormLabel>
            <FormInput {...form} name="message" placeholder="What's on your mind?" as="textarea" className ='form'/>
            <FormMessage {...form} name="message" className ='alert'/>

            <FormSubmitButton {...form} className = 'btn' >Send</FormSubmitButton>
        </Form>
        </div>
    );
}

export default ContactForm;