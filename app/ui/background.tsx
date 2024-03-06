import Image from 'next/image';

export default function Test() {
    return (
        <div className=".bg-no-repeat">
            <Image
                src="/forest.jpg"
                alt="Your Image Alt Text"
                layout="fill"
                objectFit="cover"
                quality={100} // Adjust as needed
            />
        </div>
    );
}