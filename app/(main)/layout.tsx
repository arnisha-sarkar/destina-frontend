import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar /> {/* এই নেভবার শুধু ল্যান্ডিং পেজে দেখাবে */}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
