import React, { useState } from "react";

import { Input, FormGroup, Label, Button } from "reactstrap";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm() {
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
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  }

  return (
    <div className="ContactForm">
      <h5>form values</h5>
      <pre>{JSON.stringify(stateInput, null, 2)}</pre>
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
          >
            <option value="">-</option>
            <option value="Project Proposal">
              Please contact me regarding a Project proposal.
            </option>
            <option value="Weather">How's the weather there?</option>
            <option value="Weather">I'd like to have a coffee with you.</option>
          </Input>
        </FormGroup>
        <Button type="submit" className="mt-4 Contact__Button" block>
          Submit
        </Button>
      </form>
    </div>
  );
}
