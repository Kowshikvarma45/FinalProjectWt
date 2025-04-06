import  { atom } from "recoil"

export const AllArticlesAtom = atom({
    key:"AllArticlesAtom",
    default:[]
})

export const ReadmoreAtom = atom({
    key:"ReadmoreAtom",
    default:{}
})

export const CdivrefAtom = atom({
    key:"CdivrefAtom",
    default:""
})

export const EditArticleAtom = atom({
    key:"EditArticleAtom",
    default:{}
})