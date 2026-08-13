import ServicesClient from "@/components/services/ServicesClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Services — Optik Ezia",
  description: "Explore German digital wavefront refraction eye examinations, 3D fitting, and optical care.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
