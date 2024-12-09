import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
        {/*Left */}
        <div className="w-[14%] md:w[8%] lg:[16%] xl:[14%]">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="log" width={32} height={32}/>
          <span className="hidden lg:block font-bold">SchoolKe</span>
          </Link>
          <Menu />
        </div>
        {/* Right */}
        <div className="w-[86%] md:w[92%] lg:[84%] xl:[86%] bg-[#F7F8FA] overflow-scroll">
          <Navbar />
          {children}
        </div>
      </div>
    );
  }