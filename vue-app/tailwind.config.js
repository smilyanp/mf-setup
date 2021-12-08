module.exports = {
    purge: {
        content: [
            './src/**/*.html',
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.ts',
            './src/**/*.jsx',
            './src/**/*.tsx',
        ],
    },

    darkMode: false, // or 'media' or 'class'

    theme: {
        fontFamily: {
            sans: ['"Open Sans"', 'Arial', 'Helvetica', 'sans-serif'],
        },

        extend: {
            zIndex: {
                150: 150,
            },

            spacing: {
                72: '18rem',
                84: '21rem',
                96: '24rem',
                drawer: '34rem',
            },

            opacity: {
                40: '.4',
            },

            // Extend the Tailwind palette with the IRIS design system palette:
            // https://www.figma.com/file/InVkMn8AL9r3hCceiNMUWh/IRIS-Elements-UI-Kit?node-id=78%3A19
            colors: {
                'iris-primary-red': '#C8102E',
                'iris-primary-blue': '#1B69B9',
                'iris-primary-grey': '#24303B',

                'iris-gray-80': '#505962',
                'iris-gray-70': '#666E76',
                'iris-gray-40': '#A7ACB1',
                'iris-gray-20': '#D3D6D8',
                'iris-gray-15': '#24303B',
                'iris-gray-10': '#E9EAEB',
                'iris-gray-5': '#F7F8FA',

                'iris-red': '#DF0024',
                'iris-orange': '#FF9504',
                'iris-yellow': '#FFD704',
                'iris-green': '#129D00',
                'iris-blue': '#1C93E3',
                'iris-purple': '#93328E',
                'iris-pink': '#CE047C',

                'iris-red-5': '#FDF2F4',
                'iris-orange-10': '#FFF4E6',
                'iris-yellow-20': '#FFF7CD',
                'iris-green-10': '#E7F5E5',
                'iris-blue-10': '#E8F4FC',
                'iris-purple-10': '#E9D6E8',
                'iris-pink-5': '#FDF2F8',
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