import React, { Component } from 'react'
import {
    MDBCollapse,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBIcon,
  } from 'mdbreact';
  

    

export class QuestionsandAnswers extends Component {
    state = {
        collapseID: 'collapse1'
      };
    
      toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    render() {
        return (
            <div>
                <div class="container-fluid faq">
                    <div id="margin_space3" class="row">
                        <div class="col-md-12">
                            <div className="text-center questions">
                              <h1>Got questions? we’ve got answers</h1>
                                <div class="buttonIn"> 
                                    <input className="form-control" type="text" id="enter" placeholder="Search for answers"/> 
                                    <button id="clear">Search</button> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div id="margin_space3" class="row">
                        <div class="col-md-12">
                            <div className="accordion_balancing">
                                <MDBCard id="accordion_card">
                                    <MDBCardHeader id={this.state.collapseID === 'collapse1' ? 'your_className': null}
                                    onClick={this.toggleCollapse('collapse1')}
                                    tagClassName=''
                                    className="accordion_faq"
                                    >
                                     <h1>
                                    What is the CP Invest?
                                    <MDBIcon
                                        icon={
                                        this.state.collapseID === 'collapse1'
                                            ? 'minus'
                                            : 'plus'
                                        }
                                        className='float-right'
                                        size='1x'
                                    />
                                    </h1>
                                    </MDBCardHeader>
                                    <MDBCollapse id='collapse1' isOpen={this.state.collapseID}>
                                    <MDBCardBody class='pt-0'>
                                        <p className="accordion_faq_para">CPinvest is a digital financial solution designed by Comercio Partners Limited , which gives investors in the Sub-Saharan African Market access to global investment opportunities. This platform offers  bespoke service, targeted at enhancing investors lifestyle and improving their financial networth.</p>
                                    </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard  id="accordion_card">
                                    <MDBCardHeader id={this.state.collapseID === 'collapse2' ? 'your_className': null}
                                    onClick={this.toggleCollapse('collapse2')}
                                    tagClassName=''
                                    className="accordion_faq"
                                    >
                                      <h1>
                                    Is CP Invest regulated?
                                    <MDBIcon
                                        icon={
                                        this.state.collapseID === 'collapse2'
                                            ? 'minus'
                                            : 'plus'
                                        }
                                        className='float-right'
                                        size='1x'
                                    />
                                    </h1>
                                    </MDBCardHeader>
                                    <MDBCollapse id='collapse2' isOpen={this.state.collapseID}>
                                    <MDBCardBody class='pt-0'>
                                    <p className="accordion_faq_para">CPinvest is a digital financial solution designed by Comercio Partners Limited , which gives investors in the Sub-Saharan African Market access to global investment opportunities. This platform offers  bespoke service, targeted at enhancing investors lifestyle and improving their financial networth.</p>
                                    </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard id="accordion_card">
                                   <MDBCardHeader id={this.state.collapseID === 'collapse3' ? 'your_className': null}
                                    onClick={this.toggleCollapse('collapse3')}
                                    tagClassName=''
                                    className="accordion_faq"
                                    >
                                   <h1>
                                    Who can use CP Invest? 
                                    <MDBIcon
                                        icon={
                                        this.state.collapseID === 'collapse3'
                                            ? 'minus'
                                            : 'plus'
                                        }
                                        className='float-right'
                                        size='1x'
                                    />
                                    </h1>
                                    </MDBCardHeader>
                                    <MDBCollapse id='collapse3' isOpen={this.state.collapseID}>
                                    <MDBCardBody class='pt-0'>
                                       <p className="accordion_faq_para">CPinvest is a digital financial solution designed by Comercio Partners Limited , which gives investors in the Sub-Saharan African Market access to global investment opportunities. This platform offers  bespoke service, targeted at enhancing investors lifestyle and improving their financial networth.</p>
                                    </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard id="accordion_card">
                                   <MDBCardHeader id={this.state.collapseID === 'collapse4' ? 'your_className': null}
                                    onClick={this.toggleCollapse('collapse4')}
                                    tagClassName=''
                                    className="accordion_faq"
                                    >
                                   <h1>
                                     What do I need to get started?
                                    <MDBIcon
                                        icon={
                                        this.state.collapseID === 'collapse4'
                                            ? 'minus'
                                            : 'plus'
                                        }
                                        className='float-right'
                                        size='1x'
                                    />
                                    </h1>
                                    </MDBCardHeader>
                                    <MDBCollapse id='collapse4' isOpen={this.state.collapseID}>
                                    <MDBCardBody class='pt-0'>
                                       <p className="accordion_faq_para">CPinvest is a digital financial solution designed by Comercio Partners Limited , which gives investors in the Sub-Saharan African Market access to global investment opportunities. This platform offers  bespoke service, targeted at enhancing investors lifestyle and improving their financial networth.</p>
                                    </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>


                                <MDBCard id="accordion_card">
                                   <MDBCardHeader id={this.state.collapseID === 'collapse5' ? 'your_className': null}
                                    onClick={this.toggleCollapse('collapse5')}
                                    tagClassName=''
                                    className="accordion_faq"
                                    >
                                   <h1>
                                     Why do I need to include my BVN?
                                    <MDBIcon
                                        icon={
                                        this.state.collapseID === 'collapse5'
                                            ? 'minus'
                                            : 'plus'
                                        }
                                        className='float-right'
                                        size='1x'
                                    />
                                    </h1>
                                    </MDBCardHeader>
                                    <MDBCollapse id='collapse5' isOpen={this.state.collapseID}>
                                    <MDBCardBody class='pt-0'>
                                       <p className="accordion_faq_para">CPinvest is a digital financial solution designed by Comercio Partners Limited , which gives investors in the Sub-Saharan African Market access to global investment opportunities. This platform offers  bespoke service, targeted at enhancing investors lifestyle and improving their financial networth.</p>
                                    </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>


                                <MDBCard id="accordion_card">
                                   <MDBCardHeader id={this.state.collapseID === 'collapse6' ? 'your_className': null}
                                    onClick={this.toggleCollapse('collapse6')}
                                    tagClassName=''
                                    className="accordion_faq"
                                    >
                                   <h1>
                                     Is CP Invest regulated? 
                                    <MDBIcon
                                        icon={
                                        this.state.collapseID === 'collapse6'
                                            ? 'minus'
                                            : 'plus'
                                        }
                                        className='float-right'
                                        size='1x'
                                    />
                                    </h1>
                                    </MDBCardHeader>
                                    <MDBCollapse id='collapse6' isOpen={this.state.collapseID}>
                                    <MDBCardBody class='pt-0'>
                                       <p className="accordion_faq_para">CPinvest is a digital financial solution designed by Comercio Partners Limited , which gives investors in the Sub-Saharan African Market access to global investment opportunities. This platform offers  bespoke service, targeted at enhancing investors lifestyle and improving their financial networth.</p>
                                    </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>


                                <MDBCard id="accordion_card">
                                   <MDBCardHeader id={this.state.collapseID === 'collapse7' ? 'your_className': null}
                                    onClick={this.toggleCollapse('collapse7')}
                                    tagClassName=''
                                    className="accordion_faq"
                                    >
                                   <h1>
                                     Who can use CP Invest? 
                                    <MDBIcon
                                        icon={
                                        this.state.collapseID === 'collapse7'
                                            ? 'minus'
                                            : 'plus'
                                        }
                                        className='float-right'
                                        size='1x'
                                    />
                                    </h1>
                                    </MDBCardHeader>
                                    <MDBCollapse id='collapse7' isOpen={this.state.collapseID}>
                                    <MDBCardBody class='pt-0'>
                                       <p className="accordion_faq_para">CPinvest is a digital financial solution designed by Comercio Partners Limited , which gives investors in the Sub-Saharan African Market access to global investment opportunities. This platform offers  bespoke service, targeted at enhancing investors lifestyle and improving their financial networth.</p>
                                    </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>
                
                           
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionsandAnswers
