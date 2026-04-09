export const brand = {
    // Primitives: The raw color palette (Brand Collection)
    primitives: {
        neutral: {
            900: '#050506',
            800: '#1f1f22',
            700: '#444444',
            400: '#a19caa',
            300: '#c9c4cc',
            100: '#eeebed',
            50: '#f6f5f5',
            25: '#fafafa',
        },
        primary: {
            500: '#963bf7',
            400: '#a855f7',
            25: '#f9f5fe',
        },
        secondary: {
            500: '#ec4899',
            400: '#f9161b',
        }
    },

    // Tokens: Semantic abstraction (Mapped Collection)
    tokens: {
        color: {
            surface: {
                page: 'var(--brand-neutral-50)',
                primary: 'var(--brand-neutral-25)',
                action: 'var(--brand-primary-500)',
            },
            text: {
                heading: 'var(--brand-neutral-900)',
                body: 'var(--brand-neutral-700)',
                onAction: 'var(--brand-primary-25)',
                disabled: 'var(--brand-neutral-400)',
                action: 'var(--brand-primary-500)',
            },
            border: {
                primary: 'var(--brand-neutral-300)',
            }
        },
        layout: {
            radius: {
                round: '1000px',
                card: '28px',
            },
            spacing: {
                navHeight: '80px',
                sidebarWidth: '80px',
                pagePadding: '4rem',
            }
        },
        typography: {
            family: {
                main: "'Outfit', 'Google Sans', system-ui, -apple-system, sans-serif",
            },
            size: {
                xs: '12px',
                base: '16px',
                lg: '24px',
                xl: '32px',
                hero: '100px',
            }
        }
    }
} as const;
