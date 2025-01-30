import React from 'react';
import Button from '../Button2';
import SandboxEditor from '~/components/tools/SandboxEditor/SandboxEditor';
import Button2 from '../Button2';

export default {
    title: 'Components/Button2',
    component: Button,
    render: (args: React.JSX.IntrinsicAttributes) => <SandboxEditor>
       <Button2 >
        Arsh
       </Button2>
    </SandboxEditor>
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const All = {
    args: {
        className: ''
    }
};