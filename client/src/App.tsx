import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import ThemeProvider from "@/components/template/ThemeProvider";
import MenuBar from "@/components/shared/MenuBar";
import Home from "@/views/Home/components/Home";
import ThemesPage from "@/views/Home/themes";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/themes" component={ThemesPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <MenuBar />
            <main className="flex-grow">
              <Router />
            </main>
            <Toaster />
          </div>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
