import React from 'react'

const AppDownlod = () => {
    return (
        <div>
           <div id="app_download" class="container-fluid">
                <div id="margin_space2" class="row">
                    <div class="col-md-6">
                        <div className="app_download_img">
                            <img src="images/app.svg"  alt="app"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div className="app_download_section">
                            <h1>Join our large tribe of <span className="corver_border">Investors</span></h1>
                            <p>An app built to suit your lifestyle, specially designed for you! Features to help you hit your short or long term goals.</p>
                           <span className="google_play2"><img src="images/google-play.svg" alt="google-play"/></span>
                           <span className="app_store2"><img src="images/app-store.svg" alt="app_store"/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownlod
