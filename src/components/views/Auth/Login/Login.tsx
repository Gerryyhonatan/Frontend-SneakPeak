import { Button, Input, Spinner } from "@nextui-org/react";
import Image from "next/image";
import useLogin from "./useLogin";
import { FaEye, FaEyeSlash, FaFacebook, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Login = () => {
    const {
      isVisible,
      toggleVisibility,
      control,
      handleSubmit,
      handleLogin,
      isPendingLogin,
      errors,
    } = useLogin();
  
    return (
      <div className="flex w-full items-center justify-center gap-20 flex-row">
        <div className="flex flex-col gap-8 items-center w-[400px]">
            <div className="flex flex-col gap-5 items-center">
              <h1 className="text-primary text-3xl font-bold">Welcome Back!</h1>
              <p className="text-base text-center text-gray-600">
              Shop your favorite brands with ease and track your orders in one place.
              </p>
            </div>
  
          {errors.root && (
            <p className="text-danger font-medium">{errors?.root?.message}</p>
          )}

            <form
              className={cn(
                "w-full",
                Object.keys(errors).length > 0 ? "space-y-1" : "space-y-4"
              )}
              onSubmit={handleSubmit(handleLogin)}
            >
  
              <Controller
                name="identifier"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="Email / Username"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={!!errors.identifier}
                    errorMessage={errors.identifier?.message}
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
                    type={isVisible ? "text" : "password"}
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
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
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
                {isPendingLogin ? <Spinner color="white" size="sm" /> : "Login"}
              </Button>
            </form>
          
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
                Don{"'"}t have an account?&nbsp;
                <Link href="/auth/register" className="text-primary font-semibold">
                  Register
                </Link>
              </p>
        </div>

        <div className="w-1/3 items-center justify-center">
          <Image
            src="/images/register.png"
            alt="register"
            width={1024}
            height={1024}
          />
        </div>
      </div>
    );
  };
  

export default Login;