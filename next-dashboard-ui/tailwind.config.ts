import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    '.react-calendar__title--active',
    '.react-calendar__navigation__label__labeltext',
    'rbc-btn-group:first',
    'rbc-toolbar-label',
    'rbc-btn-group:last-child',
    'rbc-btn-group:last-child button',
    'rbc-toolbar button.rbc-active',
    'rbc-time-view',
    'rbc-time-header',
    'rbc-time-content',
    'rbc-time-gutter.rbc-time-column',
    'rbc-time-gutter.rbc-time-column .rbc-timeslot-group',
    'rbc-timeslot-group',
    'rbc-day-slot',
    'rbc-event',
    'rbc-event:nth-child(1)',
    'rbc-event:nth-child(2)',
    'rbc-event:nth-child(3)',
    'rbc-event:nth-child(4)',
    'rbc-event:nth-child(5)',
    'rbc-event:nth-child(6)',
    'rbc-event:nth-child(7)',
    'rbc-event:nth-child(8)',
    'rbc-event-label',
    'rbc-event-content',
    'react-calendar', // Ensure this class is included in the build
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};

export default config;
