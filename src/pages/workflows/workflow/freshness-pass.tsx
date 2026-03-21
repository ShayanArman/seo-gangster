import WorkflowLandingPage from "@/components/WorkflowLandingPage";
import { workflowPages } from "@/lib/workflowPages";

export default function FreshnessPassWorkflowPage() {
  return <WorkflowLandingPage {...workflowPages["/workflows/workflow/freshness-pass"]} />;
}
