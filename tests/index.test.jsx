import React from 'react';
import {render, screen} from '@testing-library/react';
import TestComponent from './TestComponent.jsx';
const {process} = require('../index.js');
const fs = require('fs');
const path = require('path');

describe("transformer", () => {
    const css = fs.readFileSync(path.resolve(__dirname + '/testStyles.css')).toString();
    const transformedCss = process(css, './testStyles.css');

    it("Transforms CSS", () => {
        expect(transformedCss).toMatchSnapshot();
    });

    describe("React component", () => {
        it("Elements have scoped className", () => {
            render(<TestComponent/>);

            const scopeId = transformedCss.match(/styles\.__hash = "(\d+)";/)[1];

            const h1 = screen.getByText('Headline');
            expect(h1.className).toMatch(new RegExp(`jsx-${scopeId}`));
            expect(h1.className).toMatch(/headline/);

            const p = screen.getByText('Lorem Ipsum');
            expect(p.className).toMatch(new RegExp(`jsx-${scopeId}`));
            expect(p.className).toMatch(/text/);
        });
    });
});