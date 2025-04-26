import Image from "next/image"
import { Button } from "@nextui-org/react"
import { useRouter } from "next/router"

const RegisterSuccess = () => {
    const router = useRouter()
    return (
        <div className="flex w-full flex-col items-center justify-center gap-10 p-4">
            <div className="flex flex-col items-center justify-center gap-10">
                <Image src="/images/general/2.png" alt="success" width={200} height={180}/>
                <Image src="/images/illustration/running.svg" alt="success" width={200} height={250}/>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-3xl font-bold text-primaryBlue">Create Account Success</h1>
                <p className="text-xl font-bold text-default-500">Check your email account for activation</p>
                <Button className="mt-4 w-fit" variant="bordered" color="primary" onPress={() => router.push('/auth/login')}>Back To Login</Button>
            </div>
        </div>
    )
}

export default RegisterSuccess