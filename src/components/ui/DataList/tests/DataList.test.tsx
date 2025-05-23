import React from 'react';
import { render, screen } from '@testing-library/react';
import DataList from '../DataList';

describe('DataList Component', () => {
    test('should render DataList components without crashing', () => {
        render(
            <DataList.Root>
                <DataList.Item>
                    <DataList.Label>Name</DataList.Label>
                    <DataList.Value>John Doe</DataList.Value>
                </DataList.Item>
            </DataList.Root>
        );
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    test('should apply default class names correctly', () => {
        const { container } = render(
            <DataList.Root>
                <DataList.Item>
                    <DataList.Label>Email</DataList.Label>
                    <DataList.Value>test@example.com</DataList.Value>
                </DataList.Item>
            </DataList.Root>
        );

        const rootElement = container.firstChild;
        expect(rootElement).toHaveClass('rad-ui-data-list');

        const itemElement = container.querySelector('.rad-ui-data-list-item');
        expect(itemElement).toBeInTheDocument();

        const labelElement = container.querySelector('.rad-ui-data-list-label');
        expect(labelElement).toBeInTheDocument();

        const valueElement = container.querySelector('.rad-ui-data-list-value');
        expect(valueElement).toBeInTheDocument();
    });

    test('should apply custom class names correctly', () => {
        const { container } = render(
            <DataList.Root className="custom-root" customRootClass="acme-corp">
                <DataList.Item className="custom-item">
                    <DataList.Label className="custom-label">Phone</DataList.Label>
                    <DataList.Value className="custom-value">123-456-7890</DataList.Value>
                </DataList.Item>
            </DataList.Root>
        );

        const rootElement = container.firstChild;
        expect(rootElement).toHaveClass('acme-corp-data-list');
        expect(rootElement).toHaveClass('custom-root');

        const itemElement = container.querySelector('.acme-corp-data-list-item');
        expect(itemElement).toHaveClass('custom-item');

        const labelElement = container.querySelector('.acme-corp-data-list-label');
        expect(labelElement).toHaveClass('custom-label');

        const valueElement = container.querySelector('.acme-corp-data-list-value');
        expect(valueElement).toHaveClass('custom-value');
    });

    test('should handle multiple DataList Items', () => {
        render(
            <DataList.Root>
                <DataList.Item>
                    <DataList.Label>Name</DataList.Label>
                    <DataList.Value>John Doe</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label>Email</DataList.Label>
                    <DataList.Value>john.doe@example.com</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label>Phone</DataList.Label>
                    <DataList.Value>123-456-7890</DataList.Value>
                </DataList.Item>
            </DataList.Root>
        );

        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
        expect(screen.getByText('Phone')).toBeInTheDocument();
        expect(screen.getByText('123-456-7890')).toBeInTheDocument();
    });

    test('should warn when using DataList directly', () => {
        const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
        render(<DataList />);

        expect(consoleSpy).toHaveBeenCalledWith(
            'Direct usage of DataList is not supported. Please use DataList.Root, DataList.Item, etc. instead.'
        );

        consoleSpy.mockRestore();
    });
});
