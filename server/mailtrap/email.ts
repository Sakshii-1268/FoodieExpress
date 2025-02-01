import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail";
import { client, sender } from "./mailtrap";

export const sendVerificationEmail = async (
    email: string,
    verificationToken: string
) => {
    const recipients = [{ email }];
    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Verify your email",
            html:htmlContent.replace("{verificationToken}", verificationToken),
            category: "Email Verification",
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send email verification");
    }
};

export const sendWelcomeEmail = async (email: string, name: string) => {
    const recipients = [{ email }];
    const htmlContent = generateWelcomeEmailHtml(name);
    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Welcome to GoFood",
            html: htmlContent,
            template_variables: {
                company_info_name: "Go Food",
                name: name
            }
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send welcome email");
    }
};

export const sendPasswordResetEmail = async (email: string, resetURL: string) => {
    const recipients = [{ email }];
    const htmlContent = generatePasswordResetEmailHtml(resetURL);
    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Reset Your Password",
            html: htmlContent,
            category: "Reset Password"
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to reset password");
    }
}

export const sendResetSuccessEmail = async (email: string) => {
    const recipients = [{ email }];
    const htmlContent = generateResetSuccessEmailHtml();
    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Your Password Reset Successfully",
            html: htmlContent,
            category: "Password Reset"
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send password reset success email");
    }
}
