import { Link } from "react-router-dom";
import Button from "~/components/Form/Button";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-xl font-bold tracking-tight sm:text-5xl">Sayfa bulunamadı</h1>
        <p className="mt-6 text-base leading-7">Üzgünüz, aradığınız sayfayı bulamadık.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link >
            <Button>Geri Dön</Button>
          </Link>
        </div>
      </div>
    </main>

  )
}
