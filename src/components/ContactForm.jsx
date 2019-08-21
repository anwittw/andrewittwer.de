import React, { useState } from "react";

import { Input, FormGroup, Label, Button } from "reactstrap";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm() {
  const [stateSubmitMessage, setstateSubmitMessage] = useState(false);
  const [stateInput, setstateInput] = useState({
    name: "",
    email: "",
    reason: ""
  });

  function handleChange(e) {
    setstateInput({
      ...stateInput,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...stateInput })
    })
      .then(() => afterSubmit())
      .catch(error => alert(error));
  }

  function afterSubmit() {
    setstateInput({ ...stateInput, name: "", email: "", reason: "" });
    setstateSubmitMessage(true);
    setTimeout(() => {
      setstateSubmitMessage(false);
    }, 3000);
  }

  return (
    <div className="ContactForm">
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="contact" value="contact" />
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            required
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            value={stateInput.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">E-Mail</Label>
          <Input
            required
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Your E-Mail"
            value={stateInput.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="reason">Select</Label>
          <Input
            required
            onChange={handleChange}
            type="select"
            name="reason"
            id="reason"
            value={stateInput.reason}
          >
            <option value="">-</option>
            <option value="Project Proposal">
              Please contact me regarding a Project proposal.
            </option>
            <option value="Weather">How's the weather there?</option>
            <option value="Coffee">I'd like to have a coffee with you.</option>
          </Input>
        </FormGroup>
        {!stateSubmitMessage && (
          <Button type="submit" className="mt-4 Contact__Button" block>
            Submit
          </Button>
        )}
      </form>
      {stateSubmitMessage && (
        <div className="text-center ContactForm_SubmitMsg">
          Thank you for your message - i will get in touch asap!
        </div>
      )}
    </div>
  );
}
