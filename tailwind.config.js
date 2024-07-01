/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    colors: {
      navred: "#EE1C25",
      white: "#FFFFFF",
      hoverred: "#FF646A",
      grey: "#EDE7E7",
      confirmed: "#0AA72C",
      waiting: "#EE8D1C",
      danger: "#C7C017",
      blue: "#1C63EE",
      tgrey: "#828282",
    },
    backgroundImage: {
      'inicio': "url('/src/images/Inicio.jpg')",
      'cocacola': "url('/src/images/cocacola.jpg')",
      'pepsi': "url('/src/images/pepsi.jpg')",
      'guarana': "url('/src/images/guarana.jpg')",
      'maxlaranjinha': "url('/src/images/maxlaranjinha.jpg')",
      'maxframboesa': "url('/src/images/maxframboesa.jpg')",
      'cocacolalata': "url('/src/images/cocacolalata.jpg')",
      'cocacolazerolata': "url('/src/images/cocacolazerolata.jpg')",
      'guaranalata': "url('/src/images/guaranalata.jpg')",
      'spritelata': "url('/src/images/spritelata.jpg')",
      'spritezerolata': "url('/src/images/spritezerolata.jpg')",

      'fantalaranjalata': "url('/src/images/fantalaranjalata.jpg')",
      'fantauvalata': "url('/src/images/fantauvalata.jpg')",
      'fantamaracujalata': "url('/src/images/fantamaracujalata.jpg')",
      'fantaguaranalata': "url('/src/images/fantaguaranalata.jpg')",
      'fantaguaranazerolata': "url('/src/images/fantaguaranazerolata.jpg')",
    },
  },
  plugins: [],
}

