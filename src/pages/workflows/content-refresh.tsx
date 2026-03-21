import WorkflowLandingPage from "@/components/WorkflowLandingPage";
import { workflowPages } from "@/lib/workflowPages";

export default function ContentRefreshWorkflowPage() {
  return <WorkflowLandingPage {...workflowPages["/workflows/content-refresh"]} />;
}
