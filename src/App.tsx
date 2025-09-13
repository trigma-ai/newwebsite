import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OmnichannelDSAgent from "./pages/OmnichannelDSAgent";
import ScenarioPlannerAgent from "./pages/ScenarioPlannerAgent";
import RevOpsAgent from "./pages/RevOpsAgent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/omnichannel-ds-agent" element={<OmnichannelDSAgent />} />
            <Route path="/products/scenario-planner-agent" element={<ScenarioPlannerAgent />} />
            <Route path="/products/revops-agent" element={<RevOpsAgent />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
