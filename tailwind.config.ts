
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom colors for portfolio
				neon: {
					cyan: "#00FFFF",
					magenta: "#FF00FF",
					blue: "#0077FF",
					purple: "#AA00FF"
				},
				dark: {
					DEFAULT: "#000000",
					light: "#121212",
					medium: "#1A1A1A",
					gray: "#2A2A2A",
				},
				light: {
					gray: "#AAAAAA",
					DEFAULT: "#EEEEEE",
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0, 255, 255, 0.3), 0 0 10px rgba(0, 255, 255, 0.2), 0 0 15px rgba(0, 255, 255, 0.1)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3), 0 0 30px rgba(0, 255, 255, 0.1)',
						transform: 'scale(1.02)'
					}
				},
				'glow-pulse-magenta': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(255, 0, 255, 0.3), 0 0 10px rgba(255, 0, 255, 0.2), 0 0 15px rgba(255, 0, 255, 0.1)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3), 0 0 30px rgba(255, 0, 255, 0.1)',
						transform: 'scale(1.02)'
					}
				},
				'bounce-small': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'floating': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'typing': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'typewriter-blink': {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: 'white' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fall': {
					'0%': { transform: 'translateY(-100vh)', opacity: '0' },
					'100%': { transform: 'translateY(100vh)', opacity: '0.8' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 3s infinite ease-in-out',
				'glow-pulse-magenta': 'glow-pulse-magenta 3s infinite ease-in-out',
				'bounce-small': 'bounce-small 2s infinite ease-in-out',
				'floating': 'floating 3s infinite ease-in-out',
				'typing': 'typing 3.5s steps(40, end)',
				'typewriter-blink': 'typewriter-blink 1s step-end infinite',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'fall': 'fall 10s linear infinite',
				'spin-slow': 'spin-slow 8s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
