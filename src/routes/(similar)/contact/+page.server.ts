import { redirect, type Actions } from "@sveltejs/kit";

export const actions:Actions = {
    default: async({request})=>{
        const formdata = await request.formData();
        const email = formdata.get("email");
        const message = formdata.get("message");

        if (email&&message){
            console.log("form values received", `Email: ${email} | Message: ${message}`);
        }

        //configure nodemailer here

        return redirect(302, "/thanks");
    }
}