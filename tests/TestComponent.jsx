import React from 'react';
import styles from './testStyles.css';

export default function TestComponent() {
    return (
        <div>
            <h1 className="headline">Headline</h1>
            <p className="text">Lorem Ipsum</p>

            <style jsx>{styles}</style>
        </div>
    );
}