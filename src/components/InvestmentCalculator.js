import React, { Component } from 'react'

export class InvestmentCalculator extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div id="margin_space2" className="row investment_calculator">
                        <div className="col-md-6">
                           <div className="investment_calculator_goal">
                                <h1>What’s your <span>goal?</span></h1>
                                <p>Let’s calculate the returns on your investment for any of your short term or long term goals.</p>
                           </div>
                        </div>
                        <div className="col-md-6">
                            <div className="investment_calculator_form">
                               <form> 
                                    <div id="calculator_form" class="row">
                                        <div class="col-md-5">
                                           <div className="calculator_input">
                                                <label>Start date</label>
                                                <input type="date" id="startDate" class="form-control"/>
                                           </div>
                                        </div>
                                        <div class="col-md-1">
                                         <div className="form_icon" > <img src="images/interface 2.svg" alt="interface"/></div>
                                        </div>
                                        <div class="col-md-5">
                                            <div className="calculator_input">
                                                <label>End date</label>
                                                <input type="date" id="endDate" class="form-control"/>
                                            </div>
                                        </div>
                                        <div class="col-md-1">
                                         
                                        </div>
                                    </div>
                                    <div id="calculator_form" class="row">
                                        <div class="col-md-12">
                                           <div className="calculator_input2">
                                                <label>Target amount</label>
                                                <input type="text" id="startDate" class="form-control" placeholder="₦"/>
                                           </div>
                                        </div>
                                    </div>
                                    <div id="calculator_form" class="row">
                                        <div class="col-md-12">
                                           <div className="calculator_input2">
                                                <label>Payment frequency</label>
                                                <select class="form-control">
                                                    <option>Select an option</option>
                                                </select>
                                           </div>
                                        </div>
                                    </div>

                                    <div id="calculator_form" class="row">
                                        <div class="col-md-12">
                                           <div className="calculator_input2">
                                               <button className="calculator_btn">Calculate your returns</button>
                                           </div>
                                        </div>
                                    </div>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InvestmentCalculator
