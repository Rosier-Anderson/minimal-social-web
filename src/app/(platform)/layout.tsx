import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
      <Sidebar />
      <div className="">{children}</div>
    </div>
  );
}
