import { useState } from "react"
import horrorSound from "../صوت/w.mp3";
import img from "../assets/Step_Content.png"
import "./Section.css"
import SuccessModal from"./SuccessModal"

export default function Section() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [userName, setUserName] = useState({
    Name: "",
    Email: "",
    num: ""
  })

  function data(e) {
    e.preventDefault()
    
    const data = {
      Name: userName.Name,
      Email: userName.Email,
      num: userName.num
    }
    console.log(data)
const audio = new Audio(horrorSound);

audio.volume = 1;

audio.addEventListener("loadedmetadata", () => {
  audio.currentTime = audio.duration / 3;
  audio.play().catch(console.error);
}, { once: true });
    setShowSuccess(true)
  }
  return (
    <div className="min-h-screen bg-[#EFF5FF] flex justify-center items-center">
      <div className="bg-white min-h-120 rounded-2xl flex items-center flex-col md:flex-row">

        <div className="m-4 w-2/6">
          <img src={img} alt="step" className="img" />
        </div>

        <div className="h-12/12 ms-20 w-7/12 box-border me-12">

          <h1 className="text-4xl font-bold text-[#022959]">
            Personal info
          </h1>

          <p className="font-bold opacity-50 text-xl mt-2 text-[#022959]">
            Please provide your name, email address, and phone number.
          </p>

          <form
            className="w-4/4 mt-10 flex flex-col"
            onSubmit={data}
          >

            <label className="font-bold mt-6">
              Name :
            </label>

            <input
              type="text"
              className="border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition duration-200 block w-1/1 rounded-xl p-3 mt-1.5"
              placeholder="e.g. Stephen King"
              onChange={(e) => {
                setUserName({
                  ...userName,
                  Name: e.target.value
                })
              }}
              value={userName.Name}
            />

            <label className="font-bold mt-6">
              Email Address :
            </label>

            <input
              type="email"
              className="border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition duration-200 block w-1/1 rounded-xl p-3 mt-1.5"
              placeholder="e.g. stephenking@lorem.com"
              onChange={(e) => {
                setUserName({
                  ...userName,
                  Email: e.target.value
                })
              }}
              value={userName.Email}
            />

            <label className="font-bold mt-6">
              Phone Number :
            </label>

            <input
              type="tel"
              className="border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition duration-200 block w-1/1 rounded-xl p-3 mt-1.5"
              placeholder="e.g. +1 234 567 890"
              onChange={(e) => {
                setUserName({
                  ...userName,
                  num: e.target.value
                })
              }}
              value={userName.num}
            />

            <button
              type="submit"
              className="bg-[#0b2963] text-white font-bold mt-14 py-3 px-4 rounded-lg hover:bg-[#123985] focus:outline-none focus:ring-4 focus:ring-blue-100 transition duration-200 self-end mb-10"
            >
              Next Step
            </button>

          </form>

        </div>
      </div>
      {showSuccess && <SuccessModal />}
    </div>
  )
}
// ملاحظه صغيره معملتش كمبوننس عشان كانو سكشن واحد ومفيش بيانات ياما بس اقدر اعملهم الحمد لله 