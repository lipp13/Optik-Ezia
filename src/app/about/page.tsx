import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Compass } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "About — Optik Ezia",
  description: "Learn about Optik Ezia's Indonesian heritage, Japanese titanium craft, and optical standards.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ezia-black text-ezia-ivory pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="border-b border-ezia-warm-gray/10 pb-10">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ezia-champagne">
            Brand Heritage & Craftsmanship
          </span>
          <h1 className="mt-2 font-serif text-4xl md:text-6xl font-light uppercase text-ezia-ivory">
            About Optik <span className="italic text-ezia-champagne font-normal">Ezia</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xs md:text-sm font-light text-ezia-warm-gray/70">
            Redefining optical care across Indonesia through precision digital examination, architectural minimalism, and luxury frame design.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-light uppercase text-ezia-ivory leading-tight">
              Where Precision Eye Care Meets <br />
              <span className="italic text-ezia-champagne font-normal">
                Contemporary Eyewear.
              </span>
            </h2>

            <p className="text-sm md:text-base font-light text-ezia-warm-gray/80 leading-relaxed">
              Optik Ezia was established to transform how people experience eyewear in Indonesia. Rather than viewing glasses strictly as a medical commodity or a fast-fashion accessory, we treat optical care as an art form rooted in sub-millimeter precision.
            </p>

            <p className="text-sm md:text-base font-light text-ezia-warm-gray/80 leading-relaxed">
              Every pair of frames in our collection is forged from Japanese beta-titanium or Mazzucchelli bio-acetate, crafted to weigh under 15 grams while offering lifetime structural endurance.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative flex flex-col justify-between rounded-3xl border border-ezia-champagne/30 bg-gradient-to-br from-ezia-charcoal/80 via-ezia-black to-ezia-charcoal/80 p-8 shadow-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ezia-champagne">
                The Ezia Guarantee
              </span>

              <div className="my-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-5 w-5 text-ezia-champagne shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-lg font-normal text-ezia-ivory">100% German Optics</h4>
                    <p className="text-xs text-ezia-warm-gray/60 font-light">Certified digital wavefront lenses from ZEISS.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-ezia-champagne shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-lg font-normal text-ezia-ivory">Featherweight Titanium</h4>
                    <p className="text-xs text-ezia-warm-gray/60 font-light">Surgical grade Japanese beta-titanium construction.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Compass className="h-5 w-5 text-ezia-champagne shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-lg font-normal text-ezia-ivory">Lifetime Tuning</h4>
                    <p className="text-xs text-ezia-warm-gray/60 font-light">Complimentary nosepad, temple, and ultrasonic cleaning care.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center justify-center space-x-2 rounded-full bg-ezia-champagne py-3 text-xs font-semibold uppercase tracking-wider text-ezia-black hover:bg-ezia-ivory"
              >
                <span>Book Optical Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
