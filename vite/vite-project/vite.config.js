import { defineConfig } from 'vite'

export default defineConfig(({ mode, command, isSsrBuild }) => {

    console.log(command, mode, isSsrBuild);
    if (mode === "production") {
        return {
            base: "/vite/"
        }
    }


    return {}
})