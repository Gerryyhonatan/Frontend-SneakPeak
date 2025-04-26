import { Button, Input, Spinner } from "@nextui-org/react";
import authServices from "@/services/auth.service";
import { useRouter } from "next/router";
import { useState } from "react";

const OtpForm = ({ email }: { email: string }) => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");

  const handleVerifyOtp = async () => {
    setIsVerifying(true);
    setError("");

    try {
      await authServices.verifyOtp({ email, otp });
      router.push("/auth/register/success");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to verify OTP");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <Input
        placeholder="Enter 6-digit code"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        variant="bordered"
        size="lg"
        isInvalid={!!error}
        errorMessage={error}
        classNames={{
          inputWrapper: "rounded-full border border-opacity-90",
          input: "text-black px-5",
        }}
      />

      <Button
        size="lg"
        className="w-full rounded-full bg-black text-white"
        onClick={handleVerifyOtp}
        isDisabled={otp.length < 6 || isVerifying}
      >
        {isVerifying ? <Spinner color="white" size="sm" /> : "Verify OTP"}
      </Button>
    </div>
  );
};

export default OtpForm;
