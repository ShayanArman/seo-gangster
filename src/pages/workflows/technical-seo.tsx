import WorkflowLandingPage from "@/components/WorkflowLandingPage";
import { workflowPages } from "@/lib/workflowPages";

export default function TechnicalSeoWorkflowPage() {
  return <WorkflowLandingPage {...workflowPages["/workflows/technical-seo"]} />;
}
