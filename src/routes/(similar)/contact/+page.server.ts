import { redirect, type Actions } from "@sveltejs/kit";
import nodeMailer from "nodemailer"
import { RECEIVER_EMAIL, SENDER_EMAIL, SENDER_PWD, SMTP_HOST, SMTP_PORT } from "$env/static/private";

/***
 * 
 * USING NODEMAILER
    > Create a transporter. Use SMTP or another supported transport.
    > Compose a message. Define sender, recipient(s), subject, and content.
    > Send it with transporter.sendMail().
 */

export const actions:Actions = {
    default: async({request})=>{
        const formdata = await request.formData();
        const email = formdata.get("email");
        const message = formdata.get("message");

        if (email&&message){
            console.log("form values received", `Email: ${email} | Message: ${message}`);
        }

        //configure nodemailer here
        //1. create transporter
        const transporter=nodeMailer.createTransport({
            host: SMTP_HOST,
            port: 465,
            secure: false,
            auth: {
                user: SENDER_EMAIL,
                pass: SENDER_PWD
            }
        });

        //2. create message
        const html=`
        <div>Sender Email: ${email}</div>
        <div>The Message:</div>
        <div>${message}</div>
        `
        
        const sendmail=await transporter.sendMail({
            from: SENDER_EMAIL,
            to: RECEIVER_EMAIL,
            subject: "New Message from the ESIWAMA Website",
            html: html
        });

        if(sendmail.rejected){
            console.log(`Message not sent: `, sendmail.messageId);
        }
        else{
            console.log(`Message Sent: `, sendmail.messageId)

            return redirect(302, "/thanks");
        }
    }
}