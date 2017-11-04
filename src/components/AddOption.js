import React, {Component} from 'react';

export default class AddOption extends Component {
    state = {
        error: undefined
    }
    constructor(props){
        super(props);
    }
    handleSubmit(e){
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error}));
        if(!error){
            e.target.elements.option.value = '';
        }
    };
    render() {
        return (
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            <form className="add-option" onSubmit={(e)=>this.handleSubmit(e)}>
                <input className="add-option__input" type="text" name="option"/>
                <button className="button">Add Option</button>
            </form>
            </div>
        );
    }
}