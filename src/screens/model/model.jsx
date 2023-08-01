import React from 'react'
document.getElementById("form")
const Model = () => {
  return (
    <div>
    <button className="btn" onClick={()=>window.form.showModal()}>EditItems</button>
    <dialog id="my_modal_1" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
    </div>
  )
}

export default Model