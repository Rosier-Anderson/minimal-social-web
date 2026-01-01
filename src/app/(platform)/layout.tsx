import Header from "../../ui/(platform)/_components/Header";
import Sidebar from "../../ui/(platform)/_components/Sidebar";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="size-screen
    grid grid-rows-[50px_minmax(300px,1fr)_50px] sm:grid-cols-[50px_1fr] sm:grid-flow-col"
    >
      <Header className="sm:col-start-2" />
      <Sidebar className="row-start-3 sm:row-start-1 sm:row-span-3" />
      <div className="sm:row-span-2 flex justify-center">{children}</div>
    </div>
  );
}
