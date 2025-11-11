import Image from "next/image";
import payment from "../../../public/qris-digimeta.png";

export default function page() {
  return (
    <>
      <div className="flex justify-center items-center h-[100%]">
        <Image
          src={payment}
          alt="payment-methods"
          width={600}
          height={400}
          className="mx-auto my-10"
        />
      </div>
    </>
  );
}
