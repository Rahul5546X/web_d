import Image from "next/image";

// always give height and width when using this image
// size km kr skte hn baki bhi bahut chizn kr skte hn
// configure host name


export default function Home() {
  return (
     <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-cover" fill={true} src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
     </div>
  );
}

// check the different properties like fill and priority quality 