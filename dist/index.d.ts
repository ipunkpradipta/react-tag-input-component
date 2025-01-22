import React from 'react';

interface TagsInputProps {
    name?: string;
    placeHolder?: string;
    value?: string[];
    onChange?: (tags: string[]) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    separators?: string[];
    disableBackspaceRemove?: boolean;
    onExisting?: (tag: string) => void;
    onRemoved?: (tag: string) => void;
    disabled?: boolean;
    isEditOnRemove?: boolean;
    beforeAddValidate?: (tag: string, existingTags: string[]) => boolean;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    classNames?: {
        input?: string;
        tag?: string;
    };
    addTagOnPaste?: boolean;
    required?: boolean;
}
declare const TagsInput: ({ name, placeHolder, value, onChange, onBlur, separators, disableBackspaceRemove, onExisting, onRemoved, disabled, isEditOnRemove, beforeAddValidate, onKeyUp, classNames, addTagOnPaste, required, }: TagsInputProps) => React.JSX.Element;

export { TagsInput, TagsInputProps };
