module.exports = {
    purge: ['./public/**/*.html', './src/**/*.vue'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', 'Arial', 'Helvetica', 'sans-serif'],
            },

            zIndex: {
                150: 150,
                999: 999,
            },

            spacing: {
                72: '18rem',
                84: '21rem',
                96: '24rem',
                'dialog-wide': '800px',
            },

            opacity: {
                40: '.4',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['responsive', 'group-hover', 'group-focus', 'focus'],
        },
    },
    plugins: [],
};