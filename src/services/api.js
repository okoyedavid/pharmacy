const {
  VITE_AboutBaseURL: aboutUrl,
  VITE_PHARMACY_KEY: pharmacyKey,
  VITE_PHARMACY_URL: supabaseUrl,
  VITE_USERBASEURL: userUrl,
} = import.meta.env;

export { aboutUrl, pharmacyKey, supabaseUrl, userUrl };
