import "./Modal.css"
import img from"../assets/aml.png"
function SuccessModal() {
  return (
    <div className=" dev fixed h-4/4 w-4/4 flex justify-center items-center backdrop-blur-sm" >
            <div className="dashed-border animate-approach h-1/2 w-1/2 p-10 text-white">
            </div>
    </div>
  )
}

export default SuccessModal


