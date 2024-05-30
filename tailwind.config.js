/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '200ch',
                    }
                }
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
