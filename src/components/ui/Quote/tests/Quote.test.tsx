import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Quote from '../Quote';

describe('Quote Component', () => {
    it('renders without crashing', () => {
        const { container } = render(
            <Quote>
                You must be the change you wish to see in the world. - Mahatma
                Gandhi
            </Quote>
        );
        const quoteElements = container.querySelectorAll('q');

        expect(quoteElements.length).toEqual(1);
        expect(quoteElements[0]).toBeTruthy();
        expect(quoteElements[0].textContent).toEqual(
            'You must be the change you wish to see in the world. - Mahatma Gandhi'
        );
    });

    it('renders with custom root class and custom class name', () => {
        const { container } = render(
            <Quote
                customRootClass="acme-corp"
                className="custom-class-name">
                You must be the change you wish to see in the world. - Mahatma
                Gandhi
            </Quote>
        );

        const quoteElement = container.querySelector('q');
        expect(quoteElement).toHaveClass('acme-corp-quote');
        expect(quoteElement).toHaveClass('custom-class-name');
    });
});
