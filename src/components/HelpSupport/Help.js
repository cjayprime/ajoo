import React, { Component } from 'react';

import FormInputField from "../../sharedComponent/form";
import { validate } from "../../utils/misc";
import { miscRequest } from "../../store/miscModules/saga";
import LoadableButton from '../../sharedComponent/LoadableButton';
import AlertDialog from '../../sharedComponent/AlertDialog';

class HelpSupport extends Component {
    constructor(props) {
        super(props);
        const { user } = this.props;
        this._isMounted = false;
        this.state = {
            formError: false,
            hidden: true,
            fields: {
                email: {
                    value: user.email || "",
                    error: null,
                    errorMessage: "",
                    name: "Email",
                    rules: {
                        required: true,
                        minLength: 4,
                        email: true
                    }
                },
                name: {
                    value: `${user.first_name} ${user.last_name}` || "",
                    error: null,
                    errorMessage: "",
                    name: "Your name",
                    rules: {
                        required: true,
                    }
                },
                mobile: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "Mobile",
                    rules: {
                        required: true,
                    }
                },
                message: {
                    value: "",
                    error: null,
                    errorMessage: "",
                    name: "message",
                    rules: {
                        required: true
                    }
                }
            }
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        let newState = { ...this.state };
        Object.keys(newState.fields).map(key => {
            newState.fields[key].value = "";
            newState.fields[key].error = null;
            newState.fields[key].errorMessage = "";
        });
        this._safelySetState(newState);
    }

    triggerHelpSupportAction = e => {
        e.preventDefault();
        var fields = this.state.fields;
        var compulsoryFields = {};
        for (var key in fields) {
            compulsoryFields[key] = fields[key];
        }

        if (validate(this, compulsoryFields)) {

            let data = {};
            Object.keys(this.state.fields).map(key => {
                data[key] = this.state.fields[key].value;
            });
            this.props.helpSupportAction({ data, history: this.props.history })
        }
    };

    _handleChange = e => {
        const { name, value } = e.target;

        let newState = { ...this.state };
        newState.formError = false;
        newState.fields[name].error = false;
        newState.fields[name].value = value;
        this._safelySetState(newState);

        validate(this, this.state.fields, e)
    };

    onBlur = (res, name) => {
        const { error, errorMessage } = res;
        let newForm = { ...this.state };
        newForm.fields[name] = {
            ...newForm.fields[name],
            error,
            errorMessage
        };

        this._safelySetState(newForm);
    };

    _safelySetState = (newState, prevState = null) => {
        if (this._isMounted)
            return this.setState(state => ({
                [prevState]: !state[prevState],
                ...newState
            }));
    };

    render() {
        const { isLoading, utils } = this.props;
        const { email, name, mobile, message } = this.state.fields;
        return (
            <>
                <div className="help__body">
                    <form onSubmit={this.triggerHelpSupportAction}>
                        <div className="help__name">
                            <div className="help__form-name">
                                <FormInputField
                                    type="text"
                                    placeholder="Sussan Benjamin"
                                    name="name"
                                    value={name.value}
                                    form={this.state.fields}
                                    onBlur={this.onBlur}
                                    onChange={this._handleChange}
                                    labelTitle="YOUR NAME"
                                />
                            </div>
                            <div className="help__form-email">
                                <FormInputField
                                    type="email"
                                    placeholder="sussanbenjamin.mail.com"
                                    name="email"
                                    value={email.value}
                                    onBlur={this.onBlur}
                                    form={this.state.fields}
                                    labelTitle="EMAIL ADDRESS"
                                    onChange={this._handleChange}
                                />
                            </div>
                        </div>
                        <div className="help__phone-number">
                            <FormInputField
                                type="phone"
                                placeholder="+234343434343"
                                name="mobile"
                                value={mobile.value}
                                onBlur={this.onBlur}
                                form={this.state.fields}
                                labelTitle="PHONE NUMBER"
                                onChange={this._handleChange}
                            />
                        </div>
                        <div className="help__message">
                            <FormInputField
                                type="textarea"
                                name="message"
                                value={message.value}
                                onBlur={this.onBlur}
                                form={this.state.fields}
                                labelTitle="MESSAGE"
                                onChange={this._handleChange}
                            />
                        </div>
                        <AlertDialog
                            open={utils.feedback.for === miscRequest.helpSupportRequest}
                            message={utils.feedback.message}
                            success={utils.feedback.success}
                        />
                        <div className="help__button">
                            <LoadableButton
                                error={this.state.formError}
                                btnTitle="send a message"
                                type="submit"
                                isLoading={isLoading}
                            />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default HelpSupport;