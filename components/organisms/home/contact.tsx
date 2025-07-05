import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <div id='kontak' className="skl-container py-[0.35rem] md:py-[0.7rem] px-[0.1rem] md:px-[0.7rem] animation-effect">
            <div className='flex flex-col bg-[#F5F5F5] rounded-xs p-[0.1rem] md:p-[0.5rem]'>
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className='text-[0.15rem] md:text-[0.25rem] animation-effect'>Need cargo moved?</span>
                        <span className='text-[0.2rem] md:text-[0.45rem] font-bold animation-effect'>We’re set to sail.</span>
                    </div>
                    <Link href="/contact" className="flex">
                        <button className="cursor-pointer font-medium text-[#ECECEC] bg-[#172b50] text-[0.15rem] md:text-[0.2rem] px-[0.2rem] md:px-[0.3rem] py-[0.08rem] md:py-[0.15rem]">Hubungin Kami</button>
                    </Link>
                </div>
                <Image
                    src="/assets/picture-1.png"
                    alt="interested"
                    width={4000}
                    height={1696}
                    className="w-full h-[1.5rem] md:h-[4rem] object-cover rounded-xs mt-[0.3rem] md:mt-[0.5rem] animation-effect"
                />
            </div>
        </div>
    );
}
