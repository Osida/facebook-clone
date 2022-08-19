import React, {useRef, useState} from 'react';
import {EmojiMarket} from "../../../typings";

import {firebase} from "../../../lib";
import {addDoc, collection, doc, serverTimestamp, updateDoc} from "@firebase/firestore";
import {getDownloadURL, ref, uploadString} from "firebase/storage";

const {db, storage} = firebase;

const useFeedInput = () => {
    const [input, setInput] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null | undefined>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isPickerShown, setIsPickerShown] = useState<boolean>(false);

    const fileRef = useRef<HTMLInputElement>(null);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const onEmojiInput = (emoji: EmojiMarket) => {
        setInput(prevState => `${prevState}${emoji?.native}`)
    }

    const onIsPickerShown = () => {
        setIsPickerShown(prevState => !prevState);
    }

    const onSelectFile = () => {
        // console.log(`fileRef = `, fileRef)
        fileRef.current?.click()
    }

    const addImageToPost = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(`addImageToPost event = `, event)
        const reader = new FileReader()
        const file = event?.target?.files?.[0]
        // console.log(`addImageToPost file = `, file)
        if (file) {
            reader.readAsDataURL(file)
        }

        reader.onload = (readerEvent) => {
            const result = readerEvent?.target?.result
            // console.log(`readerEvent?.target?.result = `, result)
            // @ts-ignore
            setSelectedFile(result)
        }
    }

    const addDataToFirestore = async (data: {}) => {
        try {
            const docRef = await addDoc(collection(db, 'posts'), data)
            console.log('Document written with ID: ', docRef.id)
            return docRef
        } catch (error) {
            console.error('Error adding document: ', error)
        }
    }

    const onSendPost = async () => {
        if (isLoading) return; else setIsLoading(true);

        // Cloud Firestore
        let data = {
            // id: session.user.id,
            // username: session.user.name,
            // userImg: session.user.image,
            // tag: session.user.tag,
            text: input,
            timestamp: serverTimestamp(),
        }

        const docRef = await addDataToFirestore(data)

        if (docRef) {
            // Cloud Storage
            // Creates a child reference that points to /posts + doc id + /image
            let url = `posts/${docRef.id}/image`
            const imageRef = ref(storage, url)

            if (selectedFile) {
                await uploadString(imageRef, <string>selectedFile, 'data_url')
                    .then(async () => {
                        const downloadURL = await getDownloadURL(imageRef)
                        const postDocRef = doc(db, 'post', docRef.id)
                        const updateData = {
                            image: downloadURL
                        }
                        await updateDoc(postDocRef, updateData)
                    })
                    .catch((error) => console.error(`Error!! While updating doc: ${docRef.id}: `, error))
            }
        }

        setIsLoading(false)
        setInput('')
        setSelectedFile(null)
        setIsPickerShown(false)
    }

    const onDeleteSelectedFile = () => {
        setSelectedFile(null)
    }

    return {
        input,
        selectedFile,
        isPickerShown,
        fileRef,
        onInputChange,
        onEmojiInput,
        onSelectFile,
        addImageToPost,
        onSendPost,
        onIsPickerShown,
        onDeleteSelectedFile
    }
};

export default useFeedInput;
