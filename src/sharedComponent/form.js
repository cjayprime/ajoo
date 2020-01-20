import React from "react";
import Spinner from "./Spinner";
import { validate } from "../utils/misc";

const FormInputField = function(props){
  const {
    id,
    value,
    name,
    className,
    onChange,
    onKeyUp,
    type,
    onBlur,
    options,
    form,
    maxlength,
    cols,
    rows,
    style,
    defaultValue,
    placeholder,
    isFetching,
    labelTitle,
    labelRight
  } = props;

  /*
  function handleBlur(event) {
    var { name } = event.target;
    var properties = { ...form };
    var { rules, value, name: inputName } = properties[name];
    var re;
    var valid;

    const setError = error => {
      onBlur({ ...error, name }, name);
    };

    if (rules.required && value.length === 0) {
      return setError({
        error: true,
        errorMessage: `${inputName} can't be empty`
      });
    }
    if (rules.maxLength && value.length > rules.maxLength) {
      return setError({ error: true, errorMessage: "value too long" });
    }
    if (rules.minLength && value.length < rules.minLength) {
      return setError({ error: true, errorMessage: "value too short" });
    }
    if (rules.email) {
      re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      valid = re.test(value);
      if (!valid) {
        return setError({
          error: true,
          errorMessage: "Email must be a valid mail"
        });
      }
    }
    if (rules.password) {
      re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;
      valid = re.test(value);
      if (!valid) {
        return setError({
          error: true,
          errorMessage:
            "Atleast a number, a capital letter, and minimum of 8 characters"
        });
      }
    }
    if (rules.confirmPassword) {
      if (value !== properties["password"].value) {
        return setError({
          error: true,
          errorMessage: "Must be equal to password input"
        });
      }
    }
    if (rules.length) {
      if (value.length !== rules.length) {
        return setError({
          error: true,
          errorMessage: "Your phone number should look like +2348012345678"
        });
      }
    }
    if (rules.hasPrenumber) {
      var index = value.split("+234");

      if (index[0] !== "") {
        return setError({
          error: true,
          errorMessage: "Your phone number should start with +234"
        });
      }
    }

    return setError({ error: false, errorMessage: "" });
  }
  */


  if (type === "select") {
    return (
      <div>
        <label style={{ color: form[name].error ? "red" : "inherit" }}>
          {form[name].error ? form[name].errorMessage.toUpperCase() : labelTitle.toUpperCase()}
        </label>
        <select
          className={className}
          name={name}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
        >
          <option value="" hidden>{`Select your ${labelTitle.toLowerCase()}`}</option>
          {isFetching ? <option disabled>loading...</option> : options}
        </select>
      </div>
    );
  } else if (type === "textarea") {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label style={{ color: form[name].error ? "red" : "inherit" }}>
            {form[name].error ? form[name].errorMessage.toUpperCase() : labelTitle.toUpperCase()}
          </label>
          <span className="labelRight">{labelRight}</span>
        </div>
        <textarea
          maxLength={maxlength}
          cols={cols}
          rows={rows}
          style={style}
          className={className}
          name={name}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          defaultValue={defaultValue}
        />
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label style={{ color: form[name].error ? "red" : "inherit" }}>
          {form[name].error ? form[name].errorMessage.toUpperCase() : labelTitle.toUpperCase()}
        </label>
        <span className="labelRight">{labelRight}</span>
      </div>
      <input
        id={id}
        value={value}
        name={name}
        onBlur={
          /*Added this (was formerly `handleBlur`) so that handleBlur can come from the parent component (src\components\CreateCampaign\CreateCampaignForm.js)props.validate || handleBlur*/
          (e) => {
            validate(this, form, e);
          }
        }
        className={className}
        type={type || "text"}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInputField;
