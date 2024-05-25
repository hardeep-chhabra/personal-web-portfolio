'use client';
import Contact from '../../../Components/Contact'
import GlobalDesignJsx from "../globalDesignLayout";

const contact = ({ currentTheme }) => {

    return (
        <>
            <GlobalDesignJsx Component={Contact} headtag='Contact' />
        </>
    )
}

export default contact
