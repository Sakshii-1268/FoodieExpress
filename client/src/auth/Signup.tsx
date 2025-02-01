import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupInputState, userSignupScheme } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";
import { Loader2, LockKeyhole, Mail, PhoneOutgoing, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [input, setInput] = useState<SignupInputState>({
        fullname: "",
        email: "",
        password: "",
        contact: "",
    });

    const [errors, setErrors] = useState<Partial<SignupInputState>>({});
    const {signup, loading} = useUserStore();
    const navigate = useNavigate();

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const loginSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        // Form Validation Checking start
        const result = userSignupScheme.safeParse(input);
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<SignupInputState>);
            return;
        }
        //Login api implementation Start here
        try {
            await signup(input);
            navigate("/verify-email");
        } catch (error) {
            console.log(error);
            
        }
        
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                onSubmit={loginSubmitHandler}
                className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
            >
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">GoFood</h1>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            name="fullname"
                            value={input.fullname}
                            onChange={changeEventHandler}
                            placeholder="Full Name"
                            className="pl-10 focus-visible:ring-1"
                        />
                        <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors && (
                            <span className="text-xs text-red-500">{errors.fullname}</span>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            placeholder="Email"
                            className="pl-10 focus-visible:ring-1"
                        />
                        <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors && (
                            <span className="text-xs text-red-500">{errors.email}</span>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            placeholder="Password"
                            className="pl-10 focus-visible:ring-1"
                        />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors && (
                            <span className="text-xs text-red-500">{errors.password}</span>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            name="contact"
                            value={input.contact}
                            onChange={changeEventHandler}
                            placeholder="Contact"
                            className="pl-10 focus-visible:ring-1"
                        />
                        <PhoneOutgoing className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors && (
                            <span className="text-xs text-red-500">{errors.contact}</span>
                        )}
                    </div>
                </div>
                <div className="mb-10">
                    {loading ? (
                        <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please Wait
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            className="w-full bg-orange hover:bg-hoverOrange"
                        >
                            Signup
                        </Button>
                    )}
                </div>
                <Separator />
                <p className="mt-2">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
