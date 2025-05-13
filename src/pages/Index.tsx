
import Dashboard from "@/components/Dashboard";
import { Toaster } from "sonner";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <Toaster position="top-center" richColors />
      <Dashboard />
    </div>
  );
};

export default Index;
