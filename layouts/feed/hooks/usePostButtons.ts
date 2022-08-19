import {useState} from "react";

const UsePostButtons = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [isCommented, setIsCommented] = useState(false);
    const [isShared, setIsShared] = useState(false);

    const onLike = () => setIsLiked(prevState => !prevState)

    const onComment = () => setIsCommented(prevState => !prevState)

    const onShare = () => setIsShared(prevState => !prevState)

    return {isLiked, isCommented, isShared, onLike, onComment, onShare}
};

export default UsePostButtons;
