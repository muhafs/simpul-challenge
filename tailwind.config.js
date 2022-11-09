/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-gray': '#333333',
				'person-gray': '#E0E0E0',
				'border-gray': '#BDBDBD',

				'primary-blue': '#2F80ED',
				'primary-light': '#F2F2F2',
				'primary-gray': '#828282',
				'primary-dark': '#4F4F4F',

				'indicator-orange': '#F8B76B',
				'indicator-purple': '#8785FF',
				'indicator-red': '#EB5757',
				'indicator-yellow': '#F2C94C',

				'chat-brown': '#FCEED3',
				'chat-purple': '#EEDCFF',
				'chat-green': '#D2F2EA',
				'sub-chat-brown': '#E5A443',
				'sub-chat-purple': '#9B51E0',
				'sub-chat-green': '#43B78D',
			},
			content: {
				person: 'url("@/assets/person_light.svg")',
			},
			fontFamily: {
				sans: ['Lato', 'Sans-serif'],
			},
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
