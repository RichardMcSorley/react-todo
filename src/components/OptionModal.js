import React from 'react';
import Modal from 'react-modal'

const OptionModal = (props) =>(
    <Modal
        className="modal" closeTimeoutMS={200} 
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
    >
        <h3 className="modal__title">Do this:</h3>
        {props.selectedOption && <p className="modal_body">{props.selectedOption}</p>}
        <div className="modal__container">
            <button className="button modal__button button--cancel" onClick={props.handleClearSelectedOption}>You're not my boss..</button>
            <button className="button modal__button button-ok" onClick={()=>props.handleModalButtonOk(props.selectedOption)}>I did it!</button>
        </div>

    </Modal>
);

export default OptionModal;