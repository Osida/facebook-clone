import React from 'react';
import {Avatar, IconWrap} from "../../../../components";
import {BsFillPlayCircleFill} from "react-icons/bs";
import assets from "../../../../assets";
import Feed from "../blueprints/Feed";
import {AiFillCloseCircle} from "react-icons/ai";
import {motion} from 'framer-motion';

interface IProps {
    input: string,
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    selectedFile: any,
    onDeleteSelectedFile: () => void
}

const {images} = assets

export const motionCloseBtn = {
    whileHover: {
        scale: [1, 1.09],
        transition: {duration: 0.2, ease: 'easeInOut'}
    },
    whileTap: {
        scale: [1, 0.95],
        transition: {duration: 0.2, ease: 'easeInOut'}
    }
}

const TopInput = ({input, onInputChange, selectedFile, onDeleteSelectedFile}: IProps) => {
    return (
        <Feed.TopInputContainer>
            <Avatar image={images.Pithorn} alt={'Pithorn'}/>

            <Feed.TopInput>
                <input
                    type="text"
                    value={input}
                    onChange={onInputChange}
                    placeholder={`User, what's the latest?`}
                    className={'outline-none border-none bg-transparent p-2 flex-1'}
                />
                <IconWrap>
                    <BsFillPlayCircleFill className={'nav-icon rotate-90'}/>
                </IconWrap>
            </Feed.TopInput>

            {selectedFile && (
                <div className={'relative w-11 rounded-md'}>
                    <img
                        src={selectedFile || images.ItalianAlps}
                        alt={'Post file'}
                        // layout={'responsive'}
                        // objectFit={'cover'}
                        className={'rounded-md'}
                    />


                    <motion.div
                        onClick={onDeleteSelectedFile}
                        whileHover={motionCloseBtn.whileHover}
                        whileTap={motionCloseBtn.whileTap}
                        className={'absolute -top-2 -right-2 w-5 h-5 text-iconColor bg-primaryColor rounded-full border-none outline-none'}
                    >
                        <AiFillCloseCircle className={'w-full h-full'}/>
                    </motion.div>
                </div>
            )}
        </Feed.TopInputContainer>
    );
};

export default TopInput;
