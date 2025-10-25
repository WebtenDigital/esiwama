import { redirect, type Actions } from "@sveltejs/kit";
import nodeMailer from "nodemailer"

export const actions:Actions = {
    default: async({request})=>{
        const formdata = await request.formData();
        const email = formdata.get("email");
        const message = formdata.get("message");

        if (email&&message){
            console.log("form values received", `Email: ${email} | Message: ${message}`);
        }

        const html=`
        <div>Sender Email: ${email}</div>
        <div>The Message:</div>
        <div>${message}</div>
        `

        //configure nodemailer here
        const transporter=nodeMailer.createTransport({
            host: ""
        })

        return redirect(302, "/thanks");
    }
}