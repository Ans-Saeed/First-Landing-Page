import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative ">
                <div className="absolute -left-48 top-16 hidden lg:block">
                    <Image
                        src={designExample1Image}
                        alt="My design image 1 example"
                    />
                </div>
                <div className="absolute -right-80 -top-16 hidden lg:block">
                    <Image
                        src={designExample2Image}
                        alt="My design image 2 example"
                    />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andrea"/>
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Brayan" color="red"/>
                </div>
                <div className="flex justify-center">
                    <div className=" inline-flex  font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950 rounded-full py-1 px-3 ">
                        {" "}
                        ✨$7.5 million seed round raised{" "}
                    </div>
                </div>
                <h1 className="mt-6 md:text-7xl lg:text-8xl font-medium text-center text-6xl ">
                    Impactful desing, created effertlessely
                </h1>
                <p className="mt-8 font-medium md:max-w-2xl md:mx-auto text-center text-xl text-white/50 ">
                    {" "}
                    Desing tools shouldn't slow you down, Layers combine
                    powerful features with an intutive interface that keeps you
                    in your creative flow.
                </p>
                <form className=" flex border border-white/15 mt-8 rounded-full p-2 max-w-lg mx-auto">
                    <input
                        className="bg-transparent px-4 w-full outline-none"
                        type="email"
                        placeholder="Enter your Email"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        size="sm"
                        className=" whitespace-nowrap"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
