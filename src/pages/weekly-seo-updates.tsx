import SeoLandingPage from "@/components/SeoLandingPage";
import { marketingPages } from "@/lib/marketingPages";

export default function WeeklySeoUpdatesPage() {
  return <SeoLandingPage {...marketingPages["/weekly-seo-updates"]} />;
}
