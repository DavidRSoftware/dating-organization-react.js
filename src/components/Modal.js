import ReactDOM from 'react-dom';
// import { useEffect } from 'react';

function Modal({ onClose, children }) {
    // useEffect(() => {
    //     document.body.classList.add('overflow-hidden');

    //     return () => {
    //         document.body.classList.remove('overflow-hidden');
    //     };
    // }, []);

    return ReactDOM.createPortal(
        <>
            <div onClick={onClose} className="modal-background"></div>
            <div className="modal-content-container">
                {children}
            </div>
        </>,
        document.querySelector('.modal-container')
    );
}

export default Modal;
