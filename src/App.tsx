import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privatlivspolitik from "./pages/Privatlivspolitik";
import Handelsbetingelser from "./pages/Handelsbetingelser";
import CookiePolitik from "./pages/CookiePolitik";
import ModTeamet from "./pages/ModTeamet";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
  <BrowserRouter basename="/TrivonWeb">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privatlivspolitik" element={<Privatlivspolitik />} />
          <Route path="/handelsbetingelser" element={<Handelsbetingelser />} />
          <Route path="/cookie-politik" element={<CookiePolitik />} />
          <Route path="/mod-teamet" element={<ModTeamet />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
