import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/button.js";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useAuth } from "../contexts/auth-context";
import { Field } from "../field";
import AuthenticationPage from "./AuthenticationPage";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import IconEyeClose from "../icon/IconEyeClose";
import IconEyeOpen from "../icon/IconEyeOpen.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config.js";
import InputPasswordToggle from "../components/input/InputPasswordToggle.js";
const schema = yup.object({
  fullname: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please your password"),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
        closeButton: true,
      });
    }
  }, [errors]);
  const [togglePassword, setTogglePassword] = useState(false);

  const { userInfo, setUserInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login Page";
    // if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };
  return (
    <AuthenticationPage>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignIn)}
        autoComplete="off"
      >
        <Field>
          <Label className="label" htmlFor="email">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            control={control}
            className="input"
          ></Input>
        </Field>
        <Field>
          <Label className="label" htmlFor="password">
            Password
          </Label>
          <InputPasswordToggle control={control}></InputPasswordToggle>
        </Field>
        You haven't have an account? <NavLink to={"/sign-up"}> Sign-up</NavLink>
        <Button
          type="submit"
          style={{ width: "100%", maxWidth: 350, margin: "0 auto" }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
