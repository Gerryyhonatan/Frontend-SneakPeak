import { Button, Input, Spinner } from "@nextui-org/react";
import Image from "next/image";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash, FaFacebook, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";
import OtpForm from "./OtpForm";

const Register = () => {
    const {
      visiblePassword,
      handleVisiblePassword,
      control,
      handleSubmit,
      handleRegister,
      isPendingRegister,
      errors,
      isOtpSent,
      userData
    } = useRegister();
  
    const showOtpForm = isOtpSent && userData?.email;
  
    return (
      <div className="flex w-full items-center justify-center gap-20 flex-row">
        <div className="w-1/3 items-center justify-center">
          <Image
            src="/images/register.png"
            alt="register"
            width={1024}
            height={1024}
          />
        </div>
  
        <div className="flex flex-col gap-8 items-center w-[400px]">
          {/* Title & Description */}
          {!showOtpForm && (
            <div className="flex flex-col gap-5 items-center">
              <h1 className="text-primary text-3xl font-bold">Create Account!</h1>
              <p className="text-base text-center text-gray-600">
                Join now to shop easier, track orders, and enjoy member-only offers.
              </p>
            </div>
          )}
  
          {/* OTP Title */}
          {showOtpForm && (
            <div className="flex flex-col gap-4 items-center text-center">
              <h1 className="text-primary text-3xl font-bold">Verify OTP</h1>
              <p className="text-base text-gray-600">
                We have sent a verification code to <strong>{userData.email}</strong>. <br />
                Please enter the code to complete registration.
              </p>
            </div>
          )}
  
          {/* Error message */}
          {errors.root && (
            <p className="text-danger font-medium">{errors?.root?.message}</p>
          )}
  
          {/* Form Area */}
          {showOtpForm ? (
            <OtpForm email={userData.email} />
          ) : (
            <form
              className={cn(
                "w-full",
                Object.keys(errors).length > 0 ? "space-y-1" : "space-y-4"
              )}
              onSubmit={handleSubmit(handleRegister)}
            >
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="Fullname"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={!!errors.fullName}
                    errorMessage={errors.fullName?.message}
                    size="lg"
                    classNames={{
                      inputWrapper: "rounded-full border border-opacity-90",
                      input: "text-black px-5",
                      label: "text-primary"
                    }}
                  />
                )}
              />
  
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="Username"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={!!errors.username}
                    errorMessage={errors.username?.message}
                    size="lg"
                    classNames={{
                      inputWrapper: "rounded-full border border-opacity-90",
                      input: "text-black px-5",
                      label: "text-primary"
                    }}
                  />
                )}
              />
  
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                    size="lg"
                    classNames={{
                      inputWrapper: "rounded-full border border-opacity-90",
                      input: "text-black px-5",
                      label: "text-primary"
                    }}
                  />
                )}
              />
  
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type={visiblePassword.password ? "text" : "password"}
                    placeholder="Password"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={!!errors.password}
                    errorMessage={errors.password?.message}
                    size="lg"
                    endContent={
                      <button
                        className="focus:outline-none px-5"
                        type="button"
                        onClick={() => handleVisiblePassword("password")}
                      >
                        {visiblePassword.password ? (
                          <FaEye className="text-default-400 text-xl" />
                        ) : (
                          <FaEyeSlash className="text-default-400 text-xl" />
                        )}
                      </button>
                    }
                    classNames={{
                      inputWrapper: "rounded-full border border-opacity-90",
                      input: "text-black px-5",
                      label: "text-primary"
                    }}
                  />
                )}
              />
  
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type={visiblePassword.confirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={!!errors.confirmPassword}
                    errorMessage={errors.confirmPassword?.message}
                    size="lg"
                    endContent={
                      <button
                        className="focus:outline-none px-5"
                        type="button"
                        onClick={() => handleVisiblePassword("confirmPassword")}
                      >
                        {visiblePassword.confirmPassword ? (
                          <FaEye className="text-default-400 text-xl" />
                        ) : (
                          <FaEyeSlash className="text-default-400 text-xl" />
                        )}
                      </button>
                    }
                    classNames={{
                      inputWrapper: "rounded-full border border-opacity-90",
                      input: "text-black px-5",
                      label: "text-primary"
                    }}
                  />
                )}
              />
  
              <Button
                size="lg"
                type="submit"
                className="w-full rounded-full bg-black text-white"
              >
                {isPendingRegister ? <Spinner color="white" size="sm" /> : "Register"}
              </Button>
            </form>
          )}
  
          {/* Social media login */}
          {!showOtpForm && (
            <>
              <div className="flex items-center w-full">
                <div className="flex-grow border-t border-gray-300" />
                <span className="px-4 text-sm text-gray-500">or continue with</span>
                <div className="flex-grow border-t border-gray-300" />
              </div>
  
              <div className="flex items-center gap-6 justify-center">
                <Link href="/">
                  <FcGoogle className="text-5xl cursor-pointer" />
                </Link>
                <Link href="/">
                  <FaInstagram className="text-5xl cursor-pointer" />
                </Link>
                <Link href="/">
                  <FaFacebook className="text-5xl cursor-pointer" />
                </Link>
              </div>
  
              <p className="text-center">
                Have an account?&nbsp;
                <Link href="/auth/login" className="text-primary font-semibold">
                  Login
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    );
  };
  

export default Register;