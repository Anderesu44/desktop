import "./Img.css"

function randomAltImg() {
    const num = Math.floor(Math.random() * 5);
    let _path = `res/img/error_404/error_404_${num}.jpeg`;
    return _path;
}

function setImgError(syntheticBaseEvent,alt) {
    const img = syntheticBaseEvent.target
    if (img != null){
        img.src = alt ? alt: randomAltImg()
    }
}
function Img({children,className,id,src,alt,onErrorCapture,onClickCapture}) {
    if (children){
        console.error("Img")
        return null;
    }
    id = id ? id: src ? src : null

    if (onErrorCapture) {
        var ErrorCapture = (syntheticBaseEvent)=>{
            setImgError(syntheticBaseEvent,alt)
            onErrorCapture(syntheticBaseEvent)
        }
    }else{
        var ErrorCapture = (syntheticBaseEvent)=>{
            setImgError(syntheticBaseEvent,alt)
        }
    }
    return (<img className={className?`Img ${className}`: "Img"}
                 id={id ? id:""}
                 src={src ? src : randomAltImg()}
                 onErrorCapture={onErrorCapture ? ErrorCapture : (syntheticBaseEvent)=>{setImgError(syntheticBaseEvent,alt)}}
                 onClickCapture={onClickCapture}
                 />)
}

export default Img