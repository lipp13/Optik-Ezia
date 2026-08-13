import StoresClient from "@/components/stores/StoresClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Stores — Optik Ezia",
  description: "Find Optik Ezia flagship optical stores and boutique locations across Indonesia.",
};

export default function StoresPage() {
  return <StoresClient />;
}
