import { redirect } from "@sveltejs/kit";
import type {Actions, PageServerLoad} from "./$types"
import nodeMailer from "nodemailer"

const env=import.meta.env;

export const load:PageServerLoad=async()=>{
    console.log("sender: ", import.meta.env.BRUH);
}

export const actions:Actions={
    default: async({request})=>{
        const formdata=await request.formData();

        const sender_name=formdata.get("your_name");
        const email=formdata.get("your_email");
        const message=formdata.get("your_message");

        // console.log({sender_name, email, message});
        const user= env.VITE_NODEMAILER_SENDER;
        const pass= env.VITE_NODEMAILER_SENDER_PASSWORD;
        console.log({user,pass})

        const transporter=nodeMailer.createTransport({
            host: "mail.germahgroup.com",
            port: 465,
            secure: true,
            auth: {
                user: "webform@germahgroup.com",
                pass: "germah@2023"
            }
        });

        const html=`
        <div>Sender Name: ${sender_name}</div>
        <div>Sender Email: ${email}</div>
        <div>The Message:</div>
        <div>${message}</div>
        `

        const sendmail=await transporter.sendMail({
            from: env.VITE_NODEMAILER_SENDER,
            to: "info@germahgroup.com",
            subject: "New Message from the Website",
            html: html
        });

        if(sendmail.messageId){
            throw redirect(302, "/thanks");
        }
        else{
            return {
                error: "Email not sent. Try again."
            }
        }

    }
}