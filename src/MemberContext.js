import React, { useState, createContext } from 'react'

export const MemberContext = createContext();


export const MemberProvider = (props) => {
    const [Add_Members, setAdd_Members] = useState({ "data": [] });

    return (
        <MemberContext.Provider value={[Add_Members, setAdd_Members]}>
            {props.children}
        </MemberContext.Provider>
    );
}

