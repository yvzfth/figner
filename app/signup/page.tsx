// pages/signup.js
"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Container, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
// Validation schema using yup
const schema = yup.object().shape({
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    dob: yup.date().required("Date of Birth is required"),
    gender: yup.string().required("Gender is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    profilePicture: yup.mixed().required("Profile Picture is required"),
    interests: yup.string(),
    // .required('Interests are required'),
    hobbies: yup.string(),
    // .required('Hobbies are required'),
    relationshipPreferences: yup.string(),
    // .required('Relationship Preferences are required'),
    occupation: yup.string(),
    // .required('Occupation/Work Details are required'),
    education: yup.string(),
    // .required('Educational Background is required'),
    location: yup.string(),
    // .required('Location is required'),
});

const SignUp = () => {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data: any) => {
        console.log(data);
        try {
            const response = await fetch("/api/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Kayıt oluşturdu");
                // router.push("/");
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Container className="flex flex-col items-center justify-center min-h-screen">
            <Typography variant="h4" className="my-4">
                Sign Up
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                {/* Basic Information */}
                <div className="mb-4">
                    <Typography variant="h6" className="mb-2">
                        Basic Information
                    </Typography>
                    <div className="grid grid-cols-2 gap-4">
                        <Controller
                            name="firstname"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.firstname}
                                    helperText={errors.firstname?.message}
                                />
                            )}
                        />
                        <Controller
                            name="lastname"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.lastname}
                                    helperText={errors.lastname?.message}
                                />
                            )}
                        />
                        <Controller
                            name="dob"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type="date"
                                    label="Date of Birth"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.dob}
                                    helperText={errors.dob?.message}
                                />
                            )}
                        />
                        <Controller
                            name="gender"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Gender"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.gender}
                                    helperText={errors.gender?.message}
                                />
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                />
                            )}
                        />
                        <Controller
                            name="profilePicture"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type="file"
                                    label="Profile Picture"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.profilePicture}
                                    helperText={errors.profilePicture?.message}
                                />
                            )}
                        />
                    </div>
                </div>

                {/* Extended Information for Matching */}
                <div>
                    <Typography variant="h6" className="mb-2">
                        Extended Information for Matching
                    </Typography>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Add more fields as needed */}
                        {/* ... */}

                        {/* Submit Button */}
                        <div className="col-span-2">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
            <Toaster position="top-center" reverseOrder={false} />
        </Container>
    );
};

export default SignUp;
