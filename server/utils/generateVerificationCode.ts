export const generateVerificationCode = (length = 6) : string => {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let verification = '';
    const charactersLength = characters.length;

    for(let i =0; i< length ; i++)
        {
            verification += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return verification;
};
