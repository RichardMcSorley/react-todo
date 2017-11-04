import React from "react";

const Action = (props) =>(
        <div>
            <button
            className="big-button"
            disabled={!props.hasOptions}
            onClick={props.handlePick}
            >
            Tell me what to do!
            </button>
        </div>
);
export default Action;