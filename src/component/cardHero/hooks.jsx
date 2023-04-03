import { useEffect,useRef } from "react";
const createAnimationImg = (el)=>{
    el.current.addEventListener('mousemove',(evt)=>{
        // retrieve mouse coordinates inside this element
        const string = `
            perspective(500px)
            scale(1.2)
            rotateX(-3deg)
            rotateY(4deg)`
        el.current.style.transform = string
        el.current.style.zIndex = "1";
    })

    el.current.addEventListener('mouseout',(evt)=>{
        const string = `
            perspective(500px)
            scale(1)
            rotateX(0)
            rotateY(0)`
        el.current.style.transform = string
        el.current.style.zIndex = "0";
    })

}

const getElementByRef = ()=>{
    const getElement = useRef(null)
    useEffect(()=>{
        createAnimationImg(getElement);
    },[])
    return getElement;
}

export default getElementByRef;