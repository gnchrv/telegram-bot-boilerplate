// Indicate that the files is a module to avoid errors while declaring augumentations for the global scope below
export { }

/* 
Augument the ProcessEnv interface that is reponsible for handling `process.env` properties. Redeclare it globally and specifically for the NodeJS namespace
*/
declare global {
    namespace NodeJS {
        interface ProcessEnv {

            // Defiine a list of variables used by the app
            PORT: string
            TELEGRAM_BOT_TOKEN: string

            // Specify the general type for other possible environment variables
            [key: string]: string | undefined
        }
    }
}