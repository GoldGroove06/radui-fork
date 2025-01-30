import React, {useRef}from 'react';
import ButtonGroup from '../ButtonGroup';
import SandboxEditor from '~/components/tools/SandboxEditor/SandboxEditor';


export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    render: () => <SandboxEditor>
       <ButtonGroup buttons={[{value: "b1"}, {value: "b2"}, {value: "b3"}, {value: "b4"}]} />

       
    </SandboxEditor>
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const All = {
    args: {
        className: ''
    }
};