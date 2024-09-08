import Image from "next/image";
import defaultBanner from "@/assests/blog banner.png";

export const PublishFormComponent = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between mt-10">
        <p className="text-2xl">Preview</p>
        <button className="">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row  gap-10 md:gap-20 mt-10 md:mt-20">
        <Image
          src={defaultBanner}
          alt="Blog Banner"
          className="aspect-video md:max-w-[50%]"
        />
        <div className="w-full flex flex-col gap-3 md:gap-5 mt-0">
                  <p className="text-4xl leading-tight font-medium m-0 p-0">Title</p>
                  <textarea placeholder="Enter Blog Description" className="w-full bg-grey h-[100%] resize-none px-6 py-4 outline-none placeholder:opacity-50"></textarea>
          <input type="text" placeholder="Enter Tags Separated By Comma" className="outline-none bg-grey w-full h-[40px] rounded-lg px-6 py-4 placeholder:opacity-50" />
        </div>
      </div>
    </section>
  );
};
