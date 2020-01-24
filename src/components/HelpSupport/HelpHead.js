import React, { PureComponent } from 'react'

class HelpHead extends PureComponent {
    render() {
        return (
            <div className="help__banner">
                <div className="help__banner-container">
                    <div className="help__banner-heading">
                        Want to find out more or get <br /> started with Ajoo?
                </div>
                    <div className="help__banner-desc">
                        We’d like to hear from you.
                </div>
                </div>
            </div>
        )
    }
}

export default HelpHead;