import React from 'react'
import * as yup from 'yup'
// import Form from "./components/form";

export const FormApp = () => {
    const schema = {
        fields: [
            {
                component: "TEXT_FIELD",
                name: "name",
                label: "Your name",
                isRequired: true,
                validate: yup.string().required("Name is required"),
                type: "text",
            },
            {
                component: "TEXT_FIELD",
                name: "email",
                label: "Email",
                isRequired: true,
                validate: yup
                    .string()
                    .email("Invalid email address")
                    .required("Email is required"),
                type: "email",
            },
            {
                component: "TEXT_FIELD",
                name: "password",
                label: "Password",
                isRequired: true,
                validate: yup
                    .string()
                    .required("Password is required")
                    .min(8, "Password must be at least 8 characters")
                    .matches(
                        /[!@#$%^&*(),.?":{}|<>]/,
                        "Password must contain at least one symbol"
                    )
                    .matches(/[0-9]/, "Password must contain at least one number")
                    .matches(
                        /[A-Z]/,
                        "Password must contain at least one uppercase letter"
                    )
                    .matches(
                        /[a-z]/,
                        "Password must contain at least one lowercase letter"
                    ),
                type: "password",
            },
            {
                component: "TEXT_FIELD",
                name: "confirmPassword",
                label: "Confirm Password",
                isRequired: true,
                validate: yup
                    .string()
                    .oneOf([yup.ref("password")], "Passwords must match")
                    .required("Confirm password is required"),
                type: "password",
            },
            {
                component: "RADIO_BUTTON",
                name: "gender",
                isRequired: true,
                label: "Gender",
                options: ["Male", "Female", "Other"],
                validate: yup.string().required("Selecting a gender is required"),
            },
            {
                component: "DATE_PICKER",
                name: "birthdate",
                label: "Date of Birth",
                validate: yup.date(),
            },
            {
                component: "SLIDER",
                name: "rating",
                label: "Rating",
                minValue: 1,
                maxValue: 5,
                validate: yup
                    .number()
                    .min(1, "Rating must be at least 1")
                    .max(5, "Rating must be no more than 5"),
            },
            {
                component: "CHECKBOX",
                name: "accept-terms",
                isRequired: true,
                label: "I accept the terms and conditions",
                validate: yup
                    .bool()
                    .oneOf([true], "You must accept the terms and conditions")
                    .required("Please accept the terms"),
            },
        ],
    };

    const onSubmit = (formData) => {
        console.log("form data = ", formData);
    };

    return (
        <div className="App">
            <h1>Config Driven Form</h1>
            {/* <Form schema={schema} onSubmit={onSubmit} /> */}
        </div>
    );
}