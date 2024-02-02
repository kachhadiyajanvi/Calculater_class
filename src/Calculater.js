import React from "react";
class Calculater extends React.Component{
    constructor(){
        super();
        this.state={
            disp:'',
            val:'',
            sign:''
        } 
    }
    handleButtonClick=(a)=>{
        this.setState({
            disp:this.state.disp+a,
        })
    }
    handleButtonarith=(l)=>{
        this.setState({
            val:this.state.disp,
            disp:'',
            sign:l
        })
    }
    handleButtonequal=()=>{
        const lastval=this.state.disp;
        switch(this.state.sign){
            case '+':
                this.setState({
                    disp:parseFloat(this.state.val)+parseFloat(lastval),
                })
                break;
            case '-':
                this.setState({
                    disp:parseFloat(this.state.val)-parseFloat(lastval),
                })
                break;
            case '*':
                this.setState({
                    disp:parseFloat(this.state.val)*parseFloat(lastval),
                })
                break;
            case '/':
                if(lastval=='0' || lastval=="00"){
                    this.setState({
                        disp:"Can't divide by zero",
                    })
                }else{
                    this.setState({
                        disp:parseFloat(this.state.val)/parseFloat(lastval),
                    })
                }
                break;
            case '%':
                this.setState({
                    disp:parseFloat(this.state.val)%parseFloat(lastval),
                })
                break;
            default:
                this.setState({
                    disp:"ERROR",
                })
        }
    }
    handleclean=()=>{
        this.setState({
            disp:((this.state.disp).substring(0, (this.state.disp).length - 1)),
        })
    }
    handleclear=()=>{
        this.setState({
            disp:'',
        })
    }
    render(){
        return(
            <div className="App">
            <h1>Standard Calculater</h1>
            <div class="main_div">
                <div class="text">
                    <input type="text" name="" value={this.state.disp} ></input>
                </div>

                <div class="btn">
                    <input type="button" name="" value={"%"} onClick={() => this.handleButtonarith('%')}></input>
                    <input type="button" name="" value={"CE"} onClick={() => this.handleclean()}></input>
                    <input type="button" name="" value={"C"} onClick={() => this.handleclear()}></input>
                    <input type="button" name="" value={"/"} onClick={() => this.handleButtonarith('/')}></input>
                </div>
                <div class="btn">
                    <input type="button" name="" value={"7"} class="h7" onClick={() => this.handleButtonClick('7')}></input>
                    <input type="button" name="" value={"8"} onClick={() => this.handleButtonClick('8')}></input>
                    <input type="button" name="" value={"9"} onClick={() => this.handleButtonClick('9')}></input>
                    <input type="button" name="" value={"*"} onClick={() => this.handleButtonarith('*')}></input>
                </div>
                <div class="btn">
                    <input type="button" name="" value={"4"} onClick={() => this.handleButtonClick('4')}></input>
                    <input type="button" name="" value={"5"} onClick={() => this.handleButtonClick('5')}></input>
                    <input type="button" name="" value={"6"} onClick={() => this.handleButtonClick('6')} ></input>
                    <input type="button" name="" value={"-"} onClick={() => this.handleButtonarith('-')} ></input>
                </div>
                <div class="btn">
                    <input type="button" name="" value={"1"} onClick={() => this.handleButtonClick('1')}></input>
                    <input type="button" name="" value={"2"} onClick={() => this.handleButtonClick('2')}></input>
                    <input type="button" name="" value={"3"} onClick={() => this.handleButtonClick('3')}></input>
                    <input type="button" name="" value={"+"} onClick={() => this.handleButtonarith('+')}></input>
                </div>
                <div class="btn">
                    <input type="button" name="" value={"00"} onClick={() => this.handleButtonClick('00')}></input>
                    <input type="button" name="" value={"0"} onClick={() => this.handleButtonClick('0')}></input>
                    <input type="button" name="" value={"."} onClick={() => this.handleButtonClick('.')}></input>
                    <input type="button" name="" value={"="} onClick={() => this.handleButtonequal()}></input>
                </div>
            </div>

        </div>
        )
    }
}

export default Calculater;