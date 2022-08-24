import React from 'react';
import {LineDivider, Widget} from "../../../../components";
import TopInput from "./TopInput";
import BottomInput from "./BottomInput";
import useFeedInput from "../../hooks/useFeedInput";


const Input = () => {
    const {
        input,
        onInputChange,
        onSelectFile,
        onEmojiInput,
        fileRef,
        addImageToPost,
        isPickerShown,
        onIsPickerShown,
        selectedFile,
        onDeleteSelectedFile
    } = useFeedInput();

    return (
        <Widget className={'text-xs lg:text-sm'}>
            <TopInput
                input={input}
                onInputChange={onInputChange}
                selectedFile={selectedFile}
                onDeleteSelectedFile={onDeleteSelectedFile}
            />

            <LineDivider/>

            <BottomInput
                onSelectFile={onSelectFile}
                onEmojiInput={onEmojiInput}
                fileRef={fileRef}
                addImageToPost={addImageToPost}
                isPickerShown={isPickerShown}
                onIsPickerShown={onIsPickerShown}
            />
        </Widget>
    );
};

export default Input;
