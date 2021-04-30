import { atom } from "recoil"

const testState = atom({
    key : "test",
    default : "im test",
})

export {testState}