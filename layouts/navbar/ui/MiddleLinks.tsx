import React from 'react';
import {AiFillHome} from "react-icons/ai";
import {MdPeopleAlt} from "react-icons/md";
import {BsFillCollectionPlayFill, BsFillGridFill} from "react-icons/bs";
import {HiUserGroup} from "react-icons/hi";
import {IconWrap} from "../../../components";

const links = [AiFillHome, MdPeopleAlt, BsFillCollectionPlayFill, HiUserGroup, BsFillGridFill]

const MiddleLinks = () => {
    return (
        <>
            <div
                className={'hidden items-center min-h-full flex-2 space-x-10 justify-end mr-8 lg:flex xl:space-x-12 2xl:space-x-16 bg-sky-500/0'}>
                {links.map((Icon, index) => (
                    <IconWrap key={index}>
                        <Icon className={'nav-icon'}/>
                    </IconWrap>
                ))}
            </div>
        </>
    );
};

export default MiddleLinks;
