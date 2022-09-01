import React from "react";
import Link from "next/link";

const NavigationComponent = ({currentSection}) => {
    const navig = [
        'integrated-distribution-services',
        'ecommerce-integrations',
        'shipping',
    ];
    return(
        <div className="navigation">
            {navig.map((n, index) => (
                    n !== currentSection && (
                        <Link href={`/${n}`}>
                            <a key={index} className="nav">
                                <p>{n.replace ('-', ' ').replace ('-', ' ')}</p>
                            </a>
                        </Link>
                    )
            ))}
        </div>
    );
};

export default NavigationComponent;
