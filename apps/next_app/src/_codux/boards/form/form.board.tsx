import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Form } from '../../../components/form/form';

export default createBoard({
    name: 'Form',
    Board: () => <Form >
        <input aria-checked />
        <input />
        <input />
        <input />
        <input />
        <input />
    </Form>,
    environmentProps: {
        windowWidth: 768,
        windowHeight: 1024
    }
});
