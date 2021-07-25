import React, { Component } from "react";
import { Formik } from "formik";
// import * as Yup from "yup";

import { Root, Form, Input, Text, Button, Label, Heading, Subheading } from "./styled.js";

class App extends Component {
  render() {
    return (
      <Root>
        <Heading>Software | Cloud | Machine Learning</Heading>
        <Subheading>Get it weekly via email</Subheading>
        <Formik
          initialValues={{ email: "", name: "" }}
          validate={values => {
            let errors = {};
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // validation
            if (!values.email) {
              errors.email = "Email is required";
            } else if (!re.test(values.email)) {
              errors.email = "Invalid email 😭";
            }
            return errors;
          }}
          onSubmit={values => {
            alert(values);
          }}
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Label>
                Email *
                {touched.email &&
                  errors.email && <Text color="red">{errors.email}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  border={touched.email && errors.email && "2px solid red"}
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </Label>
              <Label>
                Name
                {touched.name &&
                  errors.name && <Text color="red">{errors.name}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  border={
                    touched.name && errors.name && "1px solid red"
                  }
                  type="name"
                  name="name"
                  placeholder="Name"
                />
              </Label>
              <Button type="submit">Submit</Button>
            </Form>
          )}
        />
      </Root>
    );
  }
}

export default App;