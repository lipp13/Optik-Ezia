import CollectionClient from "@/components/collection/CollectionClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Catalogue — Optik Ezia",
  description: "Browse contemporary Japanese titanium optical frames, sunglasses, and precision care contact lenses.",
};

export default function CollectionPage() {
  return <CollectionClient />;
}
