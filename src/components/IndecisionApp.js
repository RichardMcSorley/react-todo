import React, {Component} from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleClearSelectedOption = () => {
        this.setState(()=>({ selectedOption: undefined }))
    }
    handleDeleteOptions = () => {
        this.setState(()=>({ options: []}));
    };
    handleDeleteOptionSingular = (optionToRemove)  => {
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionToRemove !== option)
        }))
    }
    handleModalButtonOk = (option) =>{
        this.handleDeleteOptionSingular(option);
        this.handleClearSelectedOption();
    }
    handlePick = () => {
        const randNumb = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNumb];
        this.setState((prevState)=>({
            selectedOption: option
        }))
    };
    handleAddOption = (option) => {
        if(!option){
            return 'Enter value to add item'
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }else{
            this.setState((prevState)=>({options: prevState.options.concat(option)}))
        }

    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({options}))
            }
        } catch (e){}
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
        
    }
    componentWillUnmount() {
    }
    render() {
        const title = 'ToDoIT';
        const subtitle = 'Your personal TodoList with no login, simple, and fast. Just do it already!';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            handleDeleteOptions={this.handleDeleteOptions}
                            options={this.state.options}
                            handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                    <OptionModal handleModalButtonOk={this.handleModalButtonOk} handleClearSelectedOption={this.handleClearSelectedOption} selectedOption={this.state.selectedOption}/>
                </div>
                
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: []
}