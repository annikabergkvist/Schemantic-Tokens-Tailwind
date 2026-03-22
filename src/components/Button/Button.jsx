// Button.jsx — reusable CTA button
// Props: label (button text), variant ("secondary" | "primary")

function Button({ label, variant = "secondary" }) {
    // Shared shape/spacing used by every button
    const base = "mt-auto w-full rounded-full px-4 py-4 text-base font-medium cursor-pointer border-none transition-colors duration-200";

    // Visual themes use semantic action tokens from index.css
    const variants = {
        secondary: "bg-action-secondary text-text-primary hover:bg-action-secondary-hover hover:text-ink",
        primary:   "bg-action-primary text-on-action-primary hover:bg-action-primary-hover",
    };

    return (
        // Combines shared styles + selected visual variant
        <button className={`${base} ${variants[variant]}`}>
            {label}
        </button>
    );
}

export default Button;
