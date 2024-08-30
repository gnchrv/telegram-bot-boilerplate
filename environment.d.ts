// Declare types for the environment variables
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TELEGRAM_BOT_TOKEN: string
            PORT: string
        }
    }
}

// Convert the file into a module by adding an empty export statement
export { }