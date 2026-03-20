// Button.jsx — reusable CTA button
// Props: label (button text), variant ("secondary" | "primary")

function Button({ label, variant = "secondary" }) {
    // Shared shape/spacing used by every button
    const base = "mt-auto w-fit rounded-full px-8 py-3.5 text-base font-medium cursor-pointer border-none transition-colors duration-200";

    // Visual themes linked to component tokens in index.css
    const variants = {
        secondary: "bg-btn-secondary text-text-primary hover:bg-btn-secondary-hover",
        primary:   "bg-btn-primary text-btn-primary-text hover:bg-btn-primary-hover",
    };

    return (
        // Combines shared styles + selected visual variant
        <button className={`${base} ${variants[variant]}`}>
            {label}
        </button>
    );
}

export default Button;
