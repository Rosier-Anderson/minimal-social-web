import { NotificationHeader } from "@/src/ui/(platform)/notification/_components/NotificationHeader";

export default async function NotificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <NotificationHeader />
      <div>{children}</div>
    </div>
  );
}
