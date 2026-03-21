import WorkflowLandingPage from "@/components/WorkflowLandingPage";
import { workflowPages } from "@/lib/workflowPages";

export default function PageBriefsWorkflowPage() {
  return <WorkflowLandingPage {...workflowPages["/workflows/workflow/page-briefs"]} />;
}
