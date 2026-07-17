import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteShell({
  children,
  headerVariant = "solid",
}: {
  children: React.ReactNode;
  headerVariant?: "transparent" | "solid";
}) {
  return (
    <>
      <Header variant={headerVariant} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
