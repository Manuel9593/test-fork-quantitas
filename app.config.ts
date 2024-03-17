export default defineAppConfig({
    ui: {
        primary: "blue",
        gray: 'zinc',
        button: {
            size: {
                "2xs": "text-xs",
                xs: "text-xs",
                sm: "text-sm",
                md: "text-md",
                lg: "text-lg",
                xl: "text-xl",
                "2xl": "text-2xl",
                "3xl": "text-3xl",
                "5xl": "3rem"
            },
            color: {
                white: {
                    outline: "ring-1 ring-inset ring-current text-black dark:text-white hover:bg-gray-50 disabled:bg-transparent dark:hover:bg-gray-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400"
                }
            }
        }
    },
})