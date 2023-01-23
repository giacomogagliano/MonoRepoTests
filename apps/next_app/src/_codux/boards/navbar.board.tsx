import React from 'react'
import { createBoard } from '@wixc3/react-board';
import { Navbar } from "../../components/navbar/navbar"
import {Canvas} from "../../../src/codux/boards-global-setup"

export default createBoard({
    name: 'Navbar',
    Board: () => <Canvas><Navbar></Navbar></Canvas>,
    environmentProps: {
        windowWidth: 820,
        windowHeight: 1180
    }

});
