
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children, open, onClose }) {
  const dialog = useRef(null);

  useEffect(() => {
  if (open){
    dialog.current.showModal();

  } else {
    dialog.current.close();
  }
  }
  ,[open]
  )

  return createPortal(
    <dialog ref={dialog}  className="modal" onClose={onClose} >
      {open? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
