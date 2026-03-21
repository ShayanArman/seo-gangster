import WorkflowLandingPage from "@/components/WorkflowLandingPage";
import { workflowPages } from "@/lib/workflowPages";

export default function InternalLinkingWorkflowPage() {
  return <WorkflowLandingPage {...workflowPages["/workflows/workflow/internal-linking"]} />;
}
