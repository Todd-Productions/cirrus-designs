import React, { Fragment } from "react";
import * as axios from "axios";

import Form from "../Form";
import Mutation from "../Mutation";

const sendToLambda = data =>
  axios.post(`/.netlify/functions/contactus`, { ...data });
// axios.post(`http://localhost:9000/contactus`, { ...data });

class ContactForm extends React.Component {
  render() {
    return (
      <Mutation mutation={sendToLambda}>
        {(submitForm, { error, loading, result }) => (
          <Form
            classes="form mt"
            state={{
              name: "",
              email: "",
              message: ""
            }}
            required={["name", "email", "message"]}
            onSubmit={submitForm}
          >
            {({ state, handleChange, isInvalid }) => (
              <Fragment>
                <div className="form_input">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    value={state.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>

                <div className="form_input">
                  <label>Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form_input">
                  <label>What Can We Help You With? *</label>
                  <textarea
                    name="message"
                    value={state.message}
                    onChange={handleChange}
                  />

                  {error === null && result !== null && (
                    <div className="alert alert--success">
                      Success! Thank you, we will be in touch shortly.
                    </div>
                  )}

                  {error && (
                    <div className="alert alert--danger">
                      Error with submitting form, please try again
                    </div>
                  )}

                  <button
                    className="btn btn--default btn--block btn--lg"
                    type="submit"
                    disabled={isInvalid || loading}
                  >
                    {loading ? "Loading..." : "Start The Conversation"}
                  </button>
                </div>
              </Fragment>
            )}
          </Form>
        )}
      </Mutation>
    );
  }
}

export default ContactForm;
