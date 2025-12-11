export const Theme = {
    colors: {
        // Backgrounds
        background: '#0B1120', // Very dark blue/black
        surface: '#1E293B',    // Dark blue grey
        surfaceHighlight: '#334155',

        // Primary Accents
        primary: '#3B82F6',    // Bright blue
        primaryDark: '#2563EB',
        primaryLight: '#60A5FA',

        // Secondary Accents
        accent: '#8B5CF6',     // Violet
        accentGradientStart: '#4F46E5', // Indigo
        accentGradientEnd: '#9333EA',   // Purple

        // Text
        textPrimary: '#F8FAFC',
        textSecondary: '#94A3B8',
        textMuted: '#64748B',

        // Functional
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        border: '#334155',
    },

    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 32,
        xxl: 48,
    },

    borderRadius: {
        s: 8,
        m: 16,
        l: 24,
        xl: 32,
        round: 9999,
    },

    shadows: {
        small: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 2,
        },
        medium: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 6,
        },
        glow: {
            shadowColor: '#3B82F6',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.4,
            shadowRadius: 10,
            elevation: 5,
        },
    },
};
