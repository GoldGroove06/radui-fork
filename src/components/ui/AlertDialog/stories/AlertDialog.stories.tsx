import React, { useState } from 'react';

// import Button from '@/rad-';
import AlertDialog from '../AlertDialog';
import SandboxEditor from '~/components/tools/SandboxEditor/SandboxEditor';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UI/Data-Display/AlertDialog',
    component: AlertDialog,
    render: (args:any) => {
        const [isOpen, setIsOpen] = useState(false);

        const handleOpenChange = (open: boolean) => {
            console.log('open', open);
            setIsOpen(open);
        };

        return (
            <SandboxEditor>
                <AlertDialog
                    open={isOpen}
                    onOpenChange={handleOpenChange}
                    {...args} content={
                        <div className="flex flex-col gap-4 ">
                            <h2 className="text-lg font-bold">Are you sure you want to delete this item?</h2>
                            <div>
                                <p>This action cannot be undone.</p>
                            </div>
                        </div>
                    } />
            </SandboxEditor>
        );
    }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
    args: {
        children: 'This is trigger',
        actionButton: <button>Delete</button>
    }
};