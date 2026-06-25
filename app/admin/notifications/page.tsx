import { requireAdmin } from "@/lib/admin/auth";
import AdminTopbar from "@/components/admin/AdminTopbar";

export default async function NotificationsPage() {
  const admin = await requireAdmin();
  return (
    <>
      <AdminTopbar title="Notificações" admin={admin} />
      <main style={{ padding: 24, maxWidth: 560 }}>
        <p style={{ color: "#64748B", fontSize: 14 }}>Sistema de push notifications desativado.</p>
      </main>
    </>
  );
}
