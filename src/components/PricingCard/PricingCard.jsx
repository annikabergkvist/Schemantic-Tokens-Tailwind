// PricingCard.jsx — reusable plan card
// Props: title, priceAmount, pricePeriod, includesText, features[], buttonText, buttonVariant

import Button from '../Button/Button';

function PricingCard({ title, priceAmount, pricePeriod, includesText, features, buttonText, buttonVariant }) {
    return (
        // Card container: fixed width + vertical layout
        <div className="flex flex-col min-h-[380px] bg-card rounded p-4 w-80 shrink-0">
            <div className="flex flex-col">
                {/* Plan name */}
                <h3 className="text-[22px] leading-7 font-normal text-text-primary mb-2">
                    {title}
                </h3>

                {/* Price row: amount + optional billing period */}
                <p className="text-xl text-text-muted inline-flex items-baseline">
                    <span className="text-[22px] font-normal text-text-muted">{priceAmount}</span>
                    {pricePeriod != null && (
                        <span className="text-sm text-text-muted">{pricePeriod}</span>
                    )}
                </p>

                <div className="mb-8">
                    {/* Supporting label above the feature list */}
                    <p className="text-base text-text-muted my-4">{includesText}</p>
                    <ul className="list-none p-0">
                        {features.map((feature, i) => (
                            // Single feature line with check icon
                            <li key={i} className="flex items-center mb-2 text-base text-text-primary">
                                <span className="text-text-primary text-sm mr-2.5 font-normal">&#10003;</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Card action button */}
            <Button label={buttonText} variant={buttonVariant} />
        </div>
    );
}

export default PricingCard;
