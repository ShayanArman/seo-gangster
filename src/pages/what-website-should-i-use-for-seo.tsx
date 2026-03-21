import SeoLandingPage from "@/components/SeoLandingPage";
import { marketingPages } from "@/lib/marketingPages";

export default function WhatWebsiteShouldIUseForSeoPage() {
  return <SeoLandingPage {...marketingPages["/what-website-should-i-use-for-seo"]} />;
}
