"use client"
import Image from "next/image"

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Tentang Saya</h1>
            <div className="space-y-4 text-gray-600">
              <p>
                Saya adalah seorang web developer dengan pengalaman dalam mengembangkan aplikasi web modern.
                Passion saya adalah menciptakan solusi digital yang inovatif dan user-friendly.
              </p>
              <p>
                Dengan latar belakang di bidang teknologi informasi, saya telah mengerjakan berbagai
                proyek yang melibatkan teknologi terkini seperti React, Next.js, dan berbagai framework modern lainnya.
              </p>
              <p>
                Saya percaya bahwa teknologi harus membuat hidup lebih mudah dan lebih baik.
                Itulah mengapa saya selalu berusaha untuk membuat aplikasi yang tidak hanya fungsional,
                tetapi juga mudah digunakan dan memberikan nilai tambah bagi pengguna.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn-sdotid.adg.id/images/6be810a2-46ed-4590-b3e8-804dc2bcbd7b_930x931.webp.jpeg?height=500&width=500"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

