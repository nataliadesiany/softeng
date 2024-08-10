import Image from "next/image";

const Home = () => {
  return (
    <main className="min-h-screen flex justify-center items-center  bg-[#FEFBDE]">
      <div className="flex flex-col justify-center items-center p-4 gap-4">
        <h1 className="text-black text-center font-bold p-2 lg md:text-4xl mt-10">Natalia Desiany Nursimin
        </h1>
        <Image 
          src="/838543.jpg"
          alt="foto diri"
          width={400}
          height={300}
          className="rounded-lg mb-10"
        />
        <h2 className="text-black text-center font-semibold p-2 md:text-2xl text-justify px-40"> Saya adalah seorang mahasiswi Teknik Informatika di Institut Teknologi Bandung yang senang mempelajari hal-hal baru. Saya merupakan seorang individu yang selalu berusaha untuk mencari pengalaman-pengalaman baru untuk dapat meningkatkan pengetahuan saya, memperluas relasi dan menjalin pertemanan baru, serta memperbaiki diri saya agar dapat menjadi versi diri saya yang lebih baik kedepannya.
        </h2>
        <h3 className="text-black text-center font-semibold p-2 md:text-2xl  text-justify px-40"> Sebagai mahasiswi Teknik Informatika di Institut Teknologi Bandung, saya memiliki minat yang tinggi dalam mengeksplorasi dan mempelajari berbagai aspek pengembangan perangkat lunak, serta teknologi dan pengembangan terbaru di bidang informatika. Saya memiliki ketertarikan mendalam untuk terus mencari pengalaman baru yang dapat memperluas wawasan dan melatih skill saya dalam coding. Selain itu, saya memiliki bakat dalam mempelajari hal-hal baru dengan cepat yang didukung oleh kepribadian saya yang selalu ingin tahu dan suka menjelajahi inovasi terbaru, khususnya dalam dunia pemrograman.
        </h3>
        <h4 className="text-black text-center font-semibold p-2 md:text-2xl  text-justify px-40 mb-10"> Beberapa proyek yang telah saya kerjakan meliputi tugas besar 1 dan 2 dalam mata kuliah Pengenalan Komputasi, serta tugas besar 1 dan 2 dalam mata kuliah Dasar Pemrograman. Dalam setiap proyek ini, saya berhasil menyelesaikannya secara tepat waktu, efisien, dan dengan hasil yang memuaskan, yang menjadi pencapaian penting dalam perjalanan akademis saya.
        </h4>
        <h5 className="text-black text-center font-semibold p-2 md:text-2xl  text-justify px-40"> Kontak Diri
        </h5>
          <p className="text-black">Nomor Telepon: 085810800178
          </p>
          <p className="text-black">Email: nataliadesianyy@gmail.com
          </p>
          <p className="text-black">
            <a href="https://linkedin.com/in/natalia-desiany-nursimin-443b60269/" className="text-blue-300 hover:underline">LinkedIn Profile</a>
          </p>
      </div>
    </main>
  );
};

export default Home;
