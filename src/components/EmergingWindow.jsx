import "./EmergingWindow.css"

function EmergingWindow({className,id,title,children,init,msg,onClickCapture}) {
    console.log(init?"True":"False")
    return (
    <aside className= {className? `EmergingWindow ${className}` : "EmergingWindow"} select={init ? "True":"False"} id={id?id:""} onClickCapture={(SyntheticBaseEvent)=>{ if (onClickCapture) {(onClickCapture(SyntheticBaseEvent))}; SyntheticBaseEvent.target.setAttribute("select","False")}}>
        <div className="mini_wind">
            <div className="mini_wind__title">
                <h3 className="mini_wind_title__text">{title}</h3>
            </div>
            <div className="mini_wind__msg">
                <p className="mini_wind_msg__text " id="msg">{children?children:msg}</p>
            </div>
        </div>
    </aside>
    )
}

export default EmergingWindow