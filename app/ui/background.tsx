import Image from 'next/image';

export default function Test() {
    return (
        <div className="container">
            <Image
                src="/your-image.jpg"
                alt="Your Image Alt Text"
                layout="fill"
                objectFit="cover"
                quality={100} // Adjust as needed
            />
        </div>
    );
}