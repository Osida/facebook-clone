import {useState} from "react";

const PostLogic = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [isCommented, setIsCommented] = useState(false);
    const [isShared, setIsShared] = useState(false);

    const handleIsLiked = () => {
        setIsLiked(prevState => !prevState)
    }

    const handleIsCommented = () => {
        setIsCommented(prevState => !prevState)
    }

    const handleIsShared = () => {
        setIsShared(prevState => !prevState)
    }

    return {isLiked, isCommented, isShared, handleIsLiked, handleIsCommented, handleIsShared}
};

export default PostLogic;
