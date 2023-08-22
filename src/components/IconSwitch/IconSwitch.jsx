import './IconSwitch.css'

function IconSwitch(props) {
  const materialIconsHandle = () =>{
    props.onSwitch()
  } 
  return (
    <div className="store__icon-switch">
      <span className="material-icons" onClick={materialIconsHandle}>{props.icon}</span>
    </div>
  )
}

export default IconSwitch
